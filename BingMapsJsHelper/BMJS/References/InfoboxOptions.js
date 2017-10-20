(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.InfoboxOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.InfoboxOptions.prototype = {
        /// <field type='Object'>A list of the info box actions, where each item is a label (the link text) or icon (the URL of the image to use as the icon link) and eventHandler (name of the function handling a click of the action link).</field>
        actions: {},
        /// <field type='String'>The string displayed inside the info box.</field>
        description: {},
        /// <field type='Number'>The height of the info box. The default value is 126.</field>
        height: {},
        /// <field type='String'>The HTML that represents the info box. Note that info box options are ignored if custom HTML is set. Also, if custom HTML is used to represent the info box, the info box is anchored at the top-left corner.</field>
        htmlContent: {},
        /// <field type='String'>The ID associated with the info box.</field>
        id: {},
        /// <field type='Location '>The location on the map where the info box’s anchor is attached.</field>
        location: {},
        /// <field type='Point '>The amount the info box pointer is shifted from the location of the info box, or if showPointer is false, then it is the amount the info box bottom left edge is shifted from the location of the info box. If custom HTML is set, it is the amount the top-left corner of the info box is shifted from its location. The default offset value is (0,0), which means there is no offset.</field>
        offset: {},
        /// <field type='Boolean'>A boolean indicating whether to show the close dialog button on the info box. The default value is true. By default the close button is displayed as an X in the top right corner of the info box. This property is ignored if custom HTML is used to represent the info box.</field>
        showCloseButton: {},
        /// <field type='Boolean'>A boolean indicating whether to display the info box with a pointer. The default value is true. In this case the info box is anchored at the bottom point of the pointer. If this property is set to false, the info box is anchored at the bottom left corner. This property is ignored if custom HTML is used to represent the info box.</field>
        showPointer: {},
        /// <field type='Pushpin '>The pushpin associated with this info box. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.</field>
        pushpin: {},
        /// <field type='String'>The title of the info box.</field>
        title: {},
        /// <field type='Object'>An action to take when the link to the right of an info box title is clicked. The specified object contains a label (the link text) and an eventHandler (the name of the function handling a click of the link).</field>
        titleAction: {},
        /// <field type='function'>The name of the function to call when the title of the info box is clicked. If this property is set, the title of the info box is displayed as a link.</field>
        titleClickHandler: function (event) {
            /// <summary>
            /// The name of the function to call when the title of the info box is clicked. If this property is set, the title of the info box is displayed as a link.
            /// </summary>
            /// <param name="event" type="AnonymousObject.MouseEventArgs"/>
        },
        /// <field type='InfoboxType '>The style of the info box. The default value is standard.</field>
        typeName: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the info box. The default value is true. A value of false indicates that the info box is hidden, although it is still an entity on the map.</field>
        visible: {},
        /// <field type='Number'>The width of the info box. The default value is 256.</field>
        width: {},
        /// <field type='Number'>The z-index of the info box with respect to other items on the map.</field>
        zIndex: {}
    };

})(this);