VERouteSegment = function() 
{
    /// <summary>Contains details about one segment of a VERoute Class object.</summary>
    /// <field name="Instruction" type="String">The driving instructions for this segment of the route.</field>
    /// <field name="Distance" type="Number">The distance of this segment of the route.</field>
    /// <field name="LatLong" type="VELatLong">A VELatLong Class object of the start point of this segment.</field>
}

VERouteSegment.prototype =
{   
    Instruction: null,
    Distance: null,
    LatLong: null
}

