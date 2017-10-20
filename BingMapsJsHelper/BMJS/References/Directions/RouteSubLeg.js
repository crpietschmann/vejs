(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.RouteSubLeg = function () {
        /// <summary>
        /// Represents a route sub leg. A route sub leg is the part of the route between a stop point and a via point or between two via points. One or more sub legs make up a route leg.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.RouteSubLeg"/>
    };

    m.RouteSubLeg.prototype = {
        /// <field type='Microsoft.Maps.Location'>The location of the last waypoint of the sub leg.</field>
        actualEnd: {},
        /// <field type='Microsoft.Maps.Location'>The location of the first waypoint of the sub leg.</field>
        actualStart: {},
        /// <field type='String'>The description of the last waypoint of the sub leg.</field>
        endDescription: {},
        /// <field type='Microsoft.Maps.Directions.RoutePath'>The properties that define the route line of this sub leg on the map.</field>
        routePath: {},
        /// <field type='String'>The description of the first waypoint of the sub leg.</field>
        startDescription: {},
        /// <field type='Microsoft.Maps.Directions.RouteSummary'>The summary of this route sub leg.</field>
        summary: {}
    };

    m.RouteSubLeg.__class = true;

})(this);