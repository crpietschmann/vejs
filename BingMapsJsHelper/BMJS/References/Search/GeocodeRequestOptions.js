(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.GeocodeRequestOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.GeocodeRequestOptions.prototype = {
        /// <field type='Microsoft.Maps.LocationRect'>A location rectangle that defines the boundaries of the area in which to search for location results. The default is the bounds of the map view associated with this instance of the SearchManager, which is usually the current map view.</field>
        bounds: {},
        /// <field type='function'>The name of the function to call when a successful result is returned from the geocode request. The callback function must accept two parameters: result, which is a GeocodeResult type, and a userData object.</field>
        callback: function (result, userData) {
            /// <summary>
            /// The name of the function to call when a successful result is returned from the search request. 
            /// </summary>
            /// <param name="result" type="Microsoft.Maps.Search.GeocodeResult"/>
            /// <param name="userData" type="Object"/>
        },
        /// <field type='Number'>The maximum number of results to return. Required. The maximum number than can be returned is 20.</field>
        count: {},
        /// <field type='function'>The name of the function to call when the request is returned with an error. The error callback function must accept a GeocodeRequestOptions object.</field>
        errorCallback: function (request) {
            /// <summary>
            /// The name of the function to call when the request is returned with an error.
            /// </summary>
            /// <param name="request" type="Microsoft.Maps.Search.GeocodeRequestOptions"/>
        },
        /// <field type='Number'>A number indicating how long to wait, in seconds, for the geocode request to return. The default value is 5 seconds.</field>
        timeout: {},
        /// <field type='Object'>An object containing any data that needs to be passed to the callback when the request is completed.</field>
        userData: {},
        /// <field type='String'>A string containing the address or place to be matched to a location on the map. Required.</field>
        where: {}
    };

})(this);