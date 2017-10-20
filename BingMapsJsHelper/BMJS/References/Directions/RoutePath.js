(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.RoutePath = function () {
        /// <summary>
        /// Represents the route line shape on the map.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.RoutePath"/>
    };

    m.RoutePath.prototype = {
        /// <field type='Number[]'>An array of latitudes, where each latitude is the latitude for one of the locations that define the route line.</field>
        decodedLatitudes: {},
        /// <field type='Number[]'>An array of longitudes, where each is the longitude value for one of the locations that define the route line.</field>
        decodedLongitudes: {},
        /// <field type='Object[]'>An array of regions that define, depending on the zoom level, how the route line should be rendered.</field>
        decodedRegions: {}
    };

    m.RoutePath.__class = true;

})(this);