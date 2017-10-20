(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.VenueMap = function () {
        /// <summary>
        /// Represents a venue map. An example of a venue map is a mall.
        /// <para>Supported Events: click, close, footprintclick, mouseout, nouseover</para>
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.VenueMap"/>
    };

    m.VenueMap.prototype = {
        /// <field type='String'>The full address of the venue.</field>
        address: {},
        /// <field type='AnonymousObject.ViewOptions'>The best map view of the venue map.</field>
        bestMapView: {},
        /// <field type='String'>The Yellow Pages ID for the venue map.</field>
        businessId: {},
        /// <field type='Microsoft.Maps.Location'>The location of the center of the venue map.</field>
        center: {},
        /// <field type='String'>The floor that is displayed if no floor is specified.</field>
        defaultFloor: {},
        /// <field type='Microsoft.Maps.VenueMaps.Directory'>The venue map directory, which is a list of businesses and features found within the venue</field>
        directory: {},
        /// <field type='String'>The header for floors for this venue map. For example, for a mall the floor header would be “Level”.</field>
        floorHeader: {},
        /// <field type='Microsoft.Maps.VenueMaps.Floor[]'>An array, where each element represents a floor of the venue.</field>
        floors: {},
        /// <field type='Microsoft.Maps.VenueMaps.Footprint'>The shapes that make up the venue map.</field>
        footprint: {},
        /// <field type='String'>The unique venue map ID.</field>
        id: {},
        /// <field type='String'>The name of the venue represented by the venue map.</field>
        name: {},
        /// <field type='String'>The phone number for the venue represented by the venue map.</field>
        phoneNumber: {},
        /// <field type='String'>The venue map type, such as “Mall”.</field>
        type: {},
        dispose: function () {
            /// <summary>
            /// Disposes the venue map object.
            /// </summary>
        },
        getActiveFloor: function () {
            /// <summary>
            /// Returns the venue floor map that is currently displayed.
            /// </summary>
            /// <returns type='String'></returns>
        },
        hide: function () {
            /// <summary>
            /// Hides the venue map.
            /// </summary>
        },
        setActiveFloor: function (floor) {
            /// <summary>
            /// Displays the floor map for the specified floor.
            /// </summary>
            /// <param name="floor" type='String'></param>
        },
        show: function () {
            /// <summary>
            /// Displays the venue map.
            /// </summary>
        }
    };

    m.VenueMap.__class = true;

})(this);