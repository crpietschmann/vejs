(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchResponse = function () {
        /// <summary>
        /// Represents the results of a search request.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.SearchResponse"/>
    };

    m.SearchResponse.prototype = {
        /// <field type='Microsoft.Maps.Search.SearchRegion[]'>An array of alternate search regions.</field>
        alternateSearchRegions: {},
        /// <field type='Boolean'>A boolean indicating whether there are more results to return.</field>
        hasMore: {},
        /// <field type='Microsoft.Maps.Search.SearchParseResult[]'>An array containing the parsed results of the search.</field>
        parseResults: {},
        /// <field type='Microsoft.Maps.Search.SearchResponseSummary'>The summary of the response to the search request.</field>
        responseSummary: {},
        /// <field type='Microsoft.Maps.Search.SearchRegion'>The region in which the search was performed.</field>
        searchRegion: {},
        /// <field type='Microsoft.Maps.Search.SearchResult[]'>A search result array containing the search results.</field>
        searchResults: {}
    };

    m.SearchResponse.__class = true;

})(this);