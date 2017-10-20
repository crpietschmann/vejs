(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.DirectionsStep = function () {
        /// <summary>
        /// Represents one direction in a set of route directions.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.DirectionsStep"/>
    };

    m.DirectionsStep.prototype = {
        /// <field type='Microsoft.Maps.Directions.DirectionsStep[]'>The child direction items for this directions step.</field>
        childItineraryItems: {},
        /// <field type='Microsoft.Maps.Location'>The location of the start of the direction.</field>
        coordinate: {},
        /// <field type='String'>The total distance of the step in the unit specified in the distanceUnit property of the DirectionsRequestOptions.</field>
        distance: {},
        /// <field type='Number'>The total time, in seconds, of the direction step.</field>
        durationInSeconds: {},
        /// <field type='String'>The HTML formatted route instruction associated with the step.</field>
        formattedText: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The type of the icon associated with this step.</field>
        iconType: {},
        /// <field type='Boolean'>A boolean indicating whether the maneuver image is a road shield image.</field>
        isImageRoadShield: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The maneuver type associated with this step.</field>
        maneuver: {},
        /// <field type='String'>The name of the maneuver image.</field>
        maneuverImageName: {},
        /// <field type='Number'>The cost of the step.</field>
        monetaryCost: {},
        /// <field type='string[]'>An array of strings, where each string is a hint to help determine when to move to the next direction step. Not all direction steps have hints.</field>
        postIntersectionHints: {},
        /// <field type='string[]'>An array of strings, where each string is a hint to help determine when you have arrived at this direction step. Not all direction steps have hints.</field>
        preIntersectionHints: {},
        /// <field type='String'>The name of the transit stop where this step originates.</field>
        startStopName: {},
        /// <field type='Microsoft.Maps.Directions.TransitLine'>The transit line associated with this step.</field>
        transitLine: {},
        /// <field type='String'>The URL of the image to use for transit direction steps.</field>
        transitStepIcon: {},
        /// <field type='String'>The ID of the transit stop.</field>
        transitStopId: {},
        /// <field type='String'>The name of the transit line end.</field>
        transitTerminus: {},
        /// <field type='Microsoft.Maps.Directions.DirectionsStepWarning[]'>An array of strings, where each string is a route warning associated with this step.</field>
        warnings: {}
    };

    m.DirectionsStep.__class = true;

})(this);