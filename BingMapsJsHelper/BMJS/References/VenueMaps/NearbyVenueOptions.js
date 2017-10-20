(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.NearbyVenueOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.NearbyVenueOptions.prototype = {
        /// <field type='function'>The function to call when the search is completed. The function must accept an Microsoft.Maps.VenueMaps.NearbyVenue[].</field>
        callback: function (venues, options) {
            /// <summary>
            /// The function to call when the search is completed.
            /// </summary>
            /// <param name="venues" type="Microsoft.Maps.VenueMaps.NearbyVenue[]"/>
            /// <param name="options" type="AnonymousObject.NearbyVenueOptions">Options used to request nearby venue maps.</param>
        },
        /// <field type='Microsoft.Maps.Location'>The center of the circle in which to search for nearby venue maps.</field>
        location: {},
        /// <field type='Microsoft.Maps.Map'>The base map.</field>
        map: {},
        /// <field type='Number'>The radius, in meters, of the circle in which to search for nearby venue maps.</field>
        radius: {}
    };

})(this);