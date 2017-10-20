(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.TileLayer = function (options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileLayer class.
        /// <para>Supported Events: tiledownloadcomplete</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>animationDisplay (Microsoft.Maps.AnimationVisibility), downloadTimeout (number), mercator (Microsoft.Maps.TileSource), opacity (number), visible (boolean), zIndex (number)</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileLayer class.
        /// <para>Supported Events: tiledownloadcomplete</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>animationDisplay (Microsoft.Maps.AnimationVisibility): The tile layer’s visibility during animation. You can use this property to prevent overlays from displaying during animations, which can impact performance. The default value is auto.,</para>
        /// <para>downloadTimeout (number): The number of milliseconds allowed for the tile layer image download. If the timeout occurs before the image is fully downloaded, the map control considers the download a failure. The default value is 10000.,</para>
        /// <para>mercator (Microsoft.Maps.TileSource): The tile source for the tile layer.</para>
        /// <para>opacity (number): The opacity of the tile layer, defined by a number between 0 (not visible) and 1.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the tile layer. The default value is true. A value of false indicates that the tile layer is hidden, although it is still an entity on the map.,</para>
        /// <para>zIndex (number): The z-index of the tile layer, with respect to other items on the map.</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileLayer class.
        /// <para>Supported Events: tiledownloadcomplete</para>
        /// </summary>
        /// <param name="options" type="AnonymousObject.TileLayerOptions"/>
        /// </signature>
        /// <returns type="Microsoft.Maps.TileLayer"/>

        /// <returns type="Microsoft.Maps.TileLayer"/>
    };

    m.TileLayer.prototype = {
        getOpacity: function () {
            /// <summary>
            /// Returns the opacity of the tile layer, defined as a double between 0 (not visible) and 1.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getTileSource: function () {
            /// <summary>
            /// Returns the tile source of the tile layer. 
            /// The projection parameter accepts the following values: mercator, enhancedBirdseyeNorthUp, enhancedBirdseyeSouthUp, enhancedBirdseyeEastUp, enhancedBirdseyeWestUp.
            /// </summary>
            /// <returns type="Microsoft.Maps.TileSource"></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Returns the z-index of the tile layer with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        setOptions: function () {
            /// <signature>
            /// <summary>
            /// Sets options for the tile layer.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>animationDisplay (Microsoft.Maps.AnimationVisibility), downloadTimeout (number), mercator (Microsoft.Maps.TileSource), opacity (number), visible (boolean), zIndex (number)</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the tile layer.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>animationDisplay (Microsoft.Maps.AnimationVisibility): The tile layer’s visibility during animation. You can use this property to prevent overlays from displaying during animations, which can impact performance. The default value is auto.,</para>
            /// <para>downloadTimeout (number): The number of milliseconds allowed for the tile layer image download. If the timeout occurs before the image is fully downloaded, the map control considers the download a failure. The default value is 10000.,</para>
            /// <para>mercator (Microsoft.Maps.TileSource): The tile source for the tile layer.</para>
            /// <para>opacity (number): The opacity of the tile layer, defined by a number between 0 (not visible) and 1.,</para>
            /// <para>visible (boolean): A boolean indicating whether to show or hide the tile layer. The default value is true. A value of false indicates that the tile layer is hidden, although it is still an entity on the map.,</para>
            /// <para>zIndex (number): The z-index of the tile layer, with respect to other items on the map.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the tile layer.
            /// </summary>
            /// <param name="options" type="AnonymousObject.TileLayerOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the TileLayer object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.TileLayer.clone = function () {
        /// <summary>
        /// Returns a copy of the Color object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.TileLayer.__class = true;

})(this);