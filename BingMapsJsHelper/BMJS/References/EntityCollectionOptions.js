(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.EntityCollectionOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.EntityCollectionOptions.prototype = {
        /// <field type='Boolean'>A boolean indicating whether to set the options of all entities when an option of an entity within the collection is set. The default value is true. For example, in an entity collection composed of multiple polygons, if this property is set to true setting one polygon’s fill color to red changes the fill color of all of the other polygons in the entity collection to red. Note: This property is only available when the Microsoft.Maps.AdvancedShapes module is loaded.</field>
        bubble: {},
        /// <field type='Boolean'>A boolean indicating whether the entity collection is visible on the map.</field>
        visible: {},
        /// <field type='Number'>The z-index of the entity collection with respect to other items on the map.</field>
        zIndex: {}
    }; 

})(this);