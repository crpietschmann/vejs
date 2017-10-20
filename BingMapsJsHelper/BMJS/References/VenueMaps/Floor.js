(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Floor = function () {
        /// <summary>
        /// Represents one floor map of a venue map.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Floor"/>
    };

    m.Floor.prototype = {
        /// <field type='String'>The name of the floor.</field>
        name: {},
        /// <field type='Microsoft.Maps.VenueMaps.Primitive[]'>An array of Primitive objects that represent the points of interest (for example, stores) on this venue floor.</field>
        primitives: {},
        /// <field type='Number[]'>An array of doubles indicating the minimum and maximum zoom levels where imagery is available for this venue map floor.</field>
        zoomRange: {}
    };

    m.Floor.__class = true;

})(this);