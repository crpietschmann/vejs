(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Location = function (latitude, longitude, altitude, altitudeMode) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Location class. The altitude and altitudeMode parameters default to undefined.
        /// </summary>
        /// <param name="latitude" type='Number'></param>
        /// <param name="longitude" type='Number'></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Location class. The altitude and altitudeMode parameters default to undefined.
        /// </summary>
        /// <param name="latitude" type='Number'></param>
        /// <param name="longitude" type='Number'></param>
        /// <param name="altitude" type='Number'></param>
        /// <param name="altitudeMode" type="Microsoft.Maps.AltitudeReference"></param>
        /// </signature>

        /// <returns type="Microsoft.Maps.Location"/>
    };

    m.Location.prototype = {
        /// <field name="altitude" type='Number'>The altitude of the location.</field>
        altitude:{},
        /// <field name="altitudeMode" type="Microsoft.Maps.AltitudeReference">The reference from which the altitude is measured.</field>
        altitudeMode: {},
        /// <field name="latitude" type='Number'>The latitude of the location.</field>
        latitude: 0,
        /// <field name="longitude" type='Number'>The longitude of the location.</field>
        longitude: 0,

        clone: function () {
            /// <summary>
            /// Returns a copy of the Location object.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the Location object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.Location.areEqual = function (location1, location2) {
        /// <summary>
        /// Determines if the specified Location objects are equal.
        /// </summary>
        /// <param name="location1" type="Microsoft.Maps.Location">First location to compare against.</param>
        /// <param name="location2" type="Microsoft.Maps.Location">Second location to compare against.</param>
        /// <returns type='Boolean'/>
    };

    m.Location.normalizeLongitude = function (longitude) {
        /// <summary>
        /// Normalizes the specified longitude so that it is between -180 and 180.
        /// </summary>
        /// <param name="longitude" type="Microsoft.Maps.Location">Location to normalize.</param>
        /// <returns type='Number'/>
    };

    m.Location.__class = true;

})(this);