using System;
using System.Collections.Generic;

namespace DonutsXDevs.Models;

public partial class Donut
{
    public int Id { get; set; }

    public string? Ref { get; set; }

    public string? Name { get; set; }

    public string? Photo { get; set; }

    public string? PhotoAttribution { get; set; }
}
