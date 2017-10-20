VERoute  = function()
{
    /// <summary>Contains the route and itinerary information for a generated route. A VERoute object is returned to the callback when the VEMap.GetDirections Method is called.</summary>
    /// <field name="Distance">A floating-point value that specifies the total length of the route.</field>        
    /// <field name="RouteLegs">An array of VERouteLeg Class objects that specify the intermediate legs of the route.</field>  
    /// <field name="Time">The total elapsed time, in seconds, to traverse the route.</field>  
    /// <field name="ShapePoints">An array of VELatLong Class objects that identify the shape of the route. Remarks: The shape points are created for the highest zoom level, which means the closest to the ground. Terms of Use: All use of route shape point data is restricted to customers who have received explicit permission and instructions about route shape points from Microsoft. For more information on terms for use of route shape points, contact the Bing Maps Licensing Team.</field>  
};

VERoute.prototype =
{
    Distance : null,
    RouteLegs : null,
    Time : null, 
    ShapePoints : null
}

