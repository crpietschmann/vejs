(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.LocationRect = function (center, width, height) {
        /// <summary>
        /// Initializes a new instance of the LocationRect class.
        /// </summary>
        /// <param name="center" type="Microsoft.Maps.Location"></param>
        /// <param name="width" type='Number'></param>
        /// <param name="height" type='Number'></param>

        /// <returns type="Microsoft.Maps.Location"/>
    };

    m.LocationRect.prototype = {
        /// <field name="center" type="Microsoft.Maps.Location">Center of the LocationRect.</field>
        center: {},
        /// <field name="height" type='Number'>Height of the LocationRect in degrees.</field>
        height: {},
        /// <field name="width" type='Number'>Width of the LocationRect in degrees.</field>
        width: 0,

        clone: function () {
            /// <summary>
            /// Returns a copy of the LocationRect object.
            /// </summary>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        contains: function () {
            /// <summary>
            /// Returns whether the specified Location is within the LocationRect.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getEast: function () {
            /// <summary>
            /// Returns the longitude that defines the eastern edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getNorth: function () {
            /// <summary>
            /// Returns the latitude that defines the northern edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getNorthwest: function () {
            /// <summary>
            /// Returns the Location that defines the northwest corner of the LocationRect.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getSouth: function () {
            /// <summary>
            /// Returns the latitude that defines the southern edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getSoutheast: function () {
            /// <summary>
            /// Returns the Location that defines the southeast corner of the LocationRect.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getWest: function () {
            /// <summary>
            /// Returns the latitude that defines the western edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        intersects: function (rect) {
            /// <summary>
            /// Returns whether the specified LocationRect intersects with this LocationRect.
            /// </summary>
            /// <param name="rect" type="Microsoft.Maps.LocationRect"></param>
            /// <returns type='Boolean'></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the LocationRect object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.LocationRect.fromCorners = function (northwest, southeast) {
        /// <summary>
        /// Returns a LocationRect using the specified locations for the northwest and southeast corners.
        /// </summary>
        /// <param name="northwest" type="Microsoft.Maps.Location"></param>
        /// <param name="southeast" type="Microsoft.Maps.Location"></param>
        /// <returns type="Microsoft.Maps.LocationRect"></returns>
    };

    m.LocationRect.fromEdges = function (north, west, south, east, altitude, altitudeReference) {
        /// <summary>
        /// Returns a LocationRect using the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries.
        /// </summary>
        /// <param name="north" type='Number'></param>
        /// <param name="west" type='Number'></param>
        /// <param name="south" type='Number'></param>
        /// <param name="east" type='Number'></param>
        /// <param name="altitude" type='Number'></param>
        /// <param name="altitudeReference" type="Microsoft.Maps.AltitudeReference"></param>


        /// <returns type="Microsoft.Maps.LocationRect"></returns>
    };

    m.LocationRect.fromLocations = function (locations) {
        /// <summary>
        /// Returns a LocationRect using a list of locations or an array of locations.
        /// <para>To provide a list of locations:  Microsoft.Maps.LocationRect.fromLocations(location1, location2, location3);</para>
        /// <para>To provide an array of locations:</para>
        /// <para>var locations = [location1, location2, location3]; </para>
        /// <para>Microsoft.Maps.LocationRect.fromLocations(locations);</para>
        /// </summary>
        /// <param name="locations" type="Array">or Microsoft.Maps.Locations[]</param>

        /// <returns type="Microsoft.Maps.LocationRect"></returns>
    };

    m.LocationRect.fromString = function (string) {
        /// <summary>
        /// Creates a LocationRect from a string with the following format: "north,west,south,east". North, west, south and east specify the coordinate number values.
        /// </summary>
        /// <param name='String' type='String'></param>
        /// <returns type="Microsoft.Maps.LocationRect"></returns>
    };

    m.LocationRect.__class = true;

})(this);