(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.ReverseGeocodeRequestOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.ReverseGeocodeRequestOptions.prototype = {
        /// <field type='function'>The name of the function to call when a successful result is returned from the reverse geocode request. The callback function must accept two parameters: a result, which is a PlaceResult type, and a userData object.</field>
        callback: function (result, userData) {
            /// <summary>
            /// The name of the function to call when a successful result is returned from the reverse geocode request. 
            /// </summary>
            /// <param name="result" type="Microsoft.Maps.Search.PlaceResult"/>
            /// <param name="userData" type="Object"/>
        },
        /// <field type='function'>The name of the function to call when the request is returned with an error. The callback function must accept a ReverseGeocodeRequestOptions object.</field>
        errorCallback: function (request) {
            /// <summary>
            /// The name of the function to call when the request is returned with an error.
            /// </summary>
            /// <param name="request" type="Microsoft.Maps.Search.ReverseGeocodeRequestOptions"/>
        },
        /// <field type='Microsoft.Maps.Location'>The location to use to match to geographic entities and addresses.</field>
        location: {},
        /// <field type='Number'>A number indicating how long to wait, in seconds, for the reverse geocode request to return. The default value is 5 seconds.</field>
        timeout: {},
        /// <field type='Object'>An object containing any data that needs to be passed to the callback when the request is completed.</field>
        userData: {}
    };

})(this);