(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.Route = function () {
        /// <summary>
        /// Represents a route.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.Route"/>
    };

    m.Route.prototype = {
        /// <field type='Microsoft.Maps.Directions.RouteLeg[]'>The legs of the route. Each route leg represents the route between two waypoints.</field>
        RouteLegs: {}
    };

    m.Route.__class = true;

})(this);