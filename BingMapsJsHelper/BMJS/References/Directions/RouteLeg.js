(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.RouteLeg = function () {
        /// <summary>
        /// Represents a leg of a route. A route leg is the part of the route between two stop waypoints.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.RouteLeg"/>
    };

    m.RouteLeg.prototype = {
        /// <field type='Date'>The end time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit.</field>
        endTime: {},
        /// <field type='Microsoft.Maps.Directions.Location'>The location of the last waypoint of this leg.</field>
        endWaypointLocation: {},
        /// <field type='Microsoft.Maps.Directions.DirectionsStep[]'>The directions steps associated with this route leg.</field>
        itineraryItems: {},
        /// <field type='Number'>The index of the route to which this route leg belongs.</field>
        originalRouteIndex: {},
        /// <field type='Date'>The start time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit.</field>
        startTime: {},
        /// <field type='Microsoft.Maps.Directions.Location'>The location of the first waypoint of this route leg.</field>
        startWaypointLocation: {},
        /// <field type='Microsoft.Maps.Directions.RouteSubLeg[]'>The sub legs of this route leg. A sub leg of a route is the part of the route between a stop point and a via point or between two via points.</field>
        subLegs: {},
        /// <field type='Microsoft.Maps.Directions.RouteSummary'>The summary which describes this route leg.</field>
        summary: {}
    };

    m.RouteLeg.__class = true;

})(this);