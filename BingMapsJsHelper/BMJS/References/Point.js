(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Point = function (x, y) {
        /// <summary>
        /// Initializes a new instance of the Point class.
        /// </summary>
        /// <param name="x" type='Number'>The x value of the coordinate.</param>
        /// <param name="y" type='Number'>The y-value of the coordinate.</param>       
        /// <returns type="Microsoft.Maps.Point"/>
    };

    m.Point.prototype = {
        /// <field name="x" type='Number'>The x value of the coordinate.</field>
        x: {},
        /// <field name="y" type='Number'>The y-value of the coordinate.</field>
        y: {},

        areEqual: function () {
            /// <summary>
            /// Determines if the specified points are equal.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        clone: function () {
            /// <summary>
            /// Returns a copy of the Point object.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
    };

    /* Static Methods */

    m.Point.clone = function () {
        /// <summary>
        /// Returns a copy of the Point object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Point"></returns>
    };

    m.Point.toString = function () {
        /// <summary>
        /// Converts the Point object into a string.
        /// </summary>
        /// <returns type='String'></returns>
    };

    m.Point.__class = true;

})(this);