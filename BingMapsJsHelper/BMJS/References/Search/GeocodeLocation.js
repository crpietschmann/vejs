(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.GeocodeLocation = function () {
        /// <summary>
        /// Represents a geocode location.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.GeocodeLocation"/>
    };

    m.GeocodeLocation.prototype = {
        /// <field type='Microsoft.Maps.Location'>The map location of this geocode location match.</field>
        location: {},
        /// <field type='String'>The name of this geocode location match.</field>
        name: {},
        /// <field type='Microsoft.Maps.Search.LocationPrecision'>The precision of this geocode location match.</field>
        precision: {}
    };

    m.GeocodeLocation.__class = true;

})(this);