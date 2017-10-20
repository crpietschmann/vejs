(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.GeoLocationProvider = function (map) {
        /// <summary>
        /// Contains methods for obtaining and displaying the user’s current location.
        /// Note: This functionality is only available on browsers that support the W3C GeoLocation API. 
        /// </summary>

        /// <param name="map" type="Microsoft.Maps.Map">Map object to bing to the GeoLocationProvier.</param>

        /// <returns type="Microsoft.Maps.GeoLocationProvider"/>
    };

    m.GeoLocationProvider.prototype = {
        addAccuracyCircle: function (center, radiusInMeters, segments, options) {
            /// <signature>
            /// <summary>
            /// Renders a geo location accuracy circle on the map. The accuracy circle is created with the center at the specified location, using the given radiusInMeters, and with the specified number of segments for the accuracy circle polygon. Additional options are also available to adjust the style of the polygon.
            /// </summary>
            /// <param name="center" type="Microsoft.Maps.Location">The center location of the accuray circle.</param>
            /// <param name="radiusInMeters" type='Number'>The radius of th accuracy circle in meters.</param>
            /// <param name="segments" type='Number'>The number of line segmenets to us to approximate the circle.</param>
            /// <param name="options" type="Object">
            /// An object that contains options for the position circle: {
            /// <para>polygonOptions (AnonymousObject.PolygonOptions): A polygon options object for the geo location accuracy circle. See also Microsoft.Maps.Polygon.</para>
            /// <para>showOnMap (Boolean): A boolean indicating whether to display the geo location accuracy circle. The default value is true. If this property is set to false, a geo location accuracy circle is not drawn and any existing accuracy circles are removed.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Renders a geo location accuracy circle on the map. The accuracy circle is created with the center at the specified location, using the given radiusInMeters, and with the specified number of segments for the accuracy circle polygon. Additional options are also available to adjust the style of the polygon.
            /// </summary>
            /// <param name="center" type="Microsoft.Maps.Location">The center location of the accuray circle.</param>
            /// <param name="radiusInMeters" type='Number'>The radius of th accuracy circle in meters.</param>
            /// <param name="segments" type='Number'>The number of line segmenets to us to approximate the circle.</param>
            /// <param name="options" type="AnonymousObject.PositionCircleOptions"/>
            /// </signature>
        },
        cancelCurrentRequest: function () {
            /// <summary>
            /// Cancels the processing of the current getCurrentPosition request. This method prevents the response from being processed.
            /// </summary>
        },
        getCurrentPosition: function (options) {
            /// <signature>
            /// <summary>
            /// Obtains the user’s current location and displays it on the map. The accuracy of the user location obtained using this method varies widely depending on the desktop browser or mobile device of the requesting client. Desktop users may experience low user location accuracy (an accuracy circle with a large radius), while mobile user location accuracy may be much greater (a few meters).
            /// </summary>
            /// <param name="options" type="Object">
            /// An object that contains options for the getting the position: {
            /// <para>enableHighAccuracy (Boolean): A boolean indicating whether only a high accuracy result should be retrieved. The default value is false. Setting this property to true may result in a slower response time.</para>
            /// <para>errorCallback (function): The function to call when an error occurs. The callback function must accept one argument. The argument object contains two properties, internalError, a PositionError type, and errorCode, a number.</para>
            /// <para>maximumAge (Number): A number indicating the acceptable age, in milliseconds, of a cached geo location result to return. The default value is 0, which indicates a new (not cached) result will be retrieved.</para>
            /// <para>showAccuracyCircle (Boolean): A boolean indicating whether to display the polygon on the map that shows the accuracy of the returned geo location. The default value is true.</para>
            /// <para>successCallback (function): Callback function for when location is successfully retrieved. The callback function must accept one argument. The argument contains two properties, center, a Microsoft.Maps.Location type, and position, a Microsoft.Maps.Position type.</para>
            /// <para>timeout (Number): The length of time, in milliseconds, to allow for the geo location request to return. By default there is no timeout.</para>
            /// <para>updateMapView (Boolean): A boolean indicating whether to update the map view with the best view of the user’s location (if the request is successful). The default value is true.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Obtains the user’s current location and displays it on the map. The accuracy of the user location obtained using this method varies widely depending on the desktop browser or mobile device of the requesting client. Desktop users may experience low user location accuracy (an accuracy circle with a large radius), while mobile user location accuracy may be much greater (a few meters).
            /// </summary>
            /// <param name="options" type="AnonymousObject.PositionOptions"/>
            /// </signature>
        },
        removeAccuracyCircle: function () {
            /// <summary>
            /// Removes the current geo location accuracy circle.
            /// </summary>
        }
    };

    m.GeoLocationProvider.__class = true;

})(this);