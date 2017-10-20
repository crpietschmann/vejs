(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Coordinate = function () {
        /// <summary>
        /// Represents the coordinates of the position of the user from the GeoLocationProvider.
        /// </summary>
    };

    m.Coordinates.prototype = {
        /// <field type='Number'>The accuracy, in meters, of the latitude and longitude values.</field>
        accuracy: {},
        /// <field type='Number'>The altitude of the location.</field>
        altitude: {},
        /// <field type='Number'>The accuracy, in meters, of the altitude value.</field>
        altitudeAccuracy: {},
        /// <field type='Number'>The direction of travel of the hosting device.</field>
        heading: {},
        /// <field type='Number'>The latitude of the location.</field>
        latitude: {},
        /// <field type='Number'>The longitude of the location.</field>
        longitude: {},
        /// <field type='Number'>The ground speed of the hosting device, in meters per second.</field>
        speed: {}
    };

    m.Coordinate.__class = true;

})(this);