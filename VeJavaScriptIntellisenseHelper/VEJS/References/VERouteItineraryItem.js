VERouteItineraryItem = function()
{
    /// <summary>Specifies a step in the step-by-step directions of a route.</summary>
    /// <field name="Distance">A floating-point number specifying the distance of the step</field>        
    /// <field name="LatLong">A VELatLong Class object specifying the position of the step</field>  
    /// <field name="Shape">A VEShape Class object specifying the shape of the step</field>
    /// <field name="Text">A String specifying the description of the step</field>
    /// <field name="Time">The total elapsed time, in seconds, to traverse the route itinerary step.</field>
    /// <field name="Hints">An array of VERouteHint Class items that correspond to the itinerary item.</field>  
};

VERouteItineraryItem.prototype =
{
    Distance : null,
    LatLong : null,
    Shape : null,
    Text : null,
    Time : null,
    Hints: null
}

