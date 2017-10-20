(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Polygon = function (locations, options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Polygon class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Polygon class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// <param name="options" type="Object">{
        /// <para>fillColor (Microsoft.Maps.Color): The color of the inside of the polygon.,</para>
        /// <para>strokeColor (Microsoft.Maps.Color): The color of the outside of the polygon.,</para>
        /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the outline of the polygon. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polygon outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
        /// <para>strokeThickness (number): The thickness of the outline of the polygon.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the polygon. A value of false indicates that the polygon is hidden, although it is still an entity on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Polygon class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// <param name="options" type="AnonymousObject.PolygonOptions"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Requires Microsoft.Maps.AdvancedShapes module.
        /// <para>Initializes a new instance of the Polygon class.</para>
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.AdvancedShapes", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[][]"></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Requires Microsoft.Maps.AdvancedShapes module.
        /// <para>Initializes a new instance of the Polygon class.</para>
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.AdvancedShapes", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[][]"></param>
        /// <param name="options" type="Object">{
        /// <para>fillColor (Microsoft.Maps.Color): The color of the inside of the polygon.,</para>
        /// <para>strokeColor (Microsoft.Maps.Color): The color of the outside of the polygon.,</para>
        /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the outline of the polygon. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polygon outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
        /// <para>strokeThickness (number): The thickness of the outline of the polygon.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the polygon. A value of false indicates that the polygon is hidden, although it is still an entity on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Requires Microsoft.Maps.AdvancedShapes module.
        /// <para>Initializes a new instance of the Polygon class.</para>
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.AdvancedShapes", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[][]"></param>
        /// <param name="options" type="AnonymousObject.PolygonOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Polygon"/>
    };

    m.Polygon.prototype = {
        getFillColor: function () {
            /// <summary>
            /// Returns the color of the inside of the polygon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getLocations: function () {
            /// <summary>
            /// Returns the locations that define the corners of the polygon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Locations[]"></returns>
        },
        getRings: function () {
            /// <summary>
            /// Requires Microsoft.Maps.AdvancedShapes module.
            /// <para>Returns an array of location arrays, where each location array defines a ring of the polygon.</para>
            /// </summary>
            /// <returns type="Microsoft.Maps.Locations[][]"></returns>
        },
        getStrokeColor: function () {
            /// <summary>
            /// Returns the color of the outline of the polygon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getStrokeThickness: function () {
            /// <summary>
            /// Returns the thickness of the outline of the polygon.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the polygon is visible. A value of false indicates that the polygon is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setLocations: function (locations) {
            /// <summary>
            /// Sets the locations that define the corners of the polygon.
            /// </summary>
            /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        },
        setRings: function(rings){
            /// <summary>
            /// Requires Microsoft.Maps.AdvancedShapes module.
            /// <para>Sets an array of location arrays, where each location array defines a ring of the polygon.</para>
            /// </summary>
            /// <param name="rings" type="Microsoft.Maps.Locations[][]"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the polygon.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>fillColor (Microsoft.Maps.Color): The color of the inside of the polygon.,</para>
            /// <para>strokeColor (Microsoft.Maps.Color): The color of the outside of the polygon.,</para>
            /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the outline of the polygon. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polygon outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
            /// <para>strokeThickness (number): The thickness of the outline of the polygon.,</para>
            /// <para>visible (boolean): A boolean indicating whether to show or hide the polygon. A value of false indicates that the polygon is hidden, although it is still an entity on the map.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the polygon.
            /// </summary>
            /// <param name="options" type="AnonymousObject.PolygonOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the polygon object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.Polygon.clone = function () {
        /// <summary>
        /// Returns a copy of the Color object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Polygon.__class = true;

})(this);