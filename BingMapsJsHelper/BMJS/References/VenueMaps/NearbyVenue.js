(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.NearbyVenue = function () {
        /// <summary>
        /// Represents one floor map of a venue map.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.NearbyVenue"/>
    };

    m.NearbyVenue.prototype = {
        /// <field type='Number'>The distance, in meters, to the venue.</field>
        distance: {},
        /// <field type='Microsoft.Maps.VenueMaps.Metadata'>The venue map metadata.</field>
        metadata: {}
    };

    m.NearbyVenue.__class = true;

})(this);