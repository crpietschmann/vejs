(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.DirectionsManager = function (map) {
        /// <summary>
        /// Contains methods for calculating directions and displaying a route on a map.
        /// <para>Supported Events: afterRouteSelectorRender, afterStepRender, afterSummaryRender, afterWaypointRender, beforeDisambiguationRender, beforeRouteSelectorRender, beforeStepRender, beforeSummaryRender, beforeWaypointRender, directionsError, directionsUpdated, dragDropCompleted, itineraryStepClicked, mouseEnterRouteSelector, mouseEnterStep, mouseLeaveRouteSelector, mouseLeaveStep, routeSelectorClicked, waypointAdded, waypointRemoved</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Directions", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="map" type="Microsoft.Maps.Map"></param>
        /// <returns type='Microsoft.Maps.Directions.DirectionsManager'/>
    };

    m.DirectionsManager.prototype = {
        addWaypoint: function (waypoint, index) {
            /// <signature>
            /// <summary>
            /// Adds a waypoint to the end of the route. To recalculate the route, use calculateDirections. The maximum number of walking or driving waypoints is 25. The maximum number of transit waypoints is 2. Up to 10 via points are allowed between two stop waypoints.
            /// </summary>
            /// <param name="waypoint" type="Microsoft.Maps.Directions.Waypoint"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds a waypoint to the route at the given index. If an index is not specified the waypoint is added as the last waypoint in the route. To recalculate the route, use calculateDirections. The maximum number of walking or driving waypoints is 25. The maximum number of transit waypoints is 2. Up to 10 via points are allowed between two stop waypoints.
            /// </summary>
            /// <param name="waypoint" type="Microsoft.Maps.Directions.Waypoint"></param>
            /// <param name="index" type='Number'></param>
            /// </signature>
        },
        calculateDirections: function () {
            /// <summary>
            /// Calculates directions based on request and render options set (setRequestOptions, setRenderOptions) and the waypoints added (addWaypoint). The directionsUpdated event fires when the calculation is complete and the route is displayed on the map. You must call this method after making any changes to the route options or waypoints.
            /// </summary>
        },
        clearDisplay: function () {
            /// <summary>
            /// Clears the directions displayed and removes the route line from the map. This method does not remove waypoints from the route and retains all calculated direction information and option settings. To clear the calculated directions and options, use resetDirections.
            /// </summary>
        },
        dispose: function () {
            /// <summary>
            /// Deletes the DirectionsManager object and releases any associated resources.
            /// </summary>
        },
        getAllWaypoints: function () {
            /// <summary>
            /// Returns the waypoints for the route.
            /// </summary>
            /// <returns type='Microsoft.Maps.Directions.Waypoint[]'></returns>
        },
        getMap: function () {
            /// <summary>
            /// Returns the map object associated with the directions manager.
            /// </summary>
            /// <returns type='Microsoft.Maps.Map'></returns>
        },
        getNearbyMajorRoads: function (location, callback, errorCallback, userData) {
            /// <signature>
            /// <summary>
            /// Searches around the specified location for nearby major roads and returns them as an object to the callback function.
            /// </summary>
            /// <param name="Microsoft.Maps.Location" type='String'></param>
            /// <param name="callback" type="function">Callback method to fire when successful.</param>
            /// <param name="errorCallback" type="function">Callback method to call when unsuccessful. Recieves an AnonymousObject.DirectionsErrorEventArgs parameter.</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Searches around the specified location for nearby major roads and returns them as an object to the callback function.
            /// </summary>
            /// <param name="Microsoft.Maps.Location" type='String'></param>
            /// <param name="callback" type="function">Callback method to fire when successful.</param>
            /// <param name="errorCallback" type="function">Callback method to call when unsuccessful. Recieves an AnonymousObject.DirectionsErrorEventArgs parameter.</param>
            /// <param name="userData" type="Object"></param>
            /// </signature>
        },
        getRenderOptions: function () {
            /// <signature>
            /// <summary>
            /// Returns the route render options.
            /// </summary>
            /// <returns name="options" type="AnonymousObject.DirectionsRenderOptions"/>
            /// </returns>
            /// </signature>
        },
        getRequestOptions: function () {
            /// <signature>
            /// <summary>
            /// Returns the directions request options.
            /// </summary>
            /// <returns name="options" type="AnonymousObject.DirectionsRequestOptions"/>
            /// </returns>
            /// </signature>
        },
        getRouteResult: function () {
            /// <summary>
            /// Returns the current calculated route(s). If the route was not successfully calculated, null is returned.
            /// </summary>
            /// <returns type='Microsoft.Maps.Directions.Route[]'></returns>
        },
        removeWaypoint: function (waypoint) {
            /// <summary>
            /// Removes the given waypoint from the route. Use calculateDirections to update the route once a waypoint has been removed.
            /// </summary>
            /// <signature>
            /// <summary>
            /// Removes the given waypoint or the waypoint identified by the given index from the route. Use calculateDirections to update the route once a waypoint has been removed.
            /// </summary>
            /// <param name="waypoint" type="Microsoft.Maps.Directions.Waypoint"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the given waypoint identified by the given index from the route. Use calculateDirections to update the route once a waypoint has been removed.
            /// </summary>
            /// <param name="index" type='Number'></param>
            /// </signature>
        },
        resetDirections: function (options) {
            /// <signature>
            /// <summary>
            /// If no options object is supplied, clears the directions request and render options and removes all waypoints.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>removeAllWaypoints (boolean), resetRenderOptions (boolean), resetRequestOptions (boolean)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// If no options object is supplied, clears the directions request and render options and removes all waypoints.
            /// </summary>
            /// <param name="options" type="Object">{      
            /// <para>removeAllWaypoints (boolean): A boolean indicating whether to remove all of the waypoints of the route. The default value is false.,</para>
            /// <para>resetRenderOptions (boolean): A boolean indicating whether to reset all of the render options set for the route. The default value is false.,</para>
            /// <para>resetRequestOptions (boolean): A boolean indicating whether to reset all of the request options set for the route. The default value is false.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// If no options object is supplied, clears the directions request and render options and removes all waypoints.
            /// </summary>
            /// <param name="options" type="AnonymousObject.RestDirectionsOptions"/>
            /// </signature>
        },
        reverseGeocode: function (location, callback, errorCallback, userData) {
            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address to the specified callback function.
            /// </summary>
            /// <param name="Microsoft.Maps.Location" type='String'></param>
            /// <param name="callback" type="function">Callback method to fire when successful. Recieves two paramters: {formattedAddress:'', shortFormattedAddress:''}, and useData.</param>
            /// <param name="errorCallback" type="function">Callback method to call when unsuccessful.</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address to the specified callback function.
            /// </summary>
            /// <param name="Microsoft.Maps.Location" type='String'></param>
            /// <param name="callback" type="function">Callback method to fire when successful. Recieves two paramters: {formattedAddress:'', shortFormattedAddress:''}, and useData.</param>
            /// <param name="errorCallback" type="function">Callback method to call when unsuccessful. Recieves a AnonymousObject.DirectionsErrorEventArgs parameter.</param>
            /// <param name="userData" type="Object"></param>
            /// </signature>
        },
        setMapView: function () {
            /// <summary>
            /// Sets the map view based on the current route index.
            /// </summary>
        },
        setRenderOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets the specified render options for the route.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>autoDisplayDisambiguation (boolean), autoUpdateMapView (boolean), disambiguationPushpinOptions (AnonymousObject.PushpinOptions), displayDisclaimer (boolean), displayManeuverIcons (boolean), displayPostItineraryItemHints (boolean), displayPreItineraryItemHints (boolean), displayRouteSelector (boolean), displayStepWarnings (boolean), displayTrafficAvoidanceOption (boolean), displayWalkingWarning (boolean), drivingPolylineOptions (AnonymousObject.PolylineOptions), itineraryContainer (DOMElement), lastWaypointIcon (string), middleWaypointIcon (string), stepPushpinOptions (AnonymousObject.PushpinOptions), transitPolylineOptions (AnonymousObject.PolylineOptions), viapointPushpinsOptions (AnonymousObject.PushpinOptions), walkingPolylineOptions (AnonymousObject.PolylineOptions), waypointPushpinOptions (AnonymousObject.PushpinOptions)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the specified render options for the route.
            /// </summary>
            /// <param name="options" type="Object">{      
            /// <para>autoDisplayDisambiguation (boolean): A boolean indicating whether to automatically display a disambiguation dialog for waypoints. The default value is true.,</para>
            /// <para>autoUpdateMapView (boolean): A boolean indicating whether to automatically set the map view to the best map view of the calculated route. The default value is true.,</para>
            /// <para>disambiguationPushpinOptions (AnonymousObject.PushpinOptions): The options that define the pushpin to use for disambiguation.,</para>
            /// <para>displayDisclaimer (boolean): A boolean indicating whether to display the disclaimer about the accuracy of the directions. The default value is false.,</para>
            /// <para>displayManeuverIcons (boolean): A boolean indicating whether to display the icons for each direction maneuver. The default value is true.,</para>
            /// <para>displayPostItineraryItemHints (boolean): A boolean indicating whether to display direction hints that describe when an direction step was missed. The default value is true.,</para>
            /// <para>displayPreItineraryItemHints (boolean): A boolean indicating whether to display direction hints that describe what to look for before you come to the next direction step. The default value is true.,</para>
            /// <para>displayRouteSelector (boolean): A boolean indicating whether to display the route selector control. The default value is true.,</para>
            /// <para>displayStepWarnings (boolean): A boolean indicating whether to display direction warnings. The default value is true.,</para>
            /// <para>displayTrafficAvoidanceOption (boolean): A boolean indicating whether to display the control that allows the user to choose to avoid traffic. The default value is true.,</para>
            /// <para>displayWalkingWarning (boolean): A boolean indicating whether to display a warning about walking directions. The default value is true.,</para>
            /// <para>drivingPolylineOptions (AnonymousObject.PolylineOptions): The options that define how to draw the route line on the map, if the RouteMode is driving.,</para>
            /// <para>itineraryContainer (DOMElement): The DOM element inside which the directions itinerary will be rendered.,</para>
            /// <para>lastWaypointIcon (string): The URL of the icon to use for the end waypoint.,</para>
            /// <para>middleWaypointIcon (string): The URL of the icon to use for intermediate waypoints.,</para>
            /// <para>stepPushpinOptions (AnonymousObject.PushpinOptions): The options that define the pushpin to use for each direction step.,</para>
            /// <para>transitPolylineOptions (AnonymousObject.PolylineOptions): The options that define how to draw the route line on the map, if the RouteMode is transit.,</para>
            /// <para>viapointPushpinsOptions (AnonymousObject.PushpinOptions): The options that define the pushpin to use for each via point of the route, which are any waypoints other than the start and end waypoints.,</para>
            /// <para>walkingPolylineOptions (AnonymousObject.PolylineOptions): The options that define how to draw the route line on the map, if the RouteMode is walking.,</para>
            /// <para>waypointPushpinOptions (AnonymousObject.PushpinOptions): The options that define the pushpin to use for the route waypoint.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the specified render options for the route.
            /// </summary>
            /// <param name="options" type="AnonymousObject.DirectionsRenderOptions"/>
            /// </signature>
        },
        setRequestOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets the specified route calculation options.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>avoidTraffic (boolean), distanceUnit (Microsoft.Maps.Directions.DistanceUnit), maxRoutes (number), routeAvoidance (Microsoft.Maps.Directions.RouteAvoidance[]), routeDraggable (boolean), routeIndex (number), routeMode (Microsoft.Maps.Directions.RouteMode), routeOptimization (Microsoft.Maps.Directions.RouteOptimization), transitOptions (Object{timeType:(Microsoft.Maps.Directions.TimeType),transitTime:(Date)})</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the specified route calculation options.
            /// </summary>
            /// <param name="options" type="Object">{      
            /// <para>avoidTraffic (boolean): A boolean indicating whether to return traffic info when calculating the route. The default value is false.</para>
            /// <para>distanceUnit (Microsoft.Maps.Directions.DistanceUnit): The unit to use when displaying direction distances. The default value is based on the specified culture.</para>
            /// <para>maxRoutes (number): The number of routes to calculate. If the routeMode is driving or walking, only 1 route is supported. If the routeMode is transit, up to 6 routes can be calculated and the default is 3.</para>
            /// <para>routeAvoidance (Microsoft.Maps.Directions.RouteAvoidance[]): The features to avoid when calculating the route. The default value is none.</para>
            /// <para>routeDraggable (boolean): A boolean indicating whether the route line on the map can be dragged with the mouse cursor. The default value is true. When a route is dragged, a via point is added to the route. To change the drag behavior of a waypoint, set the draggable property of the waypointPushpinOptions (of the DirectionsRenderOptions).</para>
            /// <para>routeIndex (number): If multiple routes are returned, the index of the route and directions to display. This property only applies to routes where the routeMode is transit, and in this case up to 6 routes are supported.</para>
            /// <para>routeMode (Microsoft.Maps.Directions.RouteMode): The type of directions to calculate. The default value is driving. When the culture is ja-jp, only the transit route mode is supported, which is the default for that market.</para>
            /// <para>routeOptimization (Microsoft.Maps.Directions.RouteOptimization): The optimization setting for the route calculation. The default value is shortestTime.</para>
            /// <para>transitOptions (AnonymousObject.TransitOptions): The extra options for calculating a route if the routeMode is transit. Format: {timeType:(Microsoft.Maps.Directions.TimeType),transitTime:(Date)}</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the specified route calculation options.
            /// </summary>
            /// <param name="options" type="AnonymousObject.DirectionsRequestOptions"/>
            /// </signature>
        }
    };

    m.DirectionsManager.__class = true;

})(this);