(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.RouteSummary = function () {
        /// <summary>
        /// Represents a route summary.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.RouteSummary"/>
    };

    m.RouteSummary.prototype = {
        /// <field type='Number'>The total travel distance of the route, specified in the units set in the distanceUnit property of the DirectionsRequestOptions.</field>
        distance: {},
        /// <field type='Number'>The cost of the route. This property is only returned if the routeMode of the DirectionsRequestOptions is set to transit and the map culture is set to ja-jp.</field>
        monetaryCost: {},
        /// <field type='Microsoft.Maps.Location'>The location of the northeast corner of bounding box that defines the best map view of the route.</field>
        northEast: {},
        /// <field type='Microsoft.Maps.Location'>The location of the southwest corner of bounding box that defines the best map view of the route.</field>
        southWest: {},
        /// <field type='Number'>The total travel time, in seconds, for the route.</field>
        time: {},
        /// <field type='Number'>The total travel time, in seconds, taking into account traffic delays, for the route. This property is 0 if the avoidTraffic property of the DirectionsRequestOptions is set to false.</field>
        timeWithTraffic: {}
    };

    m.RouteSummary.__class = true;

})(this);