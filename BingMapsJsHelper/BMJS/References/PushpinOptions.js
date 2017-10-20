(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.PushpinOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.PushpinOptions.prototype = {
        /// <field type='Microsoft.Maps.Point'>The point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon. The default anchor is the bottom center of the icon.</field>
        anchor: {},
        /// <field type='Boolean'>A boolean indicating whether the pushpin can be dragged to a new position with the mouse.</field>
        draggable: {},
        /// <field type='Number'>The height of the pushpin, which is the height of the pushpin icon. The default value is 39.</field>
        height: {},
        /// <field type='String'>The HTML that represents the pushpin.</field>
        htmlContent: {},
        /// <field type='String'>The path of the image to use as the pushpin icon.</field>
        icon: {},
        /// <field type='Microsoft.Maps.Infobox'>The info box associated with this pushpin. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.</field>
        infobox: {},
        /// <field type='Microsoft.Maps.EntityState'>The state of the pushpin, such as highlighted or selected. To get the latest pushpin state design, load the Microsoft.Maps.Themes.BingTheme module before creating the pushpin.</field>
        state: {},
        /// <field type='String'>The text associated with the pushpin.</field>
        text: {},
        /// <field type='Microsoft.Maps.Point'>The amount the text is shifted from the pushpin icon. The default value is (0,5).</field>
        textOffset: {},
        /// <field type='String'>The type of the pushpin, as a string. The pushpin DOM (document object model) node created for the pushpin will have the specified typeName. A standard pushpin type is used unless the Microsoft.Maps.Themes.BingTheme module is loaded, in which case typeName can be set to ‘micro’ to use the micro pushpin type.</field>
        typeName: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the pushpin. The default value is true. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.</field>
        visible: {},
        /// <field type='Number'>The width of the pushpin, which is the width of the pushpin icon. The default value is 25.</field>
        width: {},
        /// <field type='Number'>The z-index of the pushpin with respect to other items on the map.</field>
        zIndex: {}
    };

})(this);