(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    /* Enumerators */

    m.MatchCode = {
        /// <field type='Microsoft.Maps.Search.MatchCode'>No match was found.</field>
        none: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match was good.</field>
        good: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match was ambiguous. Multiple results were returned.</field>
        ambiguous: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match was found by a broader search.</field>
        upHierarchy: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match was found, but possibly using a modified query.</field>
        modified: {},
        __enum: true
    };

    m.LocationPrecision = {
        /// <field type='Microsoft.Maps.Search.LocationPrecision'>The geocoding service matched the location to a point on the road using interpolation of multiple geocoded sources.</field>
        interpolated: {},
        /// <field type='Microsoft.Maps.Search.LocationPrecision'>The geocoding service matched the location to the rooftop of a building.</field>
        rooftop: {},
        __enum: true
    };

    m.MatchConfidence = {
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the match is high.</field>
        high: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the match is medium.</field>
        medium: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the match is low.</field>
        low: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the match is unknown.</field>
        unknown: {},
        __enum: true
    };

})(this);