(function(window) {
    // where multiple possible types are specified the most structured type is documented. all options are documented in the summary.
    // e.g.  DirectionsWaypoint.location can be LatLng|string, the type documented is LatLng
    // enum fields do not provide code completion e.g. DirectionsRequest.travelMode. does not provide code completion
    // Reference Table of Contents

    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Pushpin = function (location, options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Pushpin class.
        /// <para>Supported Events: click, dblclick, drag, dragstart, dragend, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Pushpin class.
        /// <para>Supported Events: click, dblclick, drag, dragstart, dragend, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="Object">{
        /// <para>anchor (Microsoft.Maps.Point), draggable (boolean), height (number), htmlContent (string), icon (string), infobox (Microsoft.Maps.Infobox), state (Microsoft.Maps.EntityState), text (string), textOffset (Microsoft.Maps.Point), typeName (string), visible (boolean), width (number), zIndex (number)</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Pushpin class.
        /// <para>Supported Events: click, dblclick, drag, dragstart, dragend, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="Object">{
        /// <para>anchor (Microsoft.Maps.Point): The point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon. The default anchor is the bottom center of the icon.,</para>
        /// <para>height (Number): Height of the map.</para>
        /// <para>draggable (boolean): A boolean indicating whether the pushpin can be dragged to a new position with the mouse.,</para>
        /// <para>htmlContent (string): The HTML that represents the pushpin.,</para>
        /// <para>icon (string): The path of the image to use as the pushpin icon.,</para>
        /// <para>infobox (Microsoft.Maps.Infobox): The info box associated with this pushpin. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.,</para>
        /// <para>state (Microsoft.Maps.EntityState): The state of the pushpin, such as highlighted or selected. To get the latest pushpin state design, load the Microsoft.Maps.Themes.BingTheme module before creating the pushpin.,</para>
        /// <para>text (string): The text associated with the pushpin.,</para>
        /// <para>textOffset (Microsoft.Maps.Point): The amount the text is shifted from the pushpin icon. The default value is (0,5).,</para>
        /// <para>typeName (string): The type of the pushpin, as a string. The pushpin DOM (document object model) node created for the pushpin will have the specified typeName. A standard pushpin type is used unless the Microsoft.Maps.Themes.BingTheme module is loaded, in which case typeName can be set to ‘micro’ to use the micro pushpin type.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the pushpin. The default value is true. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.,</para>
        /// <para>width (number): The width of the pushpin, which is the width of the pushpin icon. The default value is 25.,</para>
        /// <para>zIndex (number): The z-index of the pushpin with respect to other items on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Pushpin class.
        /// <para>Supported Events: click, dblclick, drag, dragstart, dragend, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="AnonymousObject.PushpinOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Map"/>
    };

    m.Pushpin.prototype = {
        getAnchor: function () {
            /// <summary>
            /// Returns the point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        getIcon: function () {
            /// <summary>
            /// Returns the pushpin icon.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getHeight: function () {
            /// <summary>
            /// Returns the height of the pushpin, which is the height of the pushpin icon.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getLocation: function () {
            /// <summary>
            /// Returns the location of the pushpin.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getText: function () {
            /// <summary>
            /// Returns the text associated with the pushpin.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getTextOffset: function () {
            /// <summary>
            /// Returns the amount the text is shifted from the pushpin icon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        getTypeName: function () {
            /// <summary>
            ///  Returns the type of the pushpin.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the pushpin is visible. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the width of the pushpin, which is the width of the pushpin icon.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Returns the z-index of the pushpin with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        setLocation: function (location) {
            /// <summary>
            /// Sets the location of the pushpin.
            /// </summary>
            /// <param name="location" type="Microsoft.Map.Location"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the pushpin.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// <param name="options" type="Object">{
            /// <para>anchor (Microsoft.Maps.Point), draggable (boolean), height (number), htmlContent (string), icon (string), infobox (Microsoft.Maps.Infobox), state (Microsoft.Maps.EntityState), text (string), textOffset (Microsoft.Maps.Point), typeName (string), visible (boolean), width (number), zIndex (number)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the pushpin.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// <param name="options" type="Object">{
            /// <para>anchor (Microsoft.Maps.Point): The point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon. The default anchor is the bottom center of the icon.,</para>
            /// <para>draggable (boolean): A boolean indicating whether the pushpin can be dragged to a new position with the mouse.,</para>
            /// <para>height (Number): Height of the map.</para>
            /// <para>htmlContent (string): The HTML that represents the pushpin.,</para>
            /// <para>icon (string): The path of the image to use as the pushpin icon.,</para>
            /// <para>infobox (Microsoft.Maps.Infobox): The info box associated with this pushpin. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.,</para>
            /// <para>state (Microsoft.Maps.EntityState): The state of the pushpin, such as highlighted or selected. To get the latest pushpin state design, load the Microsoft.Maps.Themes.BingTheme module before creating the pushpin.,</para>
            /// <para>text (string): The text associated with the pushpin.,</para>
            /// <para>textOffset (Microsoft.Maps.Point): The amount the text is shifted from the pushpin icon. The default value is (0,5).,</para>
            /// <para>typeName (string): The type of the pushpin, as a string. The pushpin DOM (document object model) node created for the pushpin will have the specified typeName. A standard pushpin type is used unless the Microsoft.Maps.Themes.BingTheme module is loaded, in which case typeName can be set to ‘micro’ to use the micro pushpin type.,</para>
            /// <para>visible (boolean): A boolean indicating whether to show or hide the pushpin. The default value is true. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.,</para>
            /// <para>width (number): The width of the pushpin, which is the width of the pushpin icon. The default value is 25.,</para>
            /// <para>zIndex (number): The z-index of the pushpin with respect to other items on the map.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the pushpin.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// <param name="options" type="AnonymousObject.PushpinOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the Pushpin object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.Pushpin.__class = true;
})(this);