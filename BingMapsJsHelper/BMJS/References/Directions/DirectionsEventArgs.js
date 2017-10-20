(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsEventArgs.prototype = {
        /// <field type='Microsoft.Maps.Directions.RouteSummary[]'>The route summary (or summaries) of the route(s) defined in the route property.</field>
        routeSummary: {},
        /// <field type='Microsoft.Maps.Directions.Route[]'>The calculated route (or routes, if the route mode is transit).</field>
        route: {}
    };

})(this);