(function (window) {
    // <field type='None'>This namespace is used as a placeholder for Anonymous objects that are passed into methods to assist with intellisense.
    /// <para>To implement these object simply wrap the properties with "{}", do not use the namespace and the 'new' keyword.</para>
    /// </field>
    window.AnonymousObject = {
    },

    window.Microsoft = {
        /// <field type='Namespace'>Bing Maps namespace</field>
        Maps: {

            /* Enumerators */

            /// <field type='Microsoft.Maps.AltitudeReference'>Defines the reference point from which the altitude is measured</field>
            AltitudeReference: {
                /// <field type='Microsoft.Maps.AltitudeReference'>The altitude is measured from the ground level.</field>
                ground: {},
                /// <field type='Microsoft.Maps.AltitudeReference'>The altitude is measured from the WGS 84 ellipsoid of the Earth.</field>
                ellipsoid: {},
                isValid: function (altitudeReference) {
                    /// <summary>
                    /// Determines if the specified reference is a supported AltitudeReference.
                    /// </summary>
                    /// <param name="altitudeReference" type="Microsoft.Maps.AltitudeReference"></param>
                    /// <returns type='Boolean'></returns>
                },
                __enum : true
            },

            /// <field type='Microsoft.Maps.AnimationVisibility'>Defines a tile layer’s visibility during animation.</field>
            AnimationVisibility: {
                /// <field type='Microsoft.Maps.AnimationVisibility'>The map control determines whether or not to show a tile layer based on system capability. If a browser can render a tile layer with acceptable performance, it is displayed during animations.</field>
                auto: {},
                /// <field type='Microsoft.Maps.AnimationVisibility'>The tile layer is not displayed during animation.</field>
                hide: {},
                /// <field type='Microsoft.Maps.AnimationVisibility'>The tile layer is displayed during animations. This option may impact performance on older browsers.</field>
                show: {},
                __enum: true
            },

            /// <field type='Microsoft.Maps.EntityState'>Defines the highlighted or selected state of an entity, such as a pushpin. To get the latest Bing Maps entity state design, load the Microsoft.Maps.Themes.BingTheme module before creating your entity.</field>
            EntityState: {
                /// <field type='Microsoft.Maps.EntityState'>The entity is highlighted on the map.</field>
                highlighted: {},
                /// <field type='Microsoft.Maps.EntityState'>The entity is not highlighted or selected.</field>
                none: {},
                /// <field type='Microsoft.Maps.EntityState'>The entity is selected on the map.</field>
                selected: {},
                __enum: true
            },
            
            /// <field type='Microsoft.Maps.InfoboxType'>Contains info box styles. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module before creating your info box.</field>
            InfoboxType: {
                /// <field type='Microsoft.Maps.InfoboxType'>A smaller info box with space for a title.</field>
                mini: {},
                /// <field type='Microsoft.Maps.InfoboxType'>The default info box style. This standard info box makes space for a title, title link, description, and other links if they are specified.</field>
                standard: {},
                __enum: true
            },

            /// <field type='Microsoft.Maps.LabelOverlay'>Defines how map labels are displayed.</field>
            LabelOverlay: {
                /// <field type='Microsoft.Maps.LabelOverlay'>Map labels are not shown on top of imagery.</field>
                hidden: {},
                /// <field type='Microsoft.Maps.LabelOverlay'>Map labels are shown on top of imagery.</field>
                visible: {},
                __enum: true
            },

            /// <field type='Microsoft.Maps.MapTypeId'>Defines how map labels are displayed.</field>
            MapTypeId: {
                /// <field type='Microsoft.Maps.MapTypeId'>The aerial map type is being used.</field>
                arial: {},
                /// <field type='Microsoft.Maps.MapTypeId'>The map is set to choose the best imagery for the current view.</field>
                auto: {},
                /// <field type='Microsoft.Maps.MapTypeId'>The bird’s eye map type is being used.</field>
                birdseye: {},
                /// <field type='Microsoft.Maps.MapTypeId'>Collin’s Bart (mkt=en-gb) map type is being used.</field>
                collinsBart: {},
                /// <field type='Microsoft.Maps.MapTypeId'>The Mercator map type is being used. This setting removes the base map tiles.</field>
                mercator: {},
                /// <field type='Microsoft.Maps.MapTypeId'>Ordnance Survey (mkt=en-gb) map type is being used.</field>
                ordnanceSurvey: {},
                /// <field type='Microsoft.Maps.MapTypeId'>The road map type is being used.</field>
                road: {},
                __enum: true
            },

            /// <field type='Microsoft.Maps.PixelReference'>Contains constants used to show how pixels are defined.</field>
            PixelReference:{
                /// <field type='Microsoft.Maps.PixelReference'>The pixel is defined relative to the map control’s root element, where the top left corner of the map control is (0, 0). Using this option might cause a page reflow which may negatively impact performance.</field>
                control: {},
                /// <field type='Microsoft.Maps.PixelReference'>The pixel is defined relative to the page, where the top left corner of the HTML page is (0, 0). This option is best used when working with mouse or touch events. Using this option might cause a page reflow which may negatively impact performance.</field>
                page: {},
                /// <field type='Microsoft.Maps.PixelReference'>The pixel is defined in viewport coordinates, relative to the center of the map, where the center of the map is (0, 0). This option is best used for positioning geo-aligned entities added to the user layer.</field>
                viewport: {},
                __enum: true
            },

            /* Static Classes & Module Namespaces */

            /// <field type='Microsoft.Maps.Events'>Provides event handling functionality for map and entity events.</field>
            Events: {
                __namespace: true
            },

            /// <field type='Microsoft.Maps.Themes'>Bing Theme Module Namespace</field>
            Themes: {
                BingTheme: function () {
                    /// <summary>
                    /// When loaded, the Microsoft.Maps.Themes.BingTheme module updates certain visual aspects of the map control with the latest Bing Maps design. To see the design changes, simply access the corresponding API after loading the Microsoft.Maps.Themes.BingTheme module.
                    /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Themes.BingTheme", {</para> 
                    /// <para>callback: function(){ </para>
                    /// <para>map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {</para>
                    /// <para>credentials: "Bing Maps Key", </para>
                    /// <para>theme: new Microsoft.Maps.Themes.BingTheme() });</para>
                    /// <para>}});</para>
                    /// </summary>
                    /// <returns type='Microsoft.Maps.Themes.BingTheme'/>
                },
                __namespace: true
            },

            /// <field type='Microsoft.Maps.Traffic'>Traffic Module, start with Microsoft.Maps.Traffic.TrafficManager.</field>
            Traffic: {
                __namespace: true
            },

            /// <field type='Microsoft.Maps.Directions'>Directions Module, start with Microsoft.Maps.Directions.DirectionsManager.</field>
            Directions: {
                __namespace: true
            },

            /// <field type='Microsoft.Maps.Search'>Search Module, start with Microsoft.Maps.Search.SearchManager.</field>
            Search: {
                __namespace: true
            },

            /// <field type='Microsoft.Maps.VenueMaps'>Venue Maps Module, start with Microsoft.Maps.VenueMaps.VenueMapsFactory.</field>
            VenueMaps: {
                __namespace: true
            },

            Overlays: {
                /// <field type='Microsoft.Maps.Overlays.Style'>Overlays Style Module. Provides a different navigation bar option.
                /// <para>Usage:  Microsoft.Maps.loadModule('Microsoft.Maps.Overlays.Style', { callback: GetMap }); </para>
                /// <para>Set map option "customizeOverlays" to true.</para>
                /// </field>
                Style: {},
                __namespace: true
            },

            /// <field type='Namespace'>Contains global settings for map control.</field>
            Globals: {
                /// <field type='Number'>Specifies the size of the map tiles. Default is 256. When targetting mobile devices with high resoolution screens set this value to 128.</field>
                defaultTileSize: {},
                /// <field type='Number'>Minimium zoom level of the map. Default is 1. Use this to limit the zoom range of the map.</field>
                minMercatorZoom: {},
                /// <field type='Number'>Maximium zoom level of the map. Default is 20. Use this to limit the zoom range of the map.</field>
                maxMercatorZoom: {},
                __namespace: true
            },

            /// <field type='Namespace'>Contains static methods for dealing with QuadKey tile data.</field>
            QuadKey: {
                fromTileId: function (tileId) {
                    /// <summary>
                    /// Converts a tile x,y,zoom values into a QuadKey string.
                    /// </summary>
                    /// <param name="altitudeReference" type="Microsoft.Maps.AltitudeReference"></param>
                    /// <returns type='Boolean'></returns>
                },
                toTileId: function (qudakey) {
                    /// <summary>
                    /// Converts a Quadkey string into it's tile x,y,zoom values.
                    /// </summary>
                    /// <param name="qudakey" type='String'></param>
                    /// <returns type="Object{x:(Number),y:(Number),levelOfDetail:(Number)}"></returns>
                },
                __namespace: true
            },

            loadModule: function (moduleKey, options) {
                /// <signature>
                /// <summary>
                /// Loads the specified registered module, making its functionality available. An optional function can be specified that is called when the module is loaded.
                /// </summary>
                /// <param name="moduleKey" type='String'></param>
                /// </signature>

                /// <signature>
                /// <summary>
                /// Loads the specified registered module, making its functionality available. An optional function can be specified that is called when the module is loaded.
                /// </summary>
                /// <param name="moduleKey" type='String'></param>
                /// <param name="options" type="Object">{
                /// <para>callback (function): Callback function that is called after the module is loaded.</para>
                /// <para>}</para>
                /// </param>
                /// </signature>
            },

            moduleLoaded: function (moduleKey) {
                /// <summary>
                /// Signals that the specified module has been loaded and if specified, calls the callback function in loadModule. Call this method at the end of your module script.
                /// </summary>
                /// <param name="moduleKey" type='String'></param>
            },

            registerModule: function (moduleKey, scriptUrl, options) {
                /// <signature>
                /// <summary>
                /// Registers a module with the map control. The name of the module is specified in moduleKey, the module script is defined in scriptUrl, and the options provides the location of a *.css file to load with the module.  
                /// <para>Tip: To minimize possible conflicts with other custom modules, choose a unique module name (defined in moduleKey). For example, you can use your company name in the name of the module.</para>
                /// Once you have registered a module, you can make its functionality available by loading it using loadModule.
                /// </summary>
                /// <param name="moduleKey" type='String'>Unique name for module to be used when loading.</param>
                /// <param name="scriptUrl" type='String'>Url to module JS script.</param>
                /// </signature>

                /// <signature>
                /// <summary>
                /// Registers a module with the map control. The name of the module is specified in moduleKey, the module script is defined in scriptUrl, and the options provides the location of a *.css file to load with the module.  
                /// <para>Tip: To minimize possible conflicts with other custom modules, choose a unique module name (defined in moduleKey). For example, you can use your company name in the name of the module.</para>
                /// Once you have registered a module, you can make its functionality available by loading it using loadModule.
                /// </summary>
                /// <param name="moduleKey" type='String'>Unique name for module to be used when loading.</param>
                /// <param name="scriptUrl" type='String'>Url to module JS script.</param>
                /// <param name="options" type="Object">{
                /// <para>styleURLs (string[]): An array of Url strings to supporting CSS files.</para>
                /// <para>}</para>
                /// </param>
                /// </signature>
            },
            __namespace: true
        },
        __namespace : true
    };

})(this);