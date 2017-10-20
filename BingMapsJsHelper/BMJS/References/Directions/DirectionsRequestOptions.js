(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsRequestOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsRequestOptions.prototype = {
        /// <field type='Boolean'>A boolean indicating whether to return traffic info when calculating the route. The default value is false.</field>
        avoidTraffic: {},
        /// <field type='Microsoft.Maps.Directions.DistanceUnit'>The unit to use when displaying direction distances. The default value is based on the specified culture.</field>
        distanceUnit: {},
        /// <field type='Number'>The number of routes to calculate. If the routeMode is driving or walking, only 1 route is supported. If the routeMode is transit, up to 6 routes can be calculated and the default is 3.</field>
        maxRoutes: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance[]'>The features to avoid when calculating the route. The default value is none.</field>
        routeAvoidance: {},
        /// <field type='Boolean'>A boolean indicating whether the route line on the map can be dragged with the mouse cursor. The default value is true. When a route is dragged, a via point is added to the route. To change the drag behavior of a waypoint, set the draggable property of the waypointPushpinOptions (of the DirectionsRenderOptions).</field>
        routeDraggable: {},
        /// <field type='Number'>If multiple routes are returned, the index of the route and directions to display. This property only applies to routes where the routeMode is transit, and in this case up to 6 routes are supported.</field>
        routeIndex: {},
        /// <field type='Microsoft.Maps.Directions.RouteMode'>The type of directions to calculate. The default value is driving. When the culture is ja-jp, only the transit route mode is supported, which is the default for that market.</field>
        routeMode: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>The optimization setting for the route calculation. The default value is shortestTime.</field>
        routeOptimization: {},
        /// <field type='AnonymousObject.TransitOptions'>The extra options for calculating a route if the routeMode is transit.</field>
        transitOptions: {}
    };

})(this);