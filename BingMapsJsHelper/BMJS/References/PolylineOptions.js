(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.PolylineOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.PolylineOptions.prototype = {
        /// <field type='Microsoft.Maps.Color'>The color of the polyline.</field>
        strokeColor: {},
        /// <field type='String'>A string representing the stroke/gap sequence to use to draw the polyline. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polyline with a dash, four spaces, two dashes, one space, and then repeated.</field>
        strokeDashArray: {},
        /// <field type='Number'>The thickness of the polyline.</field>
        strokeThickness: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the polyline. A value of false indicates that the polyline is hidden, although it is still an entity on the map.</field>
        visible: {}
    };

})(this);