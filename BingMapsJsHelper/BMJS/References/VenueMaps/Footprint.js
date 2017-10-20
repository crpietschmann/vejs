(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Footprint = function () {
        /// <summary>
        /// Represents the footprint of the venue map.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Footprint"/>
    };

    m.Footprint.prototype = {
        /// <field type='Microsoft.Maps.VenueMaps.Polygon[]'>The shapes that make up the footprint of this venue.</field>
        polygons:{}, 
        /// <field type='Number[]'>An array of doubles indicating the minimum and maximum zoom levels where imagery is available for this venue map.</field>
        zoomRange:{}
    };

    m.Footprint.__class = true;

})(this);