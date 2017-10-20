(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.MapModeOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.MapModeOptions.prototype = {
        /// <field type='Boolean'>Sets whether the mode should clip polygons if they are too large for the map in this mode.</field>
        shouldClipPolygons: {},
        /// <field type='Boolean'>Sets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order. A shape is drawn by default in its own layer, but if one shape covers another shape, then the top-layered shape event is what is thrown. You can prevent this issue by setting this parameter to true.</field>
        drawShapesInSingleLayer: {}
    };

})(this);