VERouteOptions = function()
{
    /// <summary>Provides optional attributes for a multi-point route.</summary>
    /// <field name="DistanceUnit">A VERouteDistanceUnit Enumeration value specifying the units used by the route.</field>        
    /// <field name="DrawRoute">A Boolean value specifying whether the route is drawn on the map.</field>
    /// <field name="RouteCallback">The name of the function called when the method has generated the route. Optional. The default value is null. The called function receives a VERoute Class object.</field>
    /// <field name="RouteColor">A VEColor Class object specifying the color of the route line.</field>
    /// <field name="RouteMode">A VERouteMode Enumeration value specifying the mode of route to return. The default value is VERouteMode.Driving.</field>
    /// <field name="RouteOptimize">A VERouteOptimize Enumeration value specifying how the route is optimized.</field>
    /// <field name="RouteWeight">The thickness, in pixels, of the route line.</field>
    /// <field name="RouteZIndex">The z-index of the route line. The default value is 4.</field>
    /// <field name="SetBestMapView">A Boolean value specifying whether the map view is set to the best view of the route after it is drawn. The default is true, which means that the map view is set.</field>
    /// <field name="ShowDisambiguation">A Boolean value specifying whether a disambiguation dialog box is shown.</field>
    /// <field name="ShowErrorMessages">Whether to show any error messages.</field>
    /// <field name="UseMWS">A Boolean value specifying whether to use the MapPoint Web Service to generate the route.</field>
    /// <field name="UseTraffic">A Boolean value specifying whether to calculate the route using traffic information.</field>
}

VERouteOptions.prototype =
{
    DistanceUnit : null,
    DrawRoute : null,
    RouteCallback : null,
    RouteColor : null,
    RouteMode : null,
    RouteOptimize : null,
    RouteWeight : null,
    RouteZIndex : null,
    SetBestMapView : null,
    ShowDisambiguation : null,
    ShowErrorMessages : null,
    UseMWS : null,
    UseTraffic : null
}

