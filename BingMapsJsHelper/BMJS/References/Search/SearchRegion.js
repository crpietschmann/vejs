(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchRegion = function () {
        /// <summary>
        /// Represents a search area.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.SearchRegion"/>
    };

    m.SearchRegion.prototype = {
        /// <field type='Microsoft.Maps.Search.Address'>The address of the center of the search region.</field>
        address: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation[]'>The geocoded locations.</field>
        geocodeLocations: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation'>The best geocoded location.</field>
        explicitLocation: {},
        /// <field type='Microsoft.Maps.LocationRect'>A location rectangle that defines the boundaries of the search area.</field>
        mapBounds: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match code of the geocoded location.</field>
        matchCode: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The match confidence of the geocoded location.</field>
        matchConfidence: {},
        /// <field type='String'>A string indicating the region used to infer the location. The current values are “Query” or “MapView”.</field>
        source: {}
    };

    m.SearchRegion.__class = true;

})(this);