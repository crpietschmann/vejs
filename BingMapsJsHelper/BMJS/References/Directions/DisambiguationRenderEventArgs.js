(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DisambiguationRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DisambiguationRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the disambiguation list. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. Set this property to true to override the default behavior. If this property is set to true, a directionsError event for waypoint disambiguation is thrown.</field>
        handled: {},
        /// <field type='Microsoft.Maps.Directions.Waypoint'>The waypoint that needs to be disambiguated.</field>
        waypoint: {}
    };

})(this);