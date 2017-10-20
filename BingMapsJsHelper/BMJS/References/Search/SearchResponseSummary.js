(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchResponseSummary = function () {
        /// <summary>
        /// Contains properties that summarize the search service response to a request.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.Address"/>
    };

    m.SearchResponseSummary.prototype = {
        /// <field type='Number'>The authentication result code.</field>
        authResultCode: {},
        /// <field type='String'>The copyright string.</field>
        copyright: {},
        /// <field type='String'>The error message, if an error occurred.</field>
        errorMessage: {},
        /// <field type='Number'>The status code of the request.</field>
        statusCode: {},
        /// <field type='Number'>A string representing a trace ID to enable debugging of the request.</field>
        traceId: {}
    };

    m.SearchResponseSummary.__class = true;

})(this);