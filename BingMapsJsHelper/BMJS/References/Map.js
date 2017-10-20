(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Map = function (containerElement, options) {
        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement" domElement="true">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// <param name="options" type="Object">{
        /// <para>backgroundColor (Microsoft.Maps.Color), credentials (string), customizeOverlays (boolean), disableBirdseye (boolean), disableKeyboardInput (boolean), disableMouseInput (boolean), disablePanning (boolean), disableTouchInput (boolean), disableUserInput (boolean), disableZooming (boolean), enableClickableLogo (boolean), enableSearchLogo (boolean), fixedMapPosition (boolean), height (number), inertiaIntensity (number), showBreadcrumb (boolean), showCopyright (boolean), showDashboard (boolean), showMapTypeSelector (boolean), showScalebar (boolean), theme (Microsoft.Maps.Themes.BingTheme), tileBuffer (number), useInertia (boolean), width (number)</para>
        /// <para>animate (boolean), bounds (Microsoft.Maps.LocationRect), center (Microsoft.Maps.Location), centerOffset (Microsoft.Maps.Point), heading (number), labelOverlay (Microsoft.Maps.LabelOverlay), mapTypeId (Microsoft.Maps.MapTypeId), padding (number), zoom (number)</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement" domElement="true">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// <param name="options" type="Object">{
        /// <para>backgroundColor (Microsoft.Maps.Color): The color to use for the map control background. The default color is #F4F2EE. ,</para>
        /// <para>credentials (string): The Bing Maps Key used to authenticate the application.,</para>
        /// <para>customizeOverlays (boolean): A boolean indicating whether to load the new Bing Maps overlay styles. The default value is false. This property setting only takes effect if the Microsoft.Maps.Overlays.Style module is loaded.,</para>
        /// <para>disableBirdseye (boolean): A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed from the map navigation control and the birdseyeMapTypeId is disabled. Additionally, the auto map type will only display road or aerial.,</para>
        /// <para>disableKeyboardInput (boolean): A boolean value indicating whether to disable the map’s response to keyboard input. The default value is false.,</para>
        /// <para>disableMouseInput (boolean): A boolean value indicating whether to disable the map’s response to mouse input. The default value is false.,</para>
        /// <para>disablePanning (boolean): A boolean value indicating whether to disable the user’s ability to pan the map. The default value is false.,</para>
        /// <para>disableTouchInput (boolean): A boolean value indicating whether to disable the map’s response to touch input. The default value is false.,</para>
        /// <para>disableUserInput (boolean): A boolean value indicating whether to disable the map’s response to any user input. The default value is false.,</para>
        /// <para>disableZooming (boolean): A boolean value indicating whether to disable the user’s ability to zoom in or out. The default value is false.,</para>
        /// <para>enableClickableLogo (boolean): A boolean value indicating whether the BingTM logo on the map is clickable. The default value is true.,</para>
        /// <para>enableSearchLogo (boolean): A boolean value indicating whether to enable the BingTM hovering search logo on the map. The default value is true.,</para>
        /// <para>fixedMapPosition (boolean): A boolean indicating whether the div containing the map control is fixed on the page and the browser will not be resized. The default value is false. In this case the map control redraws if necessary based on any div or window resize. If this property is set to true, the map control does not check the size of the div containing it every time the map view changes, thus increasing the performance of the control.,</para>
        /// <para>height (number): The height of the map. The default value is null. If no height is specified, the height of the div is used. If height is specified, then width must be specified as well.,</para>
        /// <para>inertiaIntensity (number): A number between 0 and 1 specifying the intensity of the inertia animation effect. The inertia effect increases as the intensity value gets larger. The default value is .85. Setting this property to 0 indicates no inertia effect. The useInertia property must be set to true for the inertiaIntensity value to have an effect.,</para>
        /// <para>showBreadcrumb (boolean): Shows or hides the breadcrumb control which displays the current center location’s geography hierarchy. The breadcrumb control displays best when the width of the map is at least 300 pixels.The default value is false.,</para>
        /// <para>showCopyright (boolean): A boolean value indicating whether or not to show the map copyright. The default value is true. Important: Bing Maps Platform API Terms of Use requires copyright information to be displayed. Only set this option to false when copyright information is displayed through alternate means.,</para>
        /// <para>showDashboard (boolean): A boolean value indicating whether to show the map navigation control. The default value is true.,</para>
        /// <para>showMapTypeSelector (boolean): A boolean value indicating whether to show the map type selector in the map navigation control. The default value is true.,</para>
        /// <para>showScalebar (boolean): A boolean value indicating whether to show the scale bar. The default value is true.,</para>
        /// <para>theme (Microsoft.Maps.Themes.BingTheme): A theme object specifying the theme to use for the design of the map. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module and assign a BingTheme object to this property.,</para>
        /// <para>tileBuffer (number): A number between 0 and 4 specifying how many tiles to use as a buffer around the map view. The default value is 0.,</para>
        /// <para>useInertia (boolean): A boolean value indicating whether to use the inertia animation effect during map navigation. The default value is true.,</para>
        /// <para>width (number): The width of the map. The default value is null. If no width is specified, the width of the div is used. If width is specified, then height must be specified as well.,</para>
        /// <para>animate (boolean): A boolean that specifies whether to animate map navigation. Note that this option is associated with each setView call and defaults to true if not specified.,</para>
        /// <para>bounds (Microsoft.Maps.LocationRect): The bounding rectangle of the map view. If both are specified, bounds takes precedence over center.,</para>
        /// <para>centerOffset (Microsoft.Maps.Point): The amount the center is shifted. This property is ignored if center is not specified.,</para>
        /// <para>heading (number): The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East, 180 = South, and 270 = West.,</para>
        /// <para>labelOverlay (Microsoft.Maps.LabelOverlay): A constant indicating how map labels are displayed.,</para>
        /// <para>mapTypeId (Microsoft.Maps.MapTypeId): The map type of the view. Valid map types are found in the MapTypeId Enumeration topic.,</para>
        /// <para>padding (number): The amount of padding to be added to each side of the bounds of the map view.,</para>
        /// <para>zoom (number): The zoom level of the map view.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement" domElement="true">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// <param name="options" type="AnonymousObject.MapOptions"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement" domElement="true">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// <param name="options" type="AnonymousObject.ViewOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Map"/>
    };

    m.Map.prototype = {
        /// <field type='Microsoft.Maps.EntityCollection'>The map’s entities. Use this property to add or remove entities from the map.</field>
        entities: new Microsoft.Maps.EntityCollection(),

        blur: function () {
            /// <summary>
            /// Removes focus from the map control so that it does not respond to keyboard events.
            /// </summary>
        },
        dispose: function () {
            /// <summary>
            /// Deletes the Map object and releases any associated resources.
            /// </summary>
        },
        focus: function () {
            /// <summary>
            /// Applies focus to the map control so that it responds to keyboard events.
            /// </summary>
        },
        getBounds: function () {
            /// <summary>
            /// Returns the location rectangle that defines the boundaries of the current map view.
            /// </summary>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        getCenter: function () {
            /// <summary>
            /// Returns the location of the center of the current map view.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getCopyrights: function (callback) {
            /// <summary>
            /// Gets the array of strings representing the attributions of the imagery currently displayed on the map.
            /// </summary>
            /// <param name="callback" type="Function">The callback recieves one paramter of type string[].</param>
        },
        getCredentials: function (callback) {
            /// <summary>
            /// Retrieves a session key from the map. 
            /// <para/>
            /// <para>map.getCredentials(function(credentials)</para> 
            /// <para>{ </para>
            /// <para>if(credentials !== null) { /* Valid session Id. Use it to call REST service */ }</para>
            /// <para>});</para>
            /// </summary>
            /// <param name="callback" type="Function"></param>
        },
        getHeading: function () {
            /// <summary>
            /// Returns the heading of the current map view.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getHeight: function () {
            /// <summary>
            /// Returns the height of the map control.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getImageryId: function () {
            /// <summary>
            /// Returns the string that represents the imagery currently displayed on the map.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getMapTypeId: function () {
            /// <summary>
            /// Returns a string that represents the current map type displayed on the map. Valid map types are listed in the MapTypeId Enumeration topic.
            /// </summary>
            /// <returns type="Microsoft.Maps.MapTypeId"></returns>
        },
        getMetersPerPixel: function () {
            /// <summary>
            /// Returns the current scale in meters per pixel of the center of the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getMode: function () {
            /// <summary>
            /// Returns the current map mode.
            /// </summary>
            /// <returns type="Microsoft.Maps.MapMode"></returns>
        },
        getModeLayer: function () {
            /// <summary>
            /// Returns the map’s mode node.
            /// </summary>
            /// <returns type="DOMElement" domElement="true"></returns>
        },
        getOptions: function () {
            /// <summary>
            /// Returns the map option settings.
            /// </summary>
            /// <returns type="AnonymousObject.MapOptions"></returns>
        },
        getPageX: function () {
            /// <summary>
            /// Returns the x coordinate of the top left corner of the map control, relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getPageY: function () {
            /// <summary>
            /// Returns the y coordinate of the top left corner of the map control, relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getRootElement: function () {
            /// <summary>
            /// Returns the map’s root node.
            /// </summary>
            /// <returns type="DOMElement" domElement="true"></returns>
        },
        getTargetBounds: function () {
            /// <summary>
            /// Returns the location rectangle that defines the boundaries of the view to which the map is navigating.
            /// </summary>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        getTargetCenter: function () {
            /// <summary>
            /// Returns the center location of the view to which the map is navigating.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getTargetHeading: function () {
            /// <summary>
            /// Returns the heading of the view to which the map is navigating.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getTargetMetersPerPixel: function () {
            /// <summary>
            ///  Returns the scale in meters per pixel of the center of the view to which the map is navigating.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getTargetZoom: function () {
            /// <summary>
            /// Returns the zoom level of the view to which the map is navigating.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getUserLayer: function () {
            /// <summary>
            /// Returns the map’s user node.
            /// </summary>
            /// <returns type="DOMElement" domElement="true"></returns>
        },
        getViewportX: function () {
            /// <summary>
            /// Returns the x coordinate of the viewport origin (the center of the map), relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getViewportY: function () {
            /// <summary>
            /// Returns the y coordinate of the viewport origin (the center of the map), relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the width of the map control.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZoom: function () {
            /// <summary>
            /// Returns the zoom level of the current map view.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZoomRange: function () {
            /// <summary>
            /// Returns the range of valid zoom levels for the current map view.
            /// </summary>
            /// <returns type="Object">
            /// An object that contains min and max zoom values: {
            /// <para>min (Number): Minimium zoom level.</para>
            /// <para>max (Number): Maximium zoom level.</para>
            /// <para>}</para>
            /// </returns>
        },
        isMercator: function () {
            /// <summary>
            /// Returns whether the map is in a regular Mercator nadir mode.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        isRotationEnabled: function () {
            /// <summary>
            /// Returns true if the current map type allows the heading to change; false if the display heading is fixed.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setMapType: function (mapTypeId) {
            /// <summary>
            /// Sets the current map type.
            /// </summary>
            /// <param name="mapTypeId" type="Microsoft.Maps.MapTypeId"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets MapOptions such as the width and height of the map and whether panning of the map is allowed. Note that some map options can only be set in the Map constructor as stated in the map option description.
            /// </summary>
            /// <param type="Object">            
            /// <para>{</para>
            /// <para>backgroundColor (Microsoft.Maps.Color), credentials (string), customizeOverlays (boolean), disableBirdseye (boolean), disableKeyboardInput (boolean), disableMouseInput (boolean), disablePanning (boolean), disableTouchInput (boolean), disableUserInput (boolean), disableZooming (boolean), enableClickableLogo (boolean), enableSearchLogo (boolean), fixedMapPosition (boolean), height (number), inertiaIntensity (number), showBreadcrumb (boolean), showCopyright (boolean), showDashboard (boolean), showMapTypeSelector (boolean), showScalebar (boolean), theme (Microsoft.Maps.Themes.BingTheme), tileBuffer (number), useInertia (boolean), width (number)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets MapOptions such as the width and height of the map and whether panning of the map is allowed. Note that some map options can only be set in the Map constructor as stated in the map option description.
            /// </summary>
            /// <param type="Object">
            /// <para>{</para>
            /// <para>backgroundColor (Microsoft.Maps.Color): The color to use for the map control background. The default color is #F4F2EE. ,</para>
            /// <para>credentials (string): The Bing Maps Key used to authenticate the application.,</para>
            /// <para>customizeOverlays (boolean): A boolean indicating whether to load the new Bing Maps overlay styles. The default value is false. This property setting only takes effect if the Microsoft.Maps.Overlays.Style module is loaded.,</para>
            /// <para>disableBirdseye (boolean): A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed from the map navigation control and the birdseyeMapTypeId is disabled. Additionally, the auto map type will only display road or aerial.,</para>
            /// <para>disableKeyboardInput (boolean): A boolean value indicating whether to disable the map’s response to keyboard input. The default value is false.,</para>
            /// <para>disableMouseInput (boolean): A boolean value indicating whether to disable the map’s response to mouse input. The default value is false.,</para>
            /// <para>disablePanning (boolean): A boolean value indicating whether to disable the user’s ability to pan the map. The default value is false.,</para>
            /// <para>disableTouchInput (boolean): A boolean value indicating whether to disable the map’s response to touch input. The default value is false.,</para>
            /// <para>disableUserInput (boolean): A boolean value indicating whether to disable the map’s response to any user input. The default value is false.,</para>
            /// <para>disableZooming (boolean): A boolean value indicating whether to disable the user’s ability to zoom in or out. The default value is false.,</para>
            /// <para>enableClickableLogo (boolean): A boolean value indicating whether the BingTM logo on the map is clickable. The default value is true.,</para>
            /// <para>enableSearchLogo (boolean): A boolean value indicating whether to enable the BingTM hovering search logo on the map. The default value is true.,</para>
            /// <para>fixedMapPosition (boolean): A boolean indicating whether the div containing the map control is fixed on the page and the browser will not be resized. The default value is false. In this case the map control redraws if necessary based on any div or window resize. If this property is set to true, the map control does not check the size of the div containing it every time the map view changes, thus increasing the performance of the control.,</para>
            /// <para>height (number): The height of the map. The default value is null. If no height is specified, the height of the div is used. If height is specified, then width must be specified as well.,</para>
            /// <para>inertiaIntensity (number): A number between 0 and 1 specifying the intensity of the inertia animation effect. The inertia effect increases as the intensity value gets larger. The default value is .85. Setting this property to 0 indicates no inertia effect. The useInertia property must be set to true for the inertiaIntensity value to have an effect.,</para>
            /// <para>showBreadcrumb (boolean): Shows or hides the breadcrumb control which displays the current center location’s geography hierarchy. The breadcrumb control displays best when the width of the map is at least 300 pixels.The default value is false.,</para>
            /// <para>showCopyright (boolean): A boolean value indicating whether or not to show the map copyright. The default value is true. Important: Bing Maps Platform API Terms of Use requires copyright information to be displayed. Only set this option to false when copyright information is displayed through alternate means.,</para>
            /// <para>showDashboard (boolean): A boolean value indicating whether to show the map navigation control. The default value is true.,</para>
            /// <para>showMapTypeSelector (boolean): A boolean value indicating whether to show the map type selector in the map navigation control. The default value is true.,</para>
            /// <para>showScalebar (boolean): A boolean value indicating whether to show the scale bar. The default value is true.,</para>
            /// <para>theme (Microsoft.Maps.Themes.BingTheme): A theme object specifying the theme to use for the design of the map. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module and assign a BingTheme object to this property.,</para>
            /// <para>tileBuffer (number): A number between 0 and 4 specifying how many tiles to use as a buffer around the map view. The default value is 0.,</para>
            /// <para>useInertia (boolean): A boolean value indicating whether to use the inertia animation effect during map navigation. The default value is true.,</para>
            /// <para>width (number): The width of the map. The default value is null. If no width is specified, the width of the div is used. If width is specified, then height must be specified as well.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets MapOptions such as the width and height of the map and whether panning of the map is allowed. Note that some map options can only be set in the Map constructor as stated in the map option description.
            /// </summary>
            /// <param name="options" type="AnonymousObject.MapOptions"/>
            /// </signature>
        },
        setView: function (options) {
            /// <signature>
            /// <summary>
            /// Sets the map view based on the specified options.
            /// </summary>
            /// <param type="Object">
            /// <para>{</para>
            /// <para>animate (boolean), bounds (Microsoft.Maps.LocationRect), center (Microsoft.Maps.Location), centerOffset (Microsoft.Maps.Point), heading (number), labelOverlay (Microsoft.Maps.LabelOverlay), mapTypeId (Microsoft.Maps.MapTypeId), padding (number), zoom (number)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the map view based on the specified options.
            /// </summary>
            /// <param type="Object">
            /// <para>{</para>
            /// <para>animate (boolean): A boolean that specifies whether to animate map navigation. Note that this option is associated with each setView call and defaults to true if not specified.,</para>
            /// <para>bounds (Microsoft.Maps.LocationRect): The bounding rectangle of the map view. If both are specified, bounds takes precedence over center.,</para>
            /// <para>centerOffset (Microsoft.Maps.Point): The amount the center is shifted. This property is ignored if center is not specified.,</para>
            /// <para>heading (number): The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East, 180 = South, and 270 = West.,</para>
            /// <para>labelOverlay (Microsoft.Maps.LabelOverlay): A constant indicating how map labels are displayed.,</para>
            /// <para>mapTypeId (Microsoft.Maps.MapTypeId): The map type of the view. Valid map types are found in the MapTypeId Enumeration topic.,</para>
            /// <para>padding (number): The amount of padding to be added to each side of the bounds of the map view.,</para>
            /// <para>zoom (number): The zoom level of the map view.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the map view based on the specified options.
            /// </summary>
            /// <param name="options" type="AnonymousObject.ViewOptions"/>
            /// </signature>
        },
        tryLocationToPixel: function (location, reference) {
            /// <signature>
            /// <summary>
            /// Converts a specified Location to a Point on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Location, null is returned.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts a specified Location to a Point on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Location, null is returned.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// <param name="reference" type="Microsoft.Maps.PixelReference"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts an array of Locations and returns an array of Points if all locations were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts an array of Locations and returns an array of Points if all locations were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
            /// <param name="reference" type="Microsoft.Maps.PixelReference"></param>
            /// </signature>
        },
        tryPixelToLocation: function (point, reference) {
            /// <signature>
            /// <summary>
            /// Converts a specified Point to a Location on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Point, null is returned.
            /// </summary>
            /// <param name="point" type="Microsoft.Maps.Point"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts a specified Point to a Location on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Point, null is returned.
            /// </summary>
            /// <param name="point" type="Microsoft.Maps.Point"></param>
            /// <param name="reference" type="Microsoft.Maps.PixelReference"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts an array of Points and returns an array of Locations if all points were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="points" type="Microsoft.Maps.Point[]"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts an array of Points and returns an array of Locations if all points were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="points" type="Microsoft.Maps.Point[]"></param>
            /// <param name="reference" type="Microsoft.Maps.PixelReference"></param>
            /// </signature>
        }
    };

    /* Static Methods */

    m.Map.getVersion = function () {
        /// <summary>
        /// Returns the version of the map control.
        /// </summary>
        /// <returns type='String'/>
    };

    m.Map.__class = true;

})(this);