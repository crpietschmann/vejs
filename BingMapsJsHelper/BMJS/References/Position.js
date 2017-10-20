(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Position = function () {
        /// <summary>
        /// Represents the position of a user on a map.
        /// </summary>
        /// <returns type="Microsoft.Maps.Position"/>
    };

    m.Position.prototype = {
        /// <field type='Microsoft.Maps.Coordinates'>The position as a W3C Coordinates object.</field>
        coords: {},
        /// <field type='String'>The time when the position was determined, in the form of a DOMTimeStamp.</field>
        timestamp: {}
    };

    m.Position.__class = true;
})(this);