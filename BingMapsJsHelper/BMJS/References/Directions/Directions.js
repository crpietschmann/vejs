(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    /* Enumerators */

    m.DistanceUnit = {
        /// <field type='Microsoft.Maps.Directions.DistanceUnit'>Kilometers are used to measure route distances.</field>
        kilometers: {},
        /// <field type='Microsoft.Maps.Directions.DistanceUnit'>Miles are used to measure route distances.</field>
        miles: {},
        __enum: true
    };

    m.IconType = {
        /// <field type='Microsoft.Maps.Directions.IconType'>There is no route icon.</field>
        none: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is some other type of icon.</field>
        other: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a car icon.</field>
        auto: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a ferry icon.</field>
        ferry: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a walking icon.</field>
        walk: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a bus, or transit, icon</field>
        bus: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a train icon.</field>
        train: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is an airline icon.</field>
        airline: {},
        __enum: true
    };

    m.Maneuver = {
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The step is not a maneuver.</field>
        none: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The maneuver is unknown.</field>
        unknown: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Depart from the start waypoint.</field>
        departStart: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Depart from an intermediate stop point going in a different direction and on a different road than which you arrived.</field>
        departIntermediateStop: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Depart from an intermediate stop point going back in the same direction and on the same road on which you arrived.</field>
        departIntermediateStopReturning: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Arrive at the end waypoint.</field>
        arriveFinish: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Arrive at an intermediate stop point.</field>
        arriveIntermediateStop: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left.</field>
        turnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right.</field>
        turnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn back sharply.</field>
        turnBack: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Make a u-turn to go in the opposite direction.</field>
        uTurn: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left to stay on the same road.</field>
        turnToStayLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right to stay on the same road.</field>
        turnToStayRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left.</field>
        bearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right.</field>
        bearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep left to stay on the same road.</field>
        keepToStayLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep right to stay on the same road.</field>
        keepToStayRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep straight to stay on the same road.</field>
        keepToStayStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep left onto a different road.</field>
        keepLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep right onto a different road.</field>
        keepRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep straight onto a different road.</field>
        keepStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take the road. This instruction is used when you are entering or exiting a ferry.</field>
        take: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take the ramp to the left.</field>
        takeRampLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take the ramp to the right.</field>
        takeRampRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Stay straight to take the ramp.</field>
        takeRampStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep left and continue onto ramp.</field>
        keepOnRampLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep right and continue onto ramp.</field>
        keepOnRampRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep straight and continue onto ramp.</field>
        keepOnRampStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Merge onto highway.</field>
        merge: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Continue on the current road.</field>
        continueRoute: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The road name changed.</field>
        roadNameChange: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Enter a roundabout.</field>
        enterRoundabout: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Exit a roundabout.</field>
        exitRoundabout: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right and then turn right.</field>
        turnRightThenTurnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right and then turn left.</field>
        turnRightThenTurnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right and then bear right.</field>
        turnRightThenBearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right and then bear left.</field>
        turnRightThenBearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left and then turn left.</field>
        turnLeftThenTurnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left and then turn right.</field>
        turnLeftThenTurnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left and then bear left.</field>
        turnLeftThenBearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left and then bear right.</field>
        turnLeftThenBearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right and then turn right.</field>
        bearRightThenTurnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right and then turn left.</field>
        bearRightThenTurnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right and then bear right.</field>
        bearRightThenBearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right and then bear left.</field>
        bearRightThenBearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left and then turn left.</field>
        bearLeftThenTurnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left and then turn right.</field>
        bearLeftThenTurnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left and then bear right.</field>
        bearLeftThenBearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left and then bear left.</field>
        bearLeftThenBearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take left ramp onto highway. This is part of a combined instruction.</field>
        rampThenHighwayRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take right ramp onto highway. This is part of a combined instruction.</field>
        rampThenHighwayLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Stay straight to take the ramp onto the highway. This is part of a combined instruction.</field>
        rampToHighwayStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Enter and exit a roundabout.</field>
        enterThenExitRoundabout: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear instruction and then a merge instruction.</field>
        bearThenMerge: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn instruction and then a merge instruction.</field>
        turnThenMerge: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear instruction and then a keep instruction.</field>
        bearThenKeep: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Transfer between public transit lines at a transit stop.</field>
        transfer: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Wait at a transit stop.</field>
        wait: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take transit.</field>
        takeTransit: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The maneuver is a walking instruction.</field>
        walk: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Get on a public transit line at a transit stop.</field>
        transitDepart: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Get off a public transit line at a transit stop.</field>
        transitArrive: {},
        __enum: true
    };

    m.RouteAvoidance = {
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Calculate the best route using any travel option available.</field>
        none: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Reduce the use of limited access highways when calculating the route.</field>
        minimizeLimitedAccessHighway: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Reduce the use of roads with tolls when calculating the route.</field>
        minimizeToll: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using limited access highways when calculating the route.</field>
        avoidLimitedAccessHighway: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using roads with tolls when calculating the route.</field>
        avoidToll: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using express trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        avoidExpressTrain: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using airlines when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        avoidAirline: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using bullet trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        avoidBulletTrain: {},
        __enum: true
    };

    m.RouteMode = {
        /// <field type='Microsoft.Maps.Directions.RouteMode'>Driving directions are calculated.</field>
        driving: {},
        /// <field type='Microsoft.Maps.Directions.RouteMode'>Transit directions are calculated.</field>
        transit: {},
        /// <field type='Microsoft.Maps.Directions.RouteMode'>Walking directions are calculated.</field>
        walking: {},
        __enum: true
    };

    m.RouteOptimization = {
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Calculate a route the shortest time.</field>
        shortestTime: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Calculate a route with the shortest distance.</field>
        shortestDistance: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Minimize the cost when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        minimizeMoney: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Minimize transit transfers when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        minimizeTransfers: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Minimize the amount of walking when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        minimizeWalking: {},
        __enum: true
    };

    m.RouteResponseCode = {
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The route was successfully calculated.</field>
        success: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>An unknown error has occurred.</field>
        unknownError: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>A nearby road cannot be found for one or more of the route waypoints.</field>
        cannotFindNearbyRoad: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The distance between two route waypoints, or the total length of the route exceeds the limit of the route mode. Modify the waypoint locations so that they are closer together.</field>
        tooFar: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>A route cannot be calculated for the specified waypoints. For example, this code is returned when a route between “Seattle, WA” and “Honolulu, HI” is requested.</field>
        noSolution: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>There is no route data for the specified waypoints.</field>
        dataSourceNotFound: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>There are no transit options available for the specified time.</field>
        noAvailableTransitTrip: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The transit stops are so close that walking is always a better option.</field>
        transitStopsTooClose: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The transit stops are so close that walking is a better option.</field>
        walkingBestAlternative: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>There is no transit data available for the route or for one or more of the specified waypoints, or the waypoints are in different transit areas that do not overlap.</field>
        outOfTransitBounds: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The directions calculation request has timed out.</field>
        timeout: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>One or more waypoints need to be disambiguated. This error does not occur if the autoDisplayDisambiguation directions render option is set to true.</field>
        waypointDisambiguation: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>One or more waypoints do not have an address or location specified.</field>
        hasEmptyWaypoint: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The maximum number of waypoints, which is 25, has been exceeded.</field>
        exceedMaxWaypointLimit: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>At least two waypoints are required to calculate a route.</field>
        atleastTwoWaypointRequired: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The first or last waypoint is a via point, which is not allowed.</field>
        firstOrLastStoppointIsVia: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The search service failed to return results.</field>
        searchServiceFailed: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The credentials passed to the Directions module are invalid.</field>
        invalidCredentials: {},
        __enum: true
    };

    m.StepWarningStyle = {
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning is just information about the route direction.</field>
        info: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning is a minor warning, and may affect the route direction.</field>
        minor: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning is a moderate warning and is likely to affect the route direction.</field>
        moderate: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning is a major warning, and is highly likely to affect the route direction.</field>
        major: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning indicates a congestion zone is being entered.</field>
        ccZoneEnter: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning indicates a congestion zone is being exited.</field>
        ccZoneExit: {},
        __enum: true
    };

    m.TimeType = {
        /// <field type='Microsoft.Maps.Directions.TimeType'>The time specified is an arrival time.</field>
        arrival:{},
        /// <field type='Microsoft.Maps.Directions.TimeType'>The time specified is a departure time.</field>
        departure:{},
        /// <field type='Microsoft.Maps.Directions.TimeType'>The time specified is the last available time. This time type is only returned for routes with a transitRouteMode that have the culture set to ja-jp.</field>
        lastAvailable: {},
        __enum: true
    };

})(this);