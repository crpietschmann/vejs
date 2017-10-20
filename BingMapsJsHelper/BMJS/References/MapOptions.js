(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.MapOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.MapOptions.prototype = {
        /// <field type='Color Class '>The color to use for the map control background. The default color is #F4F2EE. This property can only be set when using the Map constructor.</field>
        backgroundColor: {},
        /// <field type='String'>The Bing Maps Key used to authenticate the application. This property can only be set when using the Map constructor.</field>
        credentials: {},
        /// <field type='Boolean'>A boolean indicating whether to load the new Bing Maps overlay styles. The default value is false. This property can only be set when using the Map constructor.</field>
        customizeOverlays: {},
        /// <field type='Boolean'>A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed from the map navigation control and the birdseyeMapTypeId is disabled. Additionally, the auto map type will only display road or aerial. This property can only be set when using the Map constructor.</field>
        disableBirdseye: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the map’s response to keyboard input. The default value is false.</field>
        disableKeyboardInput: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the map’s response to mouse input. The default value is false.</field>
        disableMouseInput: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the user’s ability to pan the map. The default value is false.</field>
        disablePanning: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the map’s response to touch input. The default value is false.</field>
        disableTouchInput: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the map’s response to any user input. The default value is false.</field>
        disableUserInput: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the user’s ability to zoom in or out. The default value is false.</field>
        disableZooming: {},
        /// <field type='Boolean'>A boolean value indicating whether the BingTM logo on the map is clickable. The default value is true. This property can only be set when using the Map constructor.</field>
        enableClickableLogo: {},
        /// <field type='Boolean'>A boolean value indicating whether to enable the BingTM hovering search logo on the map. The default value is true. This property can only be set when using the Map constructor.</field>
        enableSearchLogo: {},
        /// <field type='Boolean'>A boolean indicating whether the div containing the map control is fixed on the page and the browser will not be resized. The default value is false. In this case the map control redraws if necessary based on any div or window resize. If this property is set to true, the map control does not check the size of the div containing it every time the map view changes, thus increasing the performance of the control. This property can only be set when using the Map constructor.</field>
        fixedMapPosition: {},
        /// <field type='Number'>The height of the map. The default value is null. If no height is specified, the height of the div is used. If height is specified, then width must be specified as well.</field>
        height: {},
        /// <field type='Number'>A number between 0 and 1 specifying the intensity of the inertia animation effect. The inertia effect increases as the intensity value gets larger. The default value is .85. Setting this property to 0 indicates no inertia effect. The useInertia property must be set to true for the inertiaIntensity value to have an effect.</field>
        inertiaIntensity: {},
        /// <field type='Boolean'>A boolean value indicating whether to display the “breadcrumb control”. The breadcrumb control shows the current center location’s geography hierarchy. For example, if the location center is Seattle, the breadcrumb control displays “World . United States . WA”. The default value is false. The breadcrumb control displays best when the width of the map is at least 300 pixels. This property can only be set when using the Map constructor.</field>
        showBreadcrumb: {},
        /// <field type='Boolean'>A boolean value indicating whether or not to show the map copyright. The default value is true. This property can only be set when using the Map constructor. Important: Bing Maps Platform API Terms of Use requires copyright information to be displayed. Only set this option to false when copyright information is displayed through alternate means.</field>
        showCopyright: {},
        /// <field type='Boolean'>A boolean value indicating whether to show the map navigation control. The default value is true. This property can only be set when using the Map constructor.</field>
        showDashboard: {},
        /// <field type='Boolean'>A boolean value indicating whether to show the map type selector in the map navigation control. The default value is true. This property can only be set when using the Map constructor.</field>
        showMapTypeSelector: {},
        /// <field type='Boolean'>A boolean value indicating whether to show the scale bar. The default value is true. This property can only be set when using the Map constructor.</field>
        showScalebar: {},
        /// <field type='Object'>A theme object specifying the theme to use for the design of the map. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module and assign a BingTheme object to this property.</field>
        theme: {},
        /// <field type='Number'>A number between 0 and 4 specifying how many tiles to use as a buffer around the map view. The default value is 0.</field>
        tileBuffer: {},
        /// <field type='Boolean'>A boolean value indicating whether to use the inertia animation effect during map navigation. The default value is true.</field>
        useInertia: {},
        /// <field type='Number'>The width of the map. The default value is null. If no width is specified, the width of the div is used. If width is specified, then height must be specified as well.</field>
        width: {},
        /// <field type='String'>The homeRegion parameter specifies the user region using the ISO 3166-1 Alpha-2 country code for the region. By default it uses the region set on the users computer. Some regions are unsupported. This value can be overridden to a different region to get it to work.
        /// <para>Specific to Windows Store Apps Only</para></field>
        homeRegion: {},
        /// <field type='String'>The language that the map should be localized to.
        /// <para>Specific to Windows Store Apps Only. For Bing Maps V7 set the culture using the mkt parameter of the script reference.</para></field>
        culture: {}
    };

})(this);