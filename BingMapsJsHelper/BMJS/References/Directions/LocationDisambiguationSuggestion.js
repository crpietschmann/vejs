(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.LocationDisambiguationSuggestion = function () {
        /// <summary>
        /// Contains a possible result returned from geocoding a specified waypoint address or location.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.LocationDisambiguationSuggestion"/>
    };

    m.LocationDisambiguationSuggestion.prototype = {
        /// <field type='String'>The HTML formatted address suggestion.</field>
        formattedSuggestion: {},
        /// <field type='Microsoft.Maps.Location'>The location of the suggestion.</field>
        location: {},
        /// <field type='Microsoft.Maps.Location'>The rooftop location of the suggestion.</field>
        rooftopLocation: {},
        /// <field type='String'>The address suggestion.</field>
        suggestion: {}
    };

    m.LocationDisambiguationSuggestion.__class = true;

})(this);