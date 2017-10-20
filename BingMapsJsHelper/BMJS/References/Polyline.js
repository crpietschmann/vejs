(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Polyline = function (locations, options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the polyline class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the polyline class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// <param name="options" type="Object">{
        /// <para>strokeColor (Microsoft.Maps.Color): The color of the polyline.,</para>
        /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the polyline. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polyline outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
        /// <para>strokeThickness (number): The thickness of the polyline.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the polyline. A value of false indicates that the polyline is hidden, although it is still an entity on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the polyline class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// <param name="options" type="AnonymousObject.PolylineOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Polyline"/>
    };

    m.Polyline.prototype = {
        getLocations: function () {
            /// <summary>
            /// Returns the locations that define the corners of the polyline.
            /// </summary>
            /// <returns type="Microsoft.Maps.Locations[]"></returns>
        },
        getStrokeColor: function () {
            /// <summary>
            /// Returns the color of the outline of the polyline.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getStrokeThickness: function () {
            /// <summary>
            /// Returns the thickness of the outline of the polyline.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the polyline is visible. A value of false indicates that the polyline is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setLocations: function (locations) {
            /// <summary>
            /// Sets the locations that define the corners of the polyline.
            /// </summary>
            /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the polyline.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>strokeColor (Microsoft.Maps.Color): The color of the polyline.,</para>
            /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the polyline. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polyline outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
            /// <para>strokeThickness (number): The thickness of the polyline.,</para>
            /// <para>visible (boolean): A boolean indicating whether to show or hide the polyline. A value of false indicates that the polyline is hidden, although it is still an entity on the map.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the polyline.
            /// </summary>
            /// <param name="options" type="AnonymousObject.PolylineOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the Polyline object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.Polyline.clone = function () {
        /// <summary>
        /// Returns a copy of the Color object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Polyline.__class = true;

})(this);