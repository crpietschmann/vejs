(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.MapMode = function () {
        /// <summary>
        /// Represents a map mode for the MapTypeId values aerial, auto, birdseye, collinsBart, mercator, ordnanceSurvey, and road.
        /// </summary>
        /// <returns type="Microsoft.Maps.MapMode"/>
    };

    m.MapMode.prototype = {        
        getDrawShapesInSingleLayer: function () {
            /// <summary>
            /// Gets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getShouldClipPolygons: function () {
            /// <summary>
            /// Gets whether to clip polygons if they are too large for the map in the mode.
            /// </summary>
            /// <returns type='Boolean'></returns>
        }, 
        setDrawShapesInSingleLayer: function () {
            /// <deprecated type="deprecate">
            /// Sets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order. A shape is drawn by default in its own layer, but if one shape covers another shape, then the top-layered shape event is what is thrown. You can prevent this issue by calling setDrawShapesInSingleLayer(true).
            /// <para>[Deprecated] Use setOptions.</para>
            /// </deprecated>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the current map mode.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>shouldClipPolygons (boolean): Sets whether the mode should clip polygons if they are too large for the map in this mode.,</para>
            /// <para>drawShapesInSingleLayer (boolean): Sets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order. A shape is drawn by default in its own layer, but if one shape covers another shape, then the top-layered shape event is what is thrown. You can prevent this issue by setting this parameter to true.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the current map mode.
            /// </summary>
            /// <param name="options" type="AnonymousObject.MapModeOptions"/>
            /// </signature>
        },
        setViewChangeEndDelay : function (delay) {
            /// <summary>
            /// Sets the specified number of milliseconds after the last viewchange event before viewchangeend event is fired. This allows you to control how often the viewchangeend event is fired when the map is panned.
            /// </summary>
            /// <param name="delay" type='Number'></param>
        }
    };

    m.MapMode.__class = true;

})(this);