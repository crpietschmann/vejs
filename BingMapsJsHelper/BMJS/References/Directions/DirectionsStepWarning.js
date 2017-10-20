(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.DirectionsStepWarning = function () {
        /// <summary>
        /// Represents a route direction warning, such as a traffic congestion warning.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.DirectionsStepWarning"/>
    };

    m.DirectionsStepWarning.prototype = {
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The type of the route warning.</field>
        style: {},
        /// <field type='String'>The warning text.</field>
        text: {}
    };

    m.DirectionsStepWarning.__class = true;

})(this);