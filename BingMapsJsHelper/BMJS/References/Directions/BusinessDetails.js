(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.BusinessDetail = function () {
        /// <summary>
        /// Represents the read-only business details for a waypoint.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.BusinessDetail"/>
    };

    m.BusinessDetail.prototype = {
        /// <field type='String'>The business name of the waypoint.</field>
        businessName: {},
        /// <field type='String'>The Bing Maps entity ID of the business.</field>
        entityId: {},
        /// <field type='String'>The phone number of the business.</field>
        phoneNumber: {},
        /// <field type='String'>The URL of the business’ website.</field>
        website: {}
    };

    m.BusinessDetail.__class = true;

})(this);