(function (window) {
    // where multiple possible types are specified the most structured type is documented. all options are documented in the summary.
    // e.g.  DirectionsWaypoint.location can be LatLng|string, the type documented is LatLng
    // enum fields do not provide code completion e.g. DirectionsRequest.travelMode. does not provide code completion
    // Reference Table of Contents

    function extend(a, b) {
        // a type of inheritance strategy
        for (var name in b) {
            if (b.hasOwnProperty(name)) {
                a[name] = b[name];
            }
        }
    }

    window.Microsoft = {
        Maps: {
            Color: function (a, r, g, b) {
                /// <summary>
                /// Initializes a new instance of the Color class. The a parameter represents opacity. The range of valid values for all parameters is 0 to 255.
                /// </summary>

                /// <param name="a" type='Number'>The opacity of the color. The range of valid values is 0 to 255.</param>
                /// <param name="r" type='Number'>The red value of the color. The range of valid values is 0 to 255.</param>
                /// <param name="g" type='Number'>The green value of the color. The range of valid values is 0 to 255.</param>
                /// <param name="b" type='Number'>The blue value of the color. The range of valid values is 0 to 255.</param>

                /// <returns type="Microsoft.Maps.Color"/>
            },
            EntityCollection: function (options) {
                /// <summary>
                /// Initializes a new instance of the EntityCollection class.
                /// Contains a collection of entities. An Entity can be any one of the following types: Polygon, Polyline, Pushpin, TileLayer, or EntityCollection.
                /// </summary>

                /// <param name="options" type="Microsoft.Maps.EntityCollectionOptions"></param>

                /// <returns type="Microsoft.Maps.EntityCollection"/>
            },
            Infobox: function (location, options) {
                /// <summary>
                /// Initializes a new instance of the Infobox class.
                /// </summary>

                /// <param name="location" type="Microsoft.Maps.Location"></param>
                /// <param name="options" type="Microsoft.Maps.InfoboxOptions"></param>
                
                /// <returns type="Microsoft.Maps.Infobox"/>
            },
            Location: function (latitude, longitude, altitude, altitudeMode) {
                /// <summary>
                /// Initializes a new instance of the Location class. The altitude and altitudeMode parameters default to undefined.
                /// </summary>

                /// <param name="latitude" type='Number'></param>
                /// <param name="longitude" type='Number'></param>
                /// <param name="altitude" type='Number'></param>
                /// <param name="altitudeMode" type="Microsoft.Maps.AltitudeReference"></param>

                /// <field name="altitude" type='Number'>The altitude of the location.</field>
                /// <field name="altitudeMode" type="Microsoft.Maps.AltitudeReference">The reference from which the altitude is measured.</field>
                /// <field name="latitude" type='Number'>The latitude of the location.</field>
                /// <field name="longitude" type='Number'>The longitude of the location.</field>

                /// <field name="areEqual" type="Function">Determines if the specified Location objects are equal.</field>
                /// <field name="normalizeLongitude" type="Function">Normalizes the specified longitude so that it is between -180 and 180.</field>

                /// <returns type="Microsoft.Maps.Location"/>
            },
            LocationRect: function (center, width, height) {
                /// <summary>
                /// Initializes a new instance of the LocationRect class.
                /// </summary>

                /// <param name="center" type="Microsoft.Maps.Location"></param>
                /// <param name="width" type='Number'></param>
                /// <param name="height" type='Number'></param>

                /// <field name="center" type='Number'>The location that defines the center of the rectangle.</field>
                /// <field name="height" type='Number'>The height, in degrees, of the rectangle.</field>
                /// <field name="width" type='Number'>The width, in degrees, of the rectangle.</field>

                /// <field name="areEqual" type="Function">Determines if the specified Location objects are equal.</field>
                /// <field name="normalizeLongitude" type="Function">Normalizes the specified longitude so that it is between -180 and 180.</field>

                /// <returns type="Microsoft.Maps.Location"/>
            },
            Map: function (containerElement, options) {
                /// <summary>
                /// Represents a map.
                /// Initializes a new instance of the Map class.
                /// </summary>

                /// <param name="containerElement" domElement="true"></param>
                /// <param name="opts" type="MapOptions?"></param>

                /// <field name="entities" type="Microsoft.Maps.EntityCollection">The map’s entities. Use this property to add or remove entities from the map.</field>
                /// <field name="blur" type="Function">Removes focus from the map control so that it does not respond to keyboard events.</field>
                /// <field name="dispose" type="Function">Deletes the Map object and releases any associated resources.</field>
                /// <field name="focus" type="Function">Applies focus to the map control so that it responds to keyboard events.</field>
                /// <field name="getBounds" type="Function">Returns the location rectangle that defines the boundaries of the current map view.</field>
                /// <field name="getCenter" type="Function">Returns the location of the center of the current map view.</field>
                /// <field name="getCopyrights" type="Function">Gets the array of strings representing the attributions of the imagery currently displayed on the map.</field>
                /// <field name="getCredentials" type="Function">map.getCredentials(function(credentials) { if(credentials !== null) { /* Valid session Id. Use it to call REST service */ }});</field>
                /// <field name="getHeading" type="Function">Returns the heading of the current map view.</field>
                /// <field name="getHeight" type="Function">Returns the height of the map control.</field>
                /// <field name="getImageryId" type="Function">Returns the string that represents the imagery currently displayed on the map.</field>
                /// <field name="getMapTypeId" type="Function">Returns a string that represents the current map type displayed on the map. Valid map types are listed in the MapTypeId Enumeration topic.</field>
                /// <field name="getMetersPerPixel" type="Function">Returns the current scale in meters per pixel of the center of the map.</field>
                /// <field name="getModeLayer" type="Function">Returns the map’s mode node.</field>
                /// <field name="getOptions" type="Function">Returns the map option settings.</field>
                /// <field name="getPageX" type="Function">Returns the x coordinate of the top left corner of the map control, relative to the page.</field>
                /// <field name="getPageY" type="Function">Returns the y coordinate of the top left corner of the map control, relative to the page.</field>
                /// <field name="getRootElement" type="Function">Returns the map’s root node.</field>
                /// <field name="getTargetBounds" type="Function">Returns the location rectangle that defines the boundaries of the view to which the map is navigating.</field>

                /// <returns type="Microsoft.Maps.Map"/>
            },
            Point: function (x, y) {
                /// <summary>
                /// Initializes a new instance of the Point class.
                /// </summary>

                /// <param name="x" type='Number'>The x value of the coordinate.</param>
                /// <param name="y" type='Number'>The y-value of the coordinate.</param>

                /// <field name="x" type='Number'>The x value of the coordinate.</field>
                /// <field name="y" type='Number'>The y-value of the coordinate.</field>

                /// <field name="areEqual" type="Function">Determines if the specified points are equal.</field>
                /// <field name="clone" type="Function">Returns a copy of the Point object.</field>

                /// <returns type="Microsoft.Maps.Point"/>
            },
            Polygon: function (locations, options) {
                /// <summary>
                /// Initializes a new instance of the Polygon class.
                /// </summary>

                /// <param name="locations" type='Number'></param>
                /// <param name="options" type="Microsoft.Maps.PolygonOptions"></param>

                /// <returns type="Microsoft.Maps.Polygon"/>
            },
            Polyline: function (locations, options) {
                /// <summary>
                /// Initializes a new instance of the Polyline class.
                /// </summary>

                /// <param name="locations" type='Number'></param>
                /// <param name="options" type="Microsoft.Maps.PolylineOptions"></param>

                /// <returns type="Microsoft.Maps.Polyline"/>
            },
            Pushpin: function (location, options) {
                /// <summary>
                /// Initializes a new instance of the Pushpin class.
                /// </summary>

                /// <param name="location" type="Microsoft.Maps.Location"></param>
                /// <param name="options" type="Microsoft.Maps.PushpinOptions"></param>

                /// <field name="getAnchor" type="Function">Returns the point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon.</field>
                /// <field name="getIcon" type="Function">Returns the pushpin icon.</field>
                /// <field name="getHeight" type="Function">Returns the height of the pushpin, which is the height of the pushpin icon.</field>
                /// <field name="getLocation" type="Function">Returns the location of the pushpin.</field>
                /// <field name="getText" type="Function">Returns the text associated with the pushpin.</field>
                /// <field name="getTextOffset" type="Function">Returns the amount the text is shifted from the pushpin icon.</field>
                /// <field name="getTypeName" type="Function">Returns the type of the pushpin.</field>
                /// <field name="getVisible" type="Function">Returns whether the pushpin is visible. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.</field>
                /// <field name="getWidth" type="Function">Returns the width of the pushpin, which is the width of the pushpin icon.</field>
                /// <field name="getZIndex" type="Function">Returns the z-index of the pushpin with respect to other items on the map.</field>
                /// <field name="setLocation" type="Function">Sets the location of the pushpin.</field>
                /// <field name="setOptions" type="Function">Sets options for the pushpin.</field>
                /// <field name="toString" type="Function">Converts the Pushpin object to a string.</field>

                /// <returns type="Microsoft.Maps.Pushpin"/>
            },
            TileLayer: function (options) {
                /// <summary>
                /// Initializes a new instance of the TileLayer class.
                /// </summary>

                /// <param name="options" type="Microsoft.Maps.TileLayerOptions"></param>

                /// <returns type="Microsoft.Maps.TileLayer"/>
            },
            TileSource: function (options) {
                /// <summary>
                /// Initializes a new instance of the TileSource class.
                /// </summary>

                /// <param name="options" type="Microsoft.Maps.TileSourceOptions"></param>

                /// <returns type="Microsoft.Maps.TileSource"/>
            },
            __namespace: true
        },
        __namespace: true
    };

    var m = Microsoft.Maps;

    m.Color.prototype = {
        clone: function () {
            /// <summary>
            /// Returns a copy of the Color object.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        fromHex: function (hex) {
            /// <summary>
            /// Returns the pushpin icon.
            /// </summary>
            /// <param name="hex" type='String'></param>
            /// <returns type="Microsoft.Maps.Color"></returns>
        }
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
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
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
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <returns type="Microsoft.Maps.Entity"></returns>
        },
        push: function (entity) {
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
        },
        remove: function (entity) {
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Entity">Entity to remove.</param>
            /// <returns type="Microsoft.Maps.Entity">Removed entity.</returns>
        },
        removeAt: function (index) {
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="index" type='Number'>Entity to remove.</param>
            /// <returns type="Microsoft.Maps.Entity">Removed entity.</returns>
        },
        setOptions: function (options) {
            /// <summary>
            /// Sets the options for the entity collection.
            /// </summary>
            /// <param name="options" type="Microsoft.Maps.EntityCollectionOptions"></param>
        },
        toString: function () {
            /// <summary>
            /// Converts the EntityCollection object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.Infobox.prototype = {
        getActions: function () {
            /// <summary>
            /// Returns a list of actions, where each item is a name-value pair indicating an action link name and the event name for the action that corresponds to that action link.
            /// </summary>
            /// <returns type="Object"></returns>
        },
        getAnchor: function () {
            /// <summary>
            /// Returns the point on the infobox which is anchored to the map. An anchor of (0,0) is the top left corner of the infobox.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        getDescription: function () {
            /// <summary>
            /// Returns the string that is printed inside the infobox.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getHeight: function () {
            /// <summary>
            /// Returns the height of the infobox.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getHtmlContent: function () {
            /// <summary>
            /// Returns the infobox as HTML.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getId: function () {
            /// <summary>
            /// Returns the ID of the infobox.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getLocation: function () {
            /// <summary>
            /// Returns the location on the map where the infobox’s anchor is attached.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getOffset: function () {
            /// <summary>
            /// Returns the amount the infobox pointer is shifted from the location of the infobox, or if showPointer is false, then it is the amount the infobox bottom left edge is shifted from the location of the infobox. The default value is (0,0), which means there is no offset.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getOptions: function () {
            /// <summary>
            /// Returns the infobox options.
            /// </summary>
            /// <returns type="Microsoft.Maps.InfoboxOptions"></returns>
        },
        getShowCloseButton: function () {
            /// <summary>
            /// Returns a boolean indicating whether the infobox close button is shown.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getShowPointer: function () {
            /// <summary>
            /// Returns a boolean indicating whether the infobox is drawn with a pointer.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getTitle: function () {
            /// <summary>
            /// Returns a string that is the title of the infobox.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getTitleClickHandler: function () {
            /// <summary>
            /// Returns the name of the function to call when the title of the infobox is clicked.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the infobox is visible. A value of false indicates that the infobox is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the width of the infobox.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Returns the z-index of the infobox with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        setHtmlContent: function (content) {
            /// <summary>
            /// Sets the HTML content of the infobox. You can use this method to change the look of the infobox.
            /// </summary>
            /// <param name="content" type='String'>Entity to remove.</param>
        },
        setLocation: function (location) {
            /// <summary>
            /// Sets the location on the map where the anchor of the infobox is attached.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
        },
        setOptions: function (options) {
            /// <summary>
            /// Sets options for the infobox.
            /// </summary>
            /// <param name="options" type="Microsoft.Maps.InfoxboxOptions"></param>
        },
        toString: function () {
            /// <summary>
            /// Converts the Infobox object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.Location.prototype = {
        clone: function () {
            /// <summary>
            /// Returns a copy of the Location object.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the Location object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.LocationRect.prototype = {
        fromCorners: function (northwest, southeast) {
            /// <summary>
            /// Returns a LocationRect using the specified locations for the northwest and southeast corners.
            /// </summary>
            /// <param name="northwest" type="Microsoft.Maps.Location"></param>
            /// <param name="southeast" type="Microsoft.Maps.Location"></param>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        fromEdges: function (north, west, south, east, altitude, altitudeReference) {
            /// <summary>
            /// Returns a LocationRect using the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries.
            /// </summary>
            /// <param name="north" type='Number'></param>
            /// <param name="west" type='Number'></param>
            /// <param name="south" type='Number'></param>
            /// <param name="east" type='Number'></param>
            /// <param name="altitude" type='Number'></param>
            /// <param name="altitudeReference" type="Microsoft.Maps.AltitudeReference"></param>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        fromLocations: function (locations) {
            /// <summary>
            /// Returns a LocationRect using a list of locations or an array of locations.
            /// To provide a list of locations:  Microsoft.Maps.LocationRect.fromLocations(location1, location2, location3);
            /// To provide an array of locations:  
            ///     var locations = [location1, location2, location3]; 
            ///     Microsoft.Maps.LocationRect.fromLocations(locations);
            /// </summary>
            /// <param name="locations" type="Array">or Microsoft.Maps.Locations[]</param>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        fromString: function (string) {
            /// <summary>
            /// Creates a LocationRect from a string with the following format: "north,west,south,east". North, west, south and east specify the coordinate number values.
            /// </summary>
            /// <param name='String' type='String'></param>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        clone: function () {
            /// <summary>
            /// Returns a copy of the LocationRect object.
            /// </summary>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        contains: function () {
            /// <summary>
            /// Returns whether the specified Location is within the LocationRect.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getEast: function () {
            /// <summary>
            /// Returns the longitude that defines the eastern edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getNorth: function () {
            /// <summary>
            /// Returns the latitude that defines the northern edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getNorthwest: function () {
            /// <summary>
            /// Returns the Location that defines the northwest corner of the LocationRect.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getSouth: function () {
            /// <summary>
            /// Returns the latitude that defines the southern edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getSoutheast: function () {
            /// <summary>
            /// Returns the Location that defines the southeast corner of the LocationRect.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getWest: function () {
            /// <summary>
            /// Returns the latitude that defines the western edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        intersects: function (rect) {
            /// <summary>
            /// Returns whether the specified LocationRect intersects with this LocationRect.
            /// </summary>
            /// <param name="rect" type="Microsoft.Maps.LocationRect"></param>
            /// <returns type='Boolean'></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the LocationRect object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.Map.prototype = {
        blur: function () {
            /// <summary>
            /// Removes focus from the map control so that it does not respond to keyboard events.
            /// </summary>
        },
        dispose: function () {
            /// <summary>
            /// Deletes the Map object and releases any associated resources.
            /// </summary>
        },
        focus: function () {
            /// <summary>
            /// Applies focus to the map control so that it responds to keyboard events.
            /// </summary>
        },
        getBounds: function () {
            /// <summary>
            /// Returns the location rectangle that defines the boundaries of the current map view.
            /// </summary>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        getCenter: function () {
            /// <summary>
            /// Returns the location of the center of the current map view.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getCopyrights: function () {
            /// <summary>
            /// Gets the array of strings representing the attributions of the imagery currently displayed on the map.
            /// </summary>
            /// <returns type="string[]"></returns>
        },
        getCredentials: function (callback) {
            /// <summary>
            /// map.getCredentials(function(credentials) 
            /// { 
            /// if(credentials !== null) { /* Valid session Id. Use it to call REST service */ }
            /// });
            /// </summary>
            /// <param name="callback" type="Function"></param>
        },
        getHeading: function () {
            /// <summary>
            /// Returns the heading of the current map view.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getHeight: function () {
            /// <summary>
            /// Returns the height of the map control.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getImageryId: function () {
            /// <summary>
            /// Returns the string that represents the imagery currently displayed on the map.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getMapTypeId: function () {
            /// <summary>
            /// Returns a string that represents the current map type displayed on the map. Valid map types are listed in the MapTypeId Enumeration topic.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getMetersPerPixel: function () {
            /// <summary>
            /// Returns the current scale in meters per pixel of the center of the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getModeLayer: function () {
            /// <summary>
            /// Returns the map’s mode node.
            /// </summary>
            /// <returns type="DOMElement" domElement="true"></returns>
        },
        getOptions: function () {
            /// <summary>
            /// Returns the map option settings.
            /// </summary>
            /// <returns type="Microsoft.Maps.MapOptions"></returns>
        },
        getPageX: function () {
            /// <summary>
            /// Returns the x coordinate of the top left corner of the map control, relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getPageY: function () {
            /// <summary>
            /// Returns the y coordinate of the top left corner of the map control, relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getRootElement: function () {
            /// <summary>
            /// Returns the map’s root node.
            /// </summary>
            /// <returns type="DOMElement" domElement="true"></returns>
        },
        getTargetBounds: function () {
            /// <summary>
            /// Returns the location rectangle that defines the boundaries of the view to which the map is navigating.
            /// </summary>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        getTargetCenter: function () {
            /// <summary>
            /// Returns the center location of the view to which the map is navigating.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getTargetHeading: function () {
            /// <summary>
            /// Returns the heading of the view to which the map is navigating.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getTargetMetersPerPixel: function () {
            /// <summary>
            ///  Returns the scale in meters per pixel of the center of the view to which the map is navigating.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getTargetZoom: function () {
            /// <summary>
            /// Returns the zoom level of the view to which the map is navigating.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getUserLayer: function () {
            /// <summary>
            /// Returns the map’s user node.
            /// </summary>
            /// <returns type="DOMElement" domElement="true"></returns>
        },
        getViewportX: function () {
            /// <summary>
            /// Returns the x coordinate of the viewport origin (the center of the map), relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getViewportX: function () {
            /// <summary>
            /// Returns the y coordinate of the viewport origin (the center of the map), relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the width of the map control.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZoom: function () {
            /// <summary>
            /// Returns the zoom level of the current map view.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZoomRange: function () {
            /// <summary>
            /// Returns the range of valid zoom levels for the current map view.
            /// </summary>
            /// <returns type="Object"></returns>
        },
        isMercator: function () {
            /// <summary>
            /// Returns whether the map is in a regular Mercator nadir mode.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        isRotationEnabled: function () {
            /// <summary>
            /// Returns true if the current map type allows the heading to change; false if the display heading is fixed.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setMapType: function (mapTypeId) {
            /// <summary>
            /// Sets the current map type. The specified mapTypeId must be a valid map type ID or a registered map type ID. Valid map type IDs are listed in the MapTypeId Enumeration topic.
            /// </summary>
            /// <param name="mapTypeId" type='String'></param>
        },
        setOptions: function (height, width) {
            /// <summary>
            /// Sets the height and width of the map.
            /// </summary>
            /// <param name="height" type='Number'></param>
            /// <param name="width" type='Number'></param>
        }
        //        ,
        //        setSize: function (height, width) {
        //            /// <summary>
        //            /// Sets the size of the map. If width and height are not specified, the map fills the entire area.
        //            /// </summary>
        //            /// <param name="height" type="Number?"></param>
        //            /// <param name="width" type="Number?"></param>
        //        }
        ,
        setView: function (options) {
            /// <summary>
            /// Sets the map view based on the specified options.
            /// </summary>
            /// <param name="options" type="Microsoft.Maps.ViewOptions"></param>
        },
        tryLocationToPixel: function (location, reference) {
            /// <summary>
            /// Converts a specified Location to a Point on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Location, null is returned.
            /// Alternatively, converts an array of Locations and returns an array of Points if all locations were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"> or null, Point or []</param>
            /// <param name="reference" type="Microsoft.Maps.Point[]"> or Microsoft.Maps.PixelReference</param>
        },
        tryPixelToLocation: function (point, reference) {
            /// <summary>
            /// Converts a specified Point to a Location on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Point, null is returned.
            /// Alternatively, converts an array of Points and returns an array of Locations if all points were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="point" type="Microsoft.Maps.Point"> or Point[]</param>
            /// <param name="reference" type="Microsoft.Maps.Location"> or Location[], PixelReference</param>
        }
    };

    m.Point.prototype = {
        clone: function () {
            /// <summary>
            /// Returns a copy of the Point object.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the Point object into a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.Polygon.prototype = {
        getFillColor: function () {
            /// <summary>
            /// Returns the color of the inside of the polygon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getLocations: function () {
            /// <summary>
            /// Returns the locations that define the corners of the polygon.
            /// </summary>
            /// <returns type="Array">Array of Microsoft.Maps.Location</returns>
        },
        getStrokeColor: function () {
            /// <summary>
            /// Returns the color of the outline of the polygon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getStrokeThickness: function () {
            /// <summary>
            /// Returns the thickness of the outline of the polygon.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the polygon is visible. A value of false indicates that the polygon is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setLocations: function (locations) {
            /// <summary>
            /// Sets the locations that define the corners of the polygon.
            /// </summary>
            /// <param name="locations" type="Array">Array of Microsoft.Maps.Location</param>
        },
        setOptions: function (options) {
            /// <summary>
            /// Sets options for the polygon.
            /// </summary>
            /// <param name="options" type="Microsoft.Maps.PolygonOptions"></param>
        },
        toString: function () {
            /// <summary>
            /// Converts the Polyline object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.Polyline.prototype = {
        getLocations: function () {
            /// <summary>
            /// Returns the locations that define the corners of the polyline.
            /// </summary>
            /// <returns type="Array">Array of Microsoft.Maps.Location</returns>
        },
        getStrokeColor: function () {
            /// <summary>
            /// Returns the color of the outline of the polyline.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getStrokeThickness: function () {
            /// <summary>
            /// Returns the thickness of the outline of the polyline.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the polyline is visible. A value of false indicates that the polyline is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setLocations: function (locations) {
            /// <summary>
            /// Sets the locations that define the corners of the polyline.
            /// </summary>
            /// <param name="locations" type="Array">Array of Microsoft.Maps.Location</param>
        },
        setOptions: function (options) {
            /// <summary>
            /// Sets options for the polyline.
            /// </summary>
            /// <param name="options" type="Microsoft.Maps.PolylineOptions"></param>
        },
        toString: function () {
            /// <summary>
            /// Converts the Polyline object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };    

    m.Pushpin.prototype = {
        getAnchor: function () {
            /// <summary>
            /// Returns the point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        getIcon: function () {
            /// <summary>
            /// Returns the pushpin icon.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getHeight: function () {
            /// <summary>
            /// Returns the height of the pushpin, which is the height of the pushpin icon.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getLocation: function () {
            /// <summary>
            /// Returns the location of the pushpin.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getText: function () {
            /// <summary>
            /// Returns the text associated with the pushpin.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getTextOffset: function () {
            /// <summary>
            /// Returns the amount the text is shifted from the pushpin icon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        getTypeName: function () {
            /// <summary>
            ///  Returns the type of the pushpin.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the pushpin is visible. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the width of the pushpin, which is the width of the pushpin icon.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Returns the z-index of the pushpin with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        setLocation: function (location) {
            /// <summary>
            /// Sets the location of the pushpin.
            /// </summary>
            /// <param name="location" type="Microsoft.Map.Location"></param>
        },
        setOptions: function (options) {
            /// <summary>
            /// Sets options for the pushpin.
            /// </summary>
            /// <param name="options" type="Microsoft.Map.PushpinOptions"></param>
        },
        toString: function () {
            /// <summary>
            /// Converts the Pushpin object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.TileLayer.prototype = {
        getOpacity: function () {
            /// <summary>
            /// Returns the opacity of the tile layer, defined as a double between 0 (not visible) and 1.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getTileSource: function () {
            /// <summary>
            /// Returns the tile source of the tile layer. 
            /// The projection parameter accepts the following values: mercator, enhancedBirdseyeNorthUp, enhancedBirdseyeSouthUp, enhancedBirdseyeEastUp, enhancedBirdseyeWestUp.
            /// </summary>
            /// <returns type="Microsoft.Maps.TileSource"></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Returns the z-index of the tile layer with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        setOptions: function () {
            /// <summary>
            /// Sets options for the tile layer.
            /// </summary>
            /// <returns type="Microsoft.Maps.TileLayerOptions"></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the TileLayer object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.TileSource.prototype = {
        getHeight: function () {
            /// <summary>
            /// Returns the pixel height of each tile in the tile source.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getUriConstructor: function () {
            /// <summary>
            /// Returns a string that constructs tile URLs used to retrieve tiles for the tile layer.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the pixel width of each tile in the tile source.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the TileSource object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

})(this);