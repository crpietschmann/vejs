(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Polygon = function () {
        /// <summary>
        /// Defines the shape of venue map entities.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Polygon"/>
    };

    m.Polygon.prototype = {
        /// <field type='Microsoft.Maps.LocationRect'>The rectangle that defines the bounding box for the polygon.</field>
        bounds: {},
        /// <field type='Microsoft.Maps.Location'>The center of the polygon.</field>
        center: {},
        /// <field type='Microsoft.Maps.Location[]'>The locations that define the vertices of the polygon.</field>
        locations: {}
    };

    m.Polygon.__class = true;

})(this);