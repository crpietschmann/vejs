(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.TileLayerOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.TileLayerOptions.prototype = {
        /// <field type='Microsoft.Maps.AnimationVisibility'>The tile layer’s visibility during animation. You can use this property to prevent overlays from displaying during animations, which can impact performance. The default value is auto.</field>
        animationDisplay: {},
        /// <field type='Number'>The number of milliseconds allowed for the tile layer image download. If the timeout occurs before the image is fully downloaded, the map control considers the download a failure. The default value is 10000.</field>
        downloadTimeout: {},
        /// <field type='Microsoft.Maps.TileSource'>The tile source for the tile layer.</field>
        mercator: {},
        /// <field type='Number'>The opacity of the tile layer, defined by a number between 0 (not visible) and 1.</field>
        opacity: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the tile layer. The default value is true. A value of false indicates that the tile layer is hidden, although it is still an entity on the map.</field>
        visible: {},
        /// <field type='Number'>The z-index of the tile layer, with respect to other items on the map.</field>
        zIndex: {}
    };

})(this);