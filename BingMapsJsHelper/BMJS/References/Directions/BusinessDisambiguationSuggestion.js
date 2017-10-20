(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.BusinessDisambiguationSuggestion = function () {
        /// <summary>
        /// Represents the read-only possible business result returned from geocoding a specified waypoint address or location.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.BusinessDisambiguationSuggestion"/>
    };

    m.BusinessDisambiguationSuggestion.prototype = {
        /// <field type='String'>The address of the business result.</field>
        address: {},
        /// <field type='Number'>The distance of the business result from the originally specified waypoint address or location.</field>
        distance: {},
        /// <field type='String'>The Yellow Pages ID for the business.</field>
        entityId: {},
        /// <field type='Number'>The index of this suggestion within the business suggestion array.</field>
        index: {},
        /// <field type='Boolean'>A boolean indicating whether the result location is approximate.</field>
        isApproximate: {},
        /// <field type='Location'>The location of the business suggestion.</field>
        location: {},
        /// <field type='String'>The name of the business.</field>
        name: {},
        /// <field type='String'>The phone number of the business suggestion.</field>
        phoneNumber: {},
        /// <field type='String'>The URL of a photo of the business suggestion.</field>
        photoUrl: {},
        /// <field type='Location'>The rooftop location of the business suggestion.</field>
        rooftopLocation: {},
        /// <field type='String'>The URL of the business result’s website.</field>
        website: {}
    };

    m.BusinessDisambiguationSuggestion.__class = true;

})(this);