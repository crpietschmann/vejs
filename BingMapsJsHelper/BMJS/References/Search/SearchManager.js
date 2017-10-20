(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchManager = function (map) {
        /// <summary>
        /// Contains methods for returning search and location results.
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Search", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="map" type="Microsoft.Maps.Map"></param>

        /// <returns type="Microsoft.Maps.Search.SearchManager"/>
    };

    m.SearchManager.prototype = {
        geocode: function (request) {
            /// <signature>
            /// <summary>
            /// Matches the address or place query in the specified request options to a location and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>bounds (Microsoft.Maps.LocationRect),callback (function), count (number), errorCallback (function), timeout (number), userData (Object), where (string)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the address or place query in the specified request options to a location and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>bounds (Microsoft.Maps.LocationRect): A location rectangle that defines the boundaries of the area in which to search for location results. The default is the bounds of the map view associated with this instance of the SearchManager, which is usually the current map view.,</para>
            /// <para>callback (function): The name of the function to call when a successful result is returned from the geocode request. The callback function must accept two parameters: result, which is a GeocodeResult type, and a userData object.,</para>
            /// <para>count (number): The maximum number of results to return. Required. The maximum number than can be returned is 20.,</para>
            /// <para>errorCallback (function): The name of the function to call when the request is returned with an error. The error callback function must accept a GeocodeRequestOptions object.,</para>
            /// <para>timeout (number): A number indicating how long to wait, in seconds, for the geocode request to return. The default value is 5 seconds.,</para>
            /// <para>userData (Object): An object containing any data that needs to be passed to the callback when the request is completed.,</para>
            /// <para>where (string): A string containing the address or place to be matched to a location on the map. Required.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the address or place query in the specified request options to a location and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="AnonymousObject.GeocodeRequestOptions"/>
            /// </signature>
        }, 
        reverseGeocode: function (request) {
            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address results to the specified request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>callback (function), errorCallback (function), location (Microsoft.Maps.Location), timeout (number), userData (Object)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address results to the specified request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>callback (function): The name of the function to call when a successful result is returned from the reverse geocode request. The callback function must accept two parameters: a result, which is a PlaceResult type, and a userData object.,</para>
            /// <para>errorCallback (function): The name of the function to call when the request is returned with an error. The callback function must accept a ReverseGeocodeRequestOptions object.,</para>
            /// <para>location (Microsoft.Maps.Location): The location to use to match to geographic entities and addresses.,</para>
            /// <para>timeout (number): A number indicating how long to wait, in seconds, for the reverse geocode request to return. The default value is 5 seconds.,</para>
            /// <para>userData (Object): An object containing any data that needs to be passed to the callback when the request is completed.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address results to the specified request options callback function.
            /// </summary>
            /// <param name="request" type="AnonymousObject.ReverseGeocodeRequestOptions"/>
            /// </signature>
        }, 
        search: function (request) {
            /// <signature>
            /// <summary>
            /// Performs a search based on the specified request options and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>callback (function), count (number), errorCallback (function), query (string), startIndex (number), timeout (number), entityType (string), userData (Object), what (string), where (string)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Performs a search based on the specified request options and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>callback (function): The name of the function to call when a successful result is returned from the search request. The callback function must accept two parameters: a result, which is a SearchResponse, and a userData object.,</para>
            /// <para>count (number): The maximum number of results to return. Required. The maximum number than can be returned is 20.,</para>
            /// <para>errorCallback (function): The name of the function to call when the request is returned with an error. The callback function must accept a SearchRequestOptions object.,</para>
            /// <para>query (string): The search string, such as “pizza in Seattle, WA”. Either query or what/where needs to be specified. If both are specified, an error occurs.,</para>
            /// <para>startIndex (number): The index of the first result in the results. For example, if you had already returned a first set of 10 search results and now wanted to return the second set of 10 results, you would specify 10 as the startIndex and 10 as the count.,</para>
            /// <para>timeout (number): A number indicating how long to wait, in seconds, for the search request to return. The default value is 5 seconds.,</para>
            /// <para>entityType (string): The type of entities to find. Currently only “Business” is allowed.,</para>
            /// <para>userData (Object): An object containing any data that needs to be passed to the callback when the request is completed.,</para>
            /// <para>what (string): The business name, category, or other item for which the search is conducted. For example, “pizza” in the search string “pizza in Seattle”.,</para>
            /// <para>where (string): The address or place name of the area for which the search is conducted. For example, “Seattle” in the search string “pizza in Seattle”.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Performs a search based on the specified request options and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="AnonymousObject.SearchRequestOptions"/>
            /// </signature>
        }
    };

    m.SearchManager.__class = true;

})(this);