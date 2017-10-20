(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.WaypointRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.WaypointRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the waypoint. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. This property is only available for the beforeWaypointRender event. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Microsoft.Maps.Directions.Waypoint'>The waypoint for which the event occurred.</field>
        waypoint: {}
    };

})(this);