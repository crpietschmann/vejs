(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.Disambiguation = function () {
        /// <summary>
        /// Contains disambiguation results for a waypoint geocoding request.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.Disambiguation"/>
    };

    m.Disambiguation.prototype = {
        /// <field type='Microsoft.Maps.Directions.BusinessDiambiguationSuggestion[]'>The possible business result matches for the originally specified waypoint address or location.</field>
        businessSuggestions: {},
        /// <field type='Boolean'>A boolean indicating whether there are more result suggestions available.</field>
        hasMoreSuggestions: {},
        /// <field type='String'>The disambiguation header text.</field>
        headerText: {},
        /// <field type='Microsoft.Maps.Directions.LocationDiambiguationSuggestion[]'>The possible location result matches for the originally specified waypoint address or location.</field>
        locationSuggestions: {}
    };

    m.Disambiguation.__class = true;

})(this);