VERouteLeg  = function()
{
    /// <summary>Specifies the intermediate legs of the route.</summary>
    /// <field name="Distance">A floating-point number specifying the length of the route leg.</field>        
    /// <field name="Itinerary">A VERouteItinerary Class object specifying the itinerary of the route leg.</field>  
    /// <field name="Time">An integer specifying the total elapsed time, in seconds, to traverse the route leg.></field> 
};

VERouteLeg.prototype =
{
    Distance : null,
    Itinerary : null,
    Time : null
}

