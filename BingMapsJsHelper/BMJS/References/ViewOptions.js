(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.ViewOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.ViewOptions.prototype = {
        /// <field type='Boolean'>A boolean that specifies whether to animate map navigation. Note that this option is associated with each setView call and defaults to true if not specified.</field>
        animate: {},
        /// <field type='Microsoft.Maps.LocationRect'>The bounding rectangle of the map view. If both are specified, bounds takes precedence over center.</field>
        bounds: {},
        /// <field type='Microsoft.Maps.Location'>The location of the center of the map view. If both are specified, bounds takes precedence over center.</field>
        center: {},
        /// <field type='Microsoft.Maps.Point'>The amount the center is shifted. This property is ignored if center is not specified.</field>
        centerOffset: {},
        /// <field type='Number'>The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East, 180 = South, and 270 = West.</field>
        heading: {},
        /// <field type='Microsoft.Maps.LabelOverlay'>A constant indicating how map labels are displayed.</field>
        labelOverlay: {},
        /// <field type='Microsoft.Maps.MapTypeId'>The map type of the view.</field>
        mapTypeId: {},
        /// <field type='Number'>The amount of padding to be added to each side of the bounds of the map view.</field>
        padding: {},
        /// <field type='Number'>The zoom level of the map view.</field>
        zoom: {}
    };

})(this);