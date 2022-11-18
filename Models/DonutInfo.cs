using System;
using System.Collections.Generic;

namespace DonutsXDevs.Models;

public partial class DonutInfo
{
    public int Id { get; set; }

    public string? Ref { get; set; }

    public string? Name { get; set; }

    public int? Calories { get; set; }

    public string? Extras { get; set; }

    public string? Photo { get; set; }

    public string? PhotoAttribution { get; set; }
}
