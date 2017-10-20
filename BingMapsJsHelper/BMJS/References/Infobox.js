(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Infobox = function (location, options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Infobox class. For the best performance, it is recommended that you have only one info box on the map at a time.
        /// <para>Supported Events: click, entitychanged, mouseenter, mouseleave</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// </signature>
        
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Infobox class. For the best performance, it is recommended that you have only one info box on the map at a time.
        /// <para>Supported Events: click, entitychanged, mouseenter, mouseleave</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="Object">{
        /// <para>actions (Object), showCloseButton (boolean), showPointer (boolean), visible (boolean), titleClickHandler (function), typeName (Microsoft.Maps.InfoboxType), location (Microsoft.Maps.Location), height (number), width (number), zIndex (number), titleAction (Object), offset (Point ), pushpin (Pushpin ), description (string), htmlContent (string), id (string), title (string)</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Infobox class. For the best performance, it is recommended that you have only one info box on the map at a time.
        /// <para>Supported Events: click, entitychanged, mouseenter, mouseleave</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="Object">
        /// { description (String): The string displayed inside the infobox.
        /// <para>height (Number): The height of the infobox. The default value is 126.</para>
        /// <para>htmlContent (String): The HTML that represents the info box. Note that infobox options are ignored if custom HTML is set.</para>
        /// <para>location (Microsoft.Maps.Location): The location on the map where the info box’s anchor is attached.</para>
        /// <para>offest (Microsoft.Maps.Point): The amount the info box pointer is shifted from the location of the infobox.</para>
        /// <para>title (String): The title of the infobox.</para>
        /// <para>typeName (String): A CSS class name to apply to the infobox.</para>
        /// <para>visible (Boolean): A boolean indicating whether to show or hide the info box.</para>
        /// <para>width (Number): The width of the infobox. The default value is 256.</para>
        /// <para>zIndex (Number): The z-index of the infobox with respect to other items on the map. }</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Infobox class. For the best performance, it is recommended that you have only one info box on the map at a time.
        /// <para>Supported Events: click, entitychanged, mouseenter, mouseleave</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="AnonymousObject.InfoboxOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Infobox"/>
    };

    m.Infobox.prototype = {
        getActions: function () {
            /// <summary>
            /// Returns a list of actions, where each item is a name-value pair indicating an action link name and the event name for the action that corresponds to that action link.
            /// </summary>
            /// <returns type="Object"></returns>
        },
        getAnchor: function () {
            /// <summary>
            /// Returns the point on the infobox which is anchored to the map. An anchor of (0,0) is the top left corner of the infobox.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        getDescription: function () {
            /// <summary>
            /// Returns the string that is printed inside the infobox.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getHeight: function () {
            /// <summary>
            /// Returns the height of the infobox.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getHtmlContent: function () {
            /// <summary>
            /// Returns the infobox as HTML.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getId: function () {
            /// <summary>
            /// Returns the ID of the infobox.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getLocation: function () {
            /// <summary>
            /// Returns the location on the map where the infobox’s anchor is attached.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getOffset: function () {
            /// <summary>
            /// Returns the amount the infobox pointer is shifted from the location of the infobox, or if showPointer is false, then it is the amount the infobox bottom left edge is shifted from the location of the infobox. The default value is (0,0), which means there is no offset.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getOptions: function () {
            /// <summary>
            /// Returns the infobox options.
            /// </summary>
            /// <returns type="AnonymousObject.InfoboxOptions"></returns>
        },
        getShowCloseButton: function () {
            /// <summary>
            /// Returns a boolean indicating whether the infobox close button is shown.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getShowPointer: function () {
            /// <summary>
            /// Returns a boolean indicating whether the infobox is drawn with a pointer.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getTitle: function () {
            /// <summary>
            /// Returns a string that is the title of the infobox.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getTitleClickHandler: function () {
            /// <summary>
            /// Returns the name of the function to call when the title of the infobox is clicked.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the infobox is visible. A value of false indicates that the infobox is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the width of the infobox.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Returns the z-index of the infobox with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        setHtmlContent: function (content) {
            /// <summary>
            /// Sets the HTML content of the infobox. You can use this method to change the look of the infobox.
            /// </summary>
            /// <param name="content" type='String'>HTML content for infobox.</param>
        },
        setLocation: function (location) {
            /// <summary>
            /// Sets the location on the map where the anchor of the infobox is attached.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the infobox.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>actions (Object), showCloseButton (boolean), showPointer (boolean), visible (boolean), titleClickHandler (function), typeName (Microsoft.Maps.InfoboxType), location (Microsoft.Maps.Location), height (number), width (number), zIndex (number), titleAction (Object), offset (Point ), pushpin (Pushpin ), description (string), htmlContent (string), id (string), title (string)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the infobox.
            /// </summary>
            /// <param name="options" type="Object">            
            /// { description (String): The string displayed inside the infobox.
            /// <para>height (Number): The height of the infobox. The default value is 126.</para>
            /// <para>htmlContent (String): The HTML that represents the info box. Note that infobox options are ignored if custom HTML is set.</para>
            /// <para>location (Microsoft.Maps.Location): The location on the map where the info box’s anchor is attached.</para>
            /// <para>offest (Microsoft.Maps.Point): The amount the info box pointer is shifted from the location of the infobox.</para>
            /// <para>title (String): The title of the infobox.</para>
            /// <para>typeName (String): A CSS class name to apply to the infobox.</para>
            /// <para>visible (Boolean): A boolean indicating whether to show or hide the info box.</para>
            /// <para>width (Number): The width of the infobox. The default value is 256.</para>
            /// <para>zIndex (Number): The z-index of the infobox with respect to other items on the map. }</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the infobox.
            /// </summary>
            /// <param name="options" type="AnonymousObject.InfoboxOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the Infobox object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.Infobox.__class = true;

})(this);