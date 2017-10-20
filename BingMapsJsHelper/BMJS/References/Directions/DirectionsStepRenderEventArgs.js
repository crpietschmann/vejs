(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsStepRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsStepRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the directions step. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. This property is only available for the beforeStepRender event. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Boolean'>A boolean indicating whether the step is the last directions step.</field>
        lastStep: {},
        /// <field type='Number'>A number indicating the index of the route to which this step belongs.</field>
        routeIndex: {},
        /// <field type='Number'>A number indicating the index of the route leg to which this step belongs.</field>
        routeLegIndex: {},
        /// <field type='Microsoft.Maps.Directions.DirectionsStep'>The directions step.</field>
        step: {},
        /// <field type='Number'>The index of this directions step within the route leg step array.</field>
        stepIndex: {}
    };

})(this);