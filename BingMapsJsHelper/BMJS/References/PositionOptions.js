(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.PositionOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.PositionOptions.prototype = {
        /// <field type='Boolean'>A boolean indicating whether only a high accuracy result should be retrieved. The default value is false. Setting this property to true may result in a slower response time.</field>
        enableHighAccuracy: {},
        /// <field type='function'>The function to call when an error occurs during the user location request. The callback function must accept one argument. The argument object contains two properties, internalError, a PositionError type, and errorCode, a number. <para>Any one of the following errorCode values may be returned:</para><para>1) The application origin does not have permission to use the GeoLocation API.</para><para>2) The position of the user could not be determined because of a device failure.</para><para>3) The time specified in timeout has been exceeded.</para><para>4) A request is already in process.</para><para>5) The user’s browser does not support geo location.</para></field>
        errorCallback:{},
        /// <field type='Number'>A number indicating the acceptable age, in milliseconds, of a cached geo location result to return. The default value is 0, which indicates a new (not cached) result will be retrieved.</field>
        maximumAge: {},
        /// <field type='Boolean'>A boolean indicating whether to display the polygon on the map that shows the accuracy of the returned geo location. The default value is true.</field>
        showAccuracyCircle: {},
        /// <field type='function'>The function to call when the user’s location was successfully retrieved. The callback function must accept one argument. The argument object contains two properties, center, a Location type, and position, a Position type.</field>
        successCallback: {},
        /// <field type='Number'>The length of time, in milliseconds, to allow for the geo location request to return. By default there is no timeout.</field>
        timeout: {},
        /// <field type='Boolean'>A boolean indicating whether to update the map view with the best view of the user’s location (if the request is successful). The default value is true.</field>
        updateMapView: {}
    };

})(this);