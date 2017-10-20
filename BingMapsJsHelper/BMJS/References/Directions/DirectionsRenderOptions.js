(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsRenderOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsRenderOptions.prototype = {
        /// <field type='Boolean'>A boolean indicating whether to automatically display a disambiguation dialog for waypoints. The default value is true. If this value is set to true, a directionsError event caused by waypoint disambiguation is not thrown.</field>
        autoDisplayDisambiguation: {},
        /// <field type='Boolean'>A boolean indicating whether to automatically set the map view to the best map view of the calculated route. The default value is true.</field>
        autoUpdateMapView: {},
        /// <field type='AnonymousObject.PushpinOptions'>The options that define the pushpin to use for disambiguation.</field>
        disambiguationPushpinOptions: {},
        /// <field type='Boolean'>A boolean indicating whether to display the disclaimer about the accuracy of the directions. The default value is false.</field>
        displayDisclaimer: {},
        /// <field type='Boolean'>A boolean indicating whether to display the icons for each direction maneuver. The default value is true.</field>
        displayManeuverIcons: {},
        /// <field type='Boolean'>A boolean indicating whether to display direction hints that describe when an direction step was missed. The default value is true.</field>
        displayPostItineraryItemHints: {},
        /// <field type='Boolean'>A boolean indicating whether to display direction hints that describe what to look for before you come to the next direction step. The default value is true.</field>
        displayPreItineraryItemHints: {},
        /// <field type='Boolean'>A boolean indicating whether to display the route selector control. The default value is true.</field>
        displayRouteSelector: {},
        /// <field type='Boolean'>A boolean indicating whether to display direction warnings. The default value is true.</field>
        displayStepWarnings: {},
        /// <field type='Boolean'>A boolean indicating whether to display the control that allows the user to choose to avoid traffic. The default value is true.</field>
        displayTrafficAvoidanceOption: {},
        /// <field type='Boolean'>A boolean indicating whether to display a warning about walking directions. The default value is true.</field>
        displayWalkingWarning: {},
        /// <field type='AnonymousObject.PolylineOptions'>The options that define how to draw the route line on the map, if the RouteMode is driving.</field>
        drivingPolylineOptions: {},
        /// <field type='DOMElement'>The DOM element inside which the directions itinerary will be rendered.</field>
        itineraryContainer: {},
        /// <field type='String'>The URL of the icon to use for the end waypoint.</field>
        lastWaypointIcon: {},
        /// <field type='String'>The URL of the icon to use for intermediate waypoints.</field>
        middleWaypointIcon: {},
        /// <field type='AnonymousObject.PushpinOptions'>The options that define the pushpin to use for each direction step.</field>
        stepPushpinOptions: {},
        /// <field type='AnonymousObject.PolylineOptions'>The options that define how to draw the route line on the map, if the RouteMode is transit.</field>
        transitPolylineOptions: {},
        /// <field type='AnonymousObject.PushpinOptions'>The options that define the pushpin to use for each via point of the route, which are any waypoints other than the start and end waypoints.</field>
        viapointPushpinsOptions: {},
        /// <field type='AnonymousObject.PolylineOptions'>The options that define how to draw the route line on the map, if the RouteMode is walking.</field>
        walkingPolylineOptions: {},
        /// <field type='AnonymousObject.PushpinOptions'>The options that define the pushpin to use for the route waypoint.</field>
        waypointPushpinOptions: {}
    };

})(this);