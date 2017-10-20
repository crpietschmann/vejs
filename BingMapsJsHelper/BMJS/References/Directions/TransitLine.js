(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.TransitLine = function () {
        /// <summary>
        /// Contains information about a transit line.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.TransitLine"/>
    };

    m.TransitLine.prototype = {
        /// <field type='String'>The short name for the transit line.</field>
        abbreviatedName: {},
        /// <field type='Number'>The ID of the agency that owns the transit line.</field>
        agencyId: {},
        /// <field type='String'>The name of the agency that owns the transit line.</field>
        agencyName: {},
        /// <field type='String'>The URL of the website of the agency that owns the transit line.</field>
        agencyUrl: {},
        /// <field type='Microsoft.Maps.Color'>The color to use when rendering this transit line on the map.</field>
        lineColor: {},
        /// <field type='Microsoft.Maps.Color'>The color to use when rendering text associated with this transit line.</field>
        lineTextColor: {},
        /// <field type='String'>Information about the provider of this transit line data.</field>
        providerInfo: {},
        /// <field type='String'>The full name of this transit line.</field>
        verboseName: {}
    };

    m.TransitLine.__class = true;

})(this);