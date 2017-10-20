(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.PlaceResult = function () {
        /// <summary>
        /// Represents a place result.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.PlaceResult"/>
    };

    m.PlaceResult.prototype = {
        /// <field type='Microsoft.Maps.LocationRect'>The location rectangle that defines the boundaries of the best map view of the place result.</field>
        bestView: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation'>The geocoded location of the best result.</field>
        location: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation[]'>The geocoded locations.</field>
        locations: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match code of the best result.</field>
        matchCode: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The match confidence of the best result.</field>
        matchConfidence: {},
        /// <field type='String'>The name of the place result, if one exists.</field>
        name: {}
    };

    m.PlaceResult.__class = true;

})(this);