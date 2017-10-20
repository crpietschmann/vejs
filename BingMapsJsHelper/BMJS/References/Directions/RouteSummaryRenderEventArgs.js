(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.RouteSummaryRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.RouteSummaryRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the summary. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. This property is only available for the beforeSummaryRender event. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Number'>A number indicating the index of the route leg which this summary describes.</field>
        routeLegIndex: {},
        /// <field type='Microsoft.Maps.Directions.RouteSummary'>The summary that was rendered.</field>
        summary: {}
    };

})(this);