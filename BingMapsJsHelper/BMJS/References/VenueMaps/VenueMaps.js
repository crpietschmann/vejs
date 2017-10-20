(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    /* Enumerators */

    m.DirectoryGrouping = {
        /// <field type=''>The listings in the directory are grouped by category.</field>
        byCategory: {},
        /// <field type=''>The listings in the directory are not grouped. They are displayed in a flat list.</field>
        none: {},
        __enum: true
    };

    m.DirectorySortOrder = {
        /// <field type=''>The listings in the directory are sorted alphabetically.</field>
        alphabetical: {},
        /// <field type=''>The listings in the directory are sorted by floor.</field>
        byFloor: {},
        __enum: true
    };

})(this);