(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Primitive = function () {
        /// <summary>
        /// Represents a venue map primitive, which represents a venue map entity.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Primitive"/>
    };

    m.Primitive.prototype = {
        /// <field type='Microsoft.Maps.LocationRect'>The rectangle that defines the bounding box for the primitive.</field>
        bounds: {},
        /// <field type='String'>The Yellow Pages ID for the entity.</field>
        businessId: {},
        /// <field type='String'>The Yellow Pages business category ID for the entity.</field>
        categoryId: {},
        /// <field type='String'>The Yellow Pages business category name for the entity.</field>
        categoryName: {},
        /// <field type='Microsoft.Maps.Location'>The location of the center of the primitive.</field>
        center: {},
        /// <field type='Microsoft.Maps.VenueMaps.Floor'>The floor to which this primitive belongs.</field>
        floor: {},
        /// <field type='String'>The unique ID of the entity.</field>
        id: {},
        /// <field type='Microsoft.Maps.Location[]'>An array of locations that represent the vertices of the primitive.</field>
        locations: {},
        /// <field type='String'>The name of the entity.</field>
        name: {},
        highlight: function () {
            /// <summary>
            /// Highlights the primitive.
            /// </summary>
        },
        unhighlight: function () {
            /// <summary>
            /// Removes the highlighting of the primitive.
            /// </summary>
        }
    };

    m.Primitive.__class = true;

})(this);