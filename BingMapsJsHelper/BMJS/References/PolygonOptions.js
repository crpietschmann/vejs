(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.PolygonOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.PolygonOptions.prototype = {
        /// <field type='Microsoft.Maps.Color'>The color of the inside of the polygon.</field>
        fillColor: {},
        /// <field type='Microsoft.Maps.Infobox'>The info box associated with this polygon. If an info box is assigned and the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the polygon occur.</field>
        infobox: {},
        /// <field type='Microsoft.Maps.Color'>The color of the outline of the polygon.</field>
        strokeColor: {},
        /// <field type='String'>A string representing the stroke/gap sequence to use to draw the outline of the polygon. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polygon outline with a dash, four spaces, two dashes, one space, and then repeated.</field>
        strokeDashArray: {},
        /// <field type='Number'>The thickness of the outline of the polygon.</field>
        strokeThickness: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the polygon. A value of false indicates that the polygon is hidden, although it is still an entity on the map.</field>
        visible: {}
    };

})(this);