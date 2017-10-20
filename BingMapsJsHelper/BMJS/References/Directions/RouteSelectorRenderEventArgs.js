(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.RouteSelectorRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.RouteSelectorRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the route selector. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. This property is only available for the beforeRouteSelectorRender event. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Number'>A number indicating the index of the selected route.</field>
        routeIndex: {},
        /// <field type='Microsoft.Maps.Directions.RouteLeg'>The route leg of the selected route.</field>
        routeLeg: {}
    };

})(this);