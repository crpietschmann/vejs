(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchParseResult = function () {
        /// <summary>
        /// Represents a search request parse result.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.SearchParseResult"/>
    };

    m.SearchParseResult.prototype = {
        /// <field type='String'>The keyword of the input query string.</field>
        keyword: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation'>The geocoded location of the input query string.</field>
        location: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the geocode match.</field>
        matchConfidence: {}
    };

    m.SearchParseResult.__class = true;

})(this);