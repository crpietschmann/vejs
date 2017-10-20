(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.EntityCollection = function (options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the EntityCollection class.
        /// Contains a collection of entities. An Entity can be any one of the following types: Polygon, Polyline, Pushpin, TileLayer, or EntityCollection.
        /// <para>Support Events: entityadded, entitychanged, entityremoved</para>
        /// </summary>
        /// </signature>
        
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the EntityCollection class.
        /// Contains a collection of entities. An Entity can be any one of the following types: Polygon, Polyline, Pushpin, TileLayer, or EntityCollection.
        /// <para>Support Events: entityadded, entitychanged, entityremoved</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>bubble (Boolean): A boolean indicating whether to set the options of all entities when an option of an entity within the collection is set. The default value is true. For example, in an entity collection composed of multiple polygons, if this property is set to true setting one polygon’s fill color to red changes the fill color of all of the other polygons in the entity collection to red. Note: This property is only available when the Microsoft.Maps.AdvancedShapes module is loaded.</para>
        /// <para>visible (Boolean): A boolean indicating whether the entity collection is visible on the map.</para>
        /// <para>zIndex (number): The z-index of the entity collection with respect to other items on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the EntityCollection class.
        /// Contains a collection of entities. An Entity can be any one of the following types: Polygon, Polyline, Pushpin, TileLayer, or EntityCollection.
        /// <para>Support Events: entityadded, entitychanged, entityremoved</para>
        /// </summary>
        /// <param name="options" type="AnonymousObject.EntityCollectionOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.EntityCollection"/>
    };

    m.EntityCollection.prototype = {
        clear: function () {
            /// <summary>
            /// Removes all entities from the collection.
            /// </summary>
        },
        get: function (index) {
            /// <summary>
            /// Removes all entities from the collection.
            /// </summary>
            /// <param name="index" type='Number'>Index of entity.</param>
            /// <returns type="Microsoft.Maps.Entity"></returns>
        },
        getLength: function () {
            /// <summary>
            /// Returns the number of entities in the collection.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the entity collection is visible on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Gets the z-index of the entity collection with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        indexOf: function (entity) {
            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Pushpin"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polyline"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polygon"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Infobox"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.TileLayer"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.EntityCollection"></param>
            /// </signature>

            /// <returns type='Number'></returns>
        },
        insert: function (entity, index) {
            /// <summary>
            /// Inserts the specified entity into the collection at the given index.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Entity"></param>
            /// <param name="index" type='Number'>Index used for insertion</param>
        },
        pop: function () {
            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Pushpin"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polyline"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polygon"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Infobox"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.TileLayer"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.EntityCollection"></param>
            /// </signature>

            /// <returns type="Microsoft.Maps.Entity"></returns>
        },
        push: function (entity) {
            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Pushpin"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polyline"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polygon"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Infobox"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.TileLayer"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.EntityCollection"></param>
            /// </signature>
        },
        remove: function (entity) {
            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Pushpin"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polyline"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polygon"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Infobox"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.TileLayer"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.EntityCollection"></param>
            /// </signature>

            /// <returns type="Microsoft.Maps.Entity">Removed entity.</returns>
        },
        removeAt: function (index) {
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="index" type='Number'>Index of entity to remove.</param>
            /// <returns type="Microsoft.Maps.Entity">Removed entity.</returns>
        },
        setOptions: function (options) {           
            /// <signature>
            /// <summary>
            /// Sets the options for the entity collection.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>bubble (Boolean): A boolean indicating whether to set the options of all entities when an option of an entity within the collection is set. The default value is true. For example, in an entity collection composed of multiple polygons, if this property is set to true setting one polygon’s fill color to red changes the fill color of all of the other polygons in the entity collection to red. Note: This property is only available when the Microsoft.Maps.AdvancedShapes module is loaded.</para>
            /// <para>visible (Boolean): A boolean indicating whether the entity collection is visible on the map.</para>
            /// <para>zIndex (number): The z-index of the entity collection with respect to other items on the map.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the options for the entity collection.
            /// </summary>
            /// <param name="options" type="AnonymousObject.EntityCollectionOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the EntityCollection object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.EntityCollection.__class = true;

})(this);