(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.GeocodeResult = function () {
        /// <summary>
        /// Represents a geocoded result.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.GeocodeResult"/>
    };

    m.GeocodeResult.prototype = {
        /// <field type='Microsoft.Maps.Search.Address'>The parsed address of the input query.</field>
        parsedAddress: {},
        /// <field type='String'>The parsed keyword string of the input query.</field>
        parsedKeyword: {},
        /// <field type='String'>The parsed separator of the input query.</field>
        parsedSeparator: {},
        /// <field type='Microsoft.Maps.Search.PlaceResult[]'>The geocoded results.</field>
        results: {}
    };

    m.GeocodeResult.__class = true;

})(this);