(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Metadata = function () {
        /// <summary>
        /// Contains information about a venue map.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Metadata"/>
    };

    m.Metadata.prototype = {
        /// <field type='Number'>The latitude of the center location of the venue map.</field>
        CenterLatitude: {},
        /// <field type='Number'>The longitude of the center location of the venue map.</field>
        CenterLongitude: {},
        /// <field type='String'>The ID of the default floor of the venue map.</field>
        DefaultFloor: {},
        /// <field type='String'>A string used in the floor bar of the venue map.</field>
        FloorHeader: {},
        /// <field type='Microsoft.Maps.VenueMaps.Floor[]'>An array containing the floors of the venue map.</field>
        Floors: {},
        /// <field type='Microsoft.Maps.VenueMaps.Footprint'>The footprint of the venue map.</field>
        Footprint: {},
        /// <field type='String'>The unique ID of the venue map.</field>
        MapId: {},
        /// <field type='String'>A string describing the venue map type (for example, “mall”).</field>
        MapType: {},
        /// <field type='String'>The name of the venue map.</field>
        Name: {},
        /// <field type='String'>The Yellow Pages ID of the venue.</field>
        YpId: {}
    };

    m.Metadata.__class = true;

})(this);