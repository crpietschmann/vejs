(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsStepEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsStepEventArgs.prototype = {
        /// <field type='Boolean'>A boolean indicating whether the event is handled. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Microsoft.Maps.Location'>The location along the route where the direction step occurs.</field>
        location: {},
        /// <field type='Number'>A number indicating the route (if multiple routes were returned) to which the directions step belongs.</field>
        routeIndex: {},
        /// <field type='Number'>A number indicating the route leg to which the directions step belongs.</field>
        routeLegIndex: {},
        /// <field type='Microsoft.Maps.Directions.DirectionsStep'>The directions step.</field>
        step: {},
        /// <field type='Number'>A number indicating the index of the directions step within the route leg array.</field>
        stepIndex: {},
        /// <field type='Number'>A number indicating the directions step number within the route.</field>
        stepNumber: {}
    };

})(this);