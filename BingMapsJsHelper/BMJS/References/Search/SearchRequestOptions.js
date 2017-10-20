(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.SearchRequestOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.SearchRequestOptions.prototype = {
        /// <field type='function'>The name of the function to call when a successful result is returned from the search request. The callback function must accept two parameters: a result, which is a SearchResponse, and a userData object.</field>
        callback: function (result, userData) {
            /// <summary>
            /// The name of the function to call when a successful result is returned from the search request. 
            /// </summary>
            /// <param name="result" type="Microsoft.Maps.Search.SearchSearchResponse"/>
            /// <param name="userData" type="Object"/>
        },
        /// <field type='Number'>The maximum number of results to return. Required. The maximum number than can be returned is 20.</field>
        count: {},
        /// <field type='function'>The name of the function to call when the request is returned with an error. The callback function must accept a SearchRequestOptions object.</field>
        errorCallback: function (request) {
            /// <summary>
            /// The name of the function to call when the request is returned with an error.
            /// </summary>
            /// <param name="request" type="Microsoft.Maps.Search.SearchRequestOptions"/>
        },
        /// <field type='String'>The search string, such as “pizza in Seattle, WA”. Either query or what/where needs to be specified. If both are specified, an error occurs.</field>
        query: {},
        /// <field type='Number'>The index of the first result in the results. For example, if you had already returned a first set of 10 search results and now wanted to return the second set of 10 results, you would specify 10 as the startIndex and 10 as the count.</field>
        startIndex: {},
        /// <field type='Number'>A number indicating how long to wait, in seconds, for the search request to return. The default value is 5 seconds.</field>
        timeout: {},
        /// <field type='String'>The type of entities to find. Currently only “Business” is allowed.</field>
        entityType: {},
        /// <field type='Object'>An object containing any data that needs to be passed to the callback when the request is completed.</field>
        userData: {},
        /// <field type='String'>The business name, category, or other item for which the search is conducted. For example, “pizza” in the search string “pizza in Seattle”.</field>
        what: {},
        /// <field type='String'>The address or place name of the area for which the search is conducted. For example, “Seattle” in the search string “pizza in Seattle”.</field>
        where: {}
    };

})(this);