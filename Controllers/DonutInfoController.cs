using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DonutsXDevs.Models;

namespace DonutsXDevs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonutInfoController : ControllerBase
    {
        private readonly DxdContext _context;

        public DonutInfoController(DxdContext context)
        {
            _context = context;
        }

        // GET: api/DonutInfo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DonutInfo>>> GetDonutInfos()
        {
            return await _context.DonutInfos.ToListAsync();
        }

        // GET: api/DonutInfo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DonutInfo>> GetDonutInfo(int id)
        {
            var donutInfo = await _context.DonutInfos.FindAsync(id);

            if (donutInfo == null)
            {
                return NotFound();
            }

            return donutInfo;
        }

        // PUT: api/DonutInfo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDonutInfo(int id, DonutInfo donutInfo)
        {
            if (id != donutInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(donutInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DonutInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DonutInfo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DonutInfo>> PostDonutInfo(DonutInfo donutInfo)
        {
            _context.DonutInfos.Add(donutInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDonutInfo", new { id = donutInfo.Id }, donutInfo);
        }

        // DELETE: api/DonutInfo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDonutInfo(int id)
        {
            var donutInfo = await _context.DonutInfos.FindAsync(id);
            if (donutInfo == null)
            {
                return NotFound();
            }

            _context.DonutInfos.Remove(donutInfo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DonutInfoExists(int id)
        {
            return _context.DonutInfos.Any(e => e.Id == id);
        }
    }
}
