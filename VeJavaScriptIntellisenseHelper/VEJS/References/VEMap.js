VEMap = function(control_id) {
    /// <summary>Initializes a new instance of the VEMap class.</summary>
    /// <param name="control_id" type="String">The ID of the HTML control that will contain the map.</param>
    /// <field name="onLoadMap">Specifies the function to call when the map is first loaded.</field>        
}

VEMap.GetVersion = function() {
    /// <summary>Returns the current version of the map control.</summary>
    /// <returns type="String"></returns>  
}

VEMap.prototype =
{

    onLoadMap: null,
    AddControl: function(element, zIndex) {
        /// <summary>Adds a custom control to the map.</summary>
        /// <param name="element">An HTML element that contains the control to be added.</param>
        /// <param name="zIndex" type="Number">The z-order for the control. Optional.</param>
    },

    AddCustomLayer: function (object) {
        /// <summary>Adds a custom layer to the map.</summary>
        /// <param name="object">The object to add as a layer to the map DIV container.</param>
    },

    AddShape: function(shape) {
        /// <summary>Adds a VEShape Class object or array of VEShape pushpin objects to the base layer.</summary>
        /// <param name="shape" type="VEShape">The VEShape object or array of VEShape pushpin objects to be added. Required.</param>
    },

    AddShapeLayer: function(Layer) {
        /// <summary>Adds the specified shape layer to the map.  If this layer reference already exists on the map, an exception is thrown, and no new layer is created.</summary>
        /// <param name="Layer" type="VEShapeLayer">A reference to the layer to add.</param>
    },

    AddTileLayer: function(layerSource, visibleOnLoad) {
        /// <summary>Adds a tile layer to the map, and if the visibleOnLoad parameter is true, it also shows it on the map.</summary>
        /// <param name="layerSource" type="VETileSourceSpecification">The VETileSourceSpecification Class object representing the source of the tile layer. Required.</param>
        /// <param name="visibleOnLoad" type="Boolean">The VETileSourceSpecification Class object representing the source of the tile layer. Required.</param>
    },

    AttachEvent: function(event, func) {
        /// <summary>Attaches a Map Control event to a specified function.</summary>
        /// <param name="event" type="String">The name of the Map Control event that generates the call.</param>
        /// <param name="func">The function to run when the event fires. It can be either the name of a function or the function itself.</param>
    },

    Clear: function() {
        /// <summary>Removes all shapes, shape layers, and search results on the map. Also removes the route from the map, if one is displayed.  The Clear method does not remove custom tile layers from the map.</summary>
    },

    ClearInfoBoxStyles: function() {
        /// <summary>Clears out all of the default Virtual Earth info box CSS styles.</summary>
    },

    ClearTraffic: function() {
        /// <summary>Clears the traffic map.</summary>
    },

    DeleteAllShapeLayers: function() {
        /// <summary>Deletes all shape layers, along with any shapes within the layers.</summary>
    },

    DeleteAllShapes: function() {
        /// <summary>Deletes all shapes in all layers, leaving empty layers behind.</summary>
    },

    DeleteControl: function(element) {
        /// <summary>Removes the specified control from the map.</summary>
        /// <param name="element">An HTML element that contains the control to be deleted</param>
    },

    DeleteRoute: function() {
        /// <summary>Clears the current route (VERoute Class object) from the map.</summary>
    },

    DeleteShape: function(shape) {
        /// <summary>Deletes a VEShape Class object from any layer, including the base map layer.</summary>
        /// <param name="shape" type="VEShape">The reference to the VEShape object to be deleted. Required.</param>
    },

    DeleteShapeLayer: function(layer) {
        /// <summary>Deletes the specified shape layer from the map.</summary>
        /// <param name="layer" type="VEShapeLayer">A reference to the layer to delete. Required.</param>
    },

    DeleteTileLayer: function(layerID) {
        /// <summary>Completely removes a tile layer from the map.</summary>
        /// <param name="layerID" type="String">The ID of the layer to be deleted.</param>
    },

    DetachEvent: function(event, func) {
        /// <summary>Detaches the specified map control event so that it no longer calls the specified function.</summary>
        /// <param name="event" type="String">The name of the map control event that generates the call.</param>
        /// <param name="func">The function that was specified to run when the event fired.</param>
    },

    Dispose: function() {
        /// <summary>Deletes the VEMap object and releases any associated resources.</summary>
    },

    EnableShapeDisplayThreshold: function(enable) {
        /// <summary>Specifies whether shapes are drawn below a threshold zoom level.</summary>
        /// <param name="enable" type="Boolean">A Boolean value specifying whether to draw shapes below a threshold zoom level. By default shapes are not drawn below a threshold zoom level.</param>
    },

    EndContinuousPan: function() {
        /// <summary>Stops the continuous map panning initiated by a call to the VEMap.StartContinuousPan Method.</summary>
    },

    Find: function(what, where, findType, shapeLayer, startIndex, numberOfResults, showResults, createResults, useDefaultDisambiguation, setBestMapView, callback) {
        /// <summary>Performs a what (business) search and/or a where (location) search. At least one of these two parameters is required.</summary>
        /// <param name="what" type="String">The business name, category, or other item searched for. This parameter must be supplied for a pushpin to be included in the results.</param>
        /// <param name="where" type="String">The address or place name of the area searched for. This parameter is overloaded; see the Remarks section for more information.</param>
        /// <param name="findType" type="VEFindType">The VEFindType Enumeration that specifies the type of search performed. The only currently supported value is VEFindType.Businesses.</param>
        /// <param name="shapeLayer" type="VEShapeLayer">A reference to the VEShapeLayer Class object that contain the pins that result from this search if it is a "what" component. Optional. If the shape layer is not specified, the pins are added to the base map layer. If the reference is not a valid VEShapeLayer reference, an exception is thrown.</param>
        /// <param name="startIndex" type="Number">The beginning index of the results returned. Optional. Default is 0.</param>
        /// <param name="numberOfResults" type="Number">The number of results to be returned, starting at startIndex. The default is 10, the minimum is 1, and the maximum is 20.</param>
        /// <param name="showResults" type="Boolean">A Boolean object that determines whether the resulting pushpins are visible. Optional. Default is true.</param>        
        /// <param name="createResults" type="Boolean">A Boolean true or false that determines whether pushpins are created when the what parameter is supplied. Optional. If set to the default true, pushpins are created. If set to false: The array of VEFindResult Class objects is still present in the callback, but no pushpin layer is created; The VEShapeLayer reference field within the callback is null; Each VEFindResult object's corresponding Shape property is null.</param>        
        /// <param name="useDefaultDisambiguation" type="Boolean">A Boolean true or false that determines whether the default disambiguation box appears when multiple location matches are possible. Optional. Default is true. If set to true, the default disambiguation box appears. If set to false the default disambiguation box is not displayed.</param>        
        /// <param name="setBestMapView" type="Boolean">A Boolean true or false that determines whether the map view is moved to the first location match. If set to true, the map view is moved to the first location match. Default is true.</param>        
        /// <param name="callback">The name of the function to run when the search results are returned. If useDefaultDisambiguation is set to true, this callback will not be fired until the user has made a disambiguation choice. Optional.</param>        
    },

    FindLocations: function(veLatLong, callback) {
        /// <summary>Performs a search for locations that match a VELatLong input.</summary>
        /// <param name="veLatLong" type="VELatLong">A VELatLong Class object that specifies what map location to match.</param>
        /// <param name="callback">The name of the function that the server calls when it returns search results.</param>
    },

    Geocode: function (query, callback, options) {
        /// <summary>Finds a geographic location based on a specified address or place name string as well as other geocoding options. This method does not return a value. The function defined by the callback parameter receives arguments.</summary>
        /// <param name="query" type="String">The query string to match to a location on the map.</param>
        /// <param name="callback" type="String">The name of the function that the server calls with the geocode results. If this parameter is not null and useDefaultDisambiguation is true, this function is not called until the user has made a disambiguation choice.</param>
        /// <param name="options" type="VEGeocodeOptions">A VEGeocodeOptions Class object specifying additional options.</param>
    },

    GetAltitude: function() {
        /// <summary>In 3D mode, returns a double that represents the altitude (in meters) above the geoid.</summary>
        /// <returns type="Number">THIS VALUE NOT USED IN THE TOOLTIP:(</returns>        
    },

    GetBirdseyeScene: function() {
        /// <summary>If the map view is already set to bird's eye, returns the current VEBirdseyeScene Class object.</summary>
        /// <returns type="VEBirdseyeScene"></returns>        
    },

    GetCenter: function() {
        /// <summary>Returns a VELatLong Class object that represents the location of the center of the current map view.</summary>
        /// <returns type="VELatLong"></returns>        
    },

    GetDirections: function(locations, options) {
        /// <summary>Draws a multi-point route on the map and sends details about the route to a callback function.</summary>
        /// <param name="locations" type="Array">An array of objects specifying the points through which the route must pass. The points can be either VELatLong Class objects or String objects.</param>
        /// <param name="options" type="VERouteOptions">A VERouteOptions Class object specifying the routing options.</param>     
    },

    GetHeading: function() {
        /// <summary>In 3D mode, returns a double that represents the compass heading of the current map view.  Returns a double that represents the compass heading, where 0 is true north and 180 is true south.</summary>
        /// <returns type="Number"></returns>        
    },

    GetImageryMetadata: function(callback, options) {
        /// <summary>Returns information about the requested imagery, including imagery date stamps. This method requires that a valid token has been set using the VEMap.SetClientToken Method.</summary>
        /// <param name="callback">The name of the function to call when results are returned. The function must accept a VEImageryMetadata Class object. Required.<param>
        /// <param name="options" type="VEImageryMetadataOptions">A VEImageryMetadataOptions class specifying the imagery for which information is returned. Optional.<param>
        /// <returns type="VEImageryMetadata"></returns>
    },

    GetLeft: function() {
        /// <summary>Returns the pixel value of the left edge of the map control.</summary>
        /// <returns type="Number"></returns>        
    },

    GetMapMode: function() {
        /// <summary>Returns the current map mode as a VEMapMode Enumeration value.</summary>
        /// <returns type="Number"></returns>        
    },

    GetMapStyle: function() {
        /// <summary>Returns the current map style as a VEMapStyle Enumeration value that represents the current map style.</summary>
        /// <returns type="String"></returns>        
    },

    GetMapView: function() {
        /// <summary>Returns the current map view object as a VELatLongRectangle Class object.</summary>
        /// <returns type="VELatLongRectangle"></returns>        
    },

    GetPitch: function() {
        /// <summary>In 3D mode, returns a double that represents the pitch of the current map view.  A double that represents the pitch, where 0 is level and -90 is straight down.</summary>
        /// <returns type="Number"></returns>        
    },

    GetRoute: function(start, end, units, route_type, callback) {
        /// <summary>This method is deprecated. Use the VEMap.GetDirections Method instead. Draws a route on the map and sends details about the route to a callback function.</summary>
        /// <param name="start">The start location. This can be a string value of an address, a place name, or a VELatLong Class object that specifies the start location</param>
        /// <param name="end">The ending location. This can be a string value of an address, a place name, or a VELatLong object that specifies the end location</param>
        /// <param name="units" type="VEDistanceUnit">A VEDistanceUnit Enumeration value that specifies either miles or kilometers. Optional. Default is VEDistanceUnit.Miles</param>
        /// <param name="route_type" type="VERouteType">A VERouteType Enumeration value specifying either the shortest route or the quickest route. Optional. Default is VERouteType.Shortest</param>
        /// <param name="callback" type="Function">Specifies the function called after the route is drawn on the map. The callback function is passed a VERouteDeprecated Class object containing information about the route.</param>
    },

    GetShapeByID: function(ID) {
        /// <summary>Gets the reference to a VEShape Class object based on its internal identifier.</summary>
        /// <param name="ID" type="String">The identifier of the shape to retrieve. Required.</param>
        /// <returns type="VEShape"></returns>  
    },

    GetShapeLayerByIndex: function(index) {
        /// <summary>Gets the reference to a VEShapeLayer Class object based on its index.</summary>
        /// <param name="index" type="Number">The index of the layer that you wish to retrieve. Required.</param>
        /// <returns type="VEShapeLayer"></returns>  
    },

    GetShapeLayerCount: function() {
        /// <summary>Gets the total number of shape layers on the map.</summary>
        /// <returns type="Number"></returns>        
    },

    GetTileLayerByID: function(id) {
        /// <summary>Gets a tile layer based upon its identifier.</summary>
        /// <param name="id" type="String">The unique identifier of the tile layer.</param>
        /// <returns type="VETileSourceSpecification"></returns>  
    },

    GetTileLayerByIndex: function(index) {
        /// <summary>Gets a tile layer based upon its identifier.</summary>
        /// <param name="index" type="Number">The index into the list of tile layers. The value ranges from 0 to GetTileLayerCount.</param>
        /// <returns type="VETileSourceSpecification"></returns>  
    },

    GetTileLayerCount: function() {
        /// <summary>Gets the number of tile layers.</summary>
        /// <returns type="Number"></returns>        
    },

    GetTop: function() {
        /// <summary>Returns the pixel value of the top edge of the map control.</summary>
        /// <returns type="Number"></returns>        
    },

    GetZoomLevel: function() {
        /// <summary>Returns the current zoom level of the map.</summary>
        /// <returns type="String"></returns>        
    },

    Hide3DNavigationControl: function() {
        /// <summary>In 3D mode, hides the default user interface for controlling the map in 3D mode. By default, this control is shown.</summary>
    },

    HideAllShapeLayers: function() {
        /// <summary>Hides all of the shape layers on the map.</summary>
    },

    HideBaseTileLayer: function (element) {
        /// <summary>Hides the base tile layer of the map.</summary>
    },

    HideControl: function(element) {
        /// <summary>Hides the specified control from view.</summary>
        /// <param name="element" type="String">An HTML element that contains the control to be hidden.</param>
    },

    HideDashboard: function() {
        /// <summary>Hides the default user interface for controlling the map (the compass and the zoom control).</summary>
    },

    HideFindControl: function() {
        /// <summary>Removes the Find control from the map.</summary>
    },

    HideInfoBox: function() {
        /// <summary>Hides a shape's custom or default info box.  There can be only one info box on the screen at a given time. The method will hide the currently visible info box.</summary>
    },

    HideMiniMap: function() {
        /// <summary>Hides the mini map from view.</summary>
    },

    HideScalebar: function() {
        /// <summary>Hides the scale bar from the map.</summary>
    },

    HideTileLayer: function(layerID) {
        /// <summary>Hides the specified control from view.</summary>
        /// <param name="layerID" type="String">The ID of the layer to be hidden.</param>
    },

    HideTrafficLegend: function() {
        /// <summary>Hides the traffic legend.</summary>
    },

    ImportShapeLayerData: function(shapeSource, callback, setBestView) {
        /// <summary>Imports data from a GeoRSS feed, Live Search Maps (http://maps.live.com) collection, or KML URL.</summary>
        /// <param name="shapeSource" type="VEShapeSourceSpecification"> VEShapeSourceSpecification Class object specifying the imported shape data.</param>
        /// <param name="callback">The function that is called after the data has been imported.</param>
        /// <param name="setBestView" type="Boolean">A Boolean value that specifies whether the map view is changed to the best view for the layer.</param>
    },

    Import3DModel: function(modelShapeSource, callback, latlong, orientation, scale) {
        /// <summary>Imports a model data file and displays a 3D model on the map.</summary>
        /// <param name="modelShapeSource" type="VEModelSourceSpecification">A VEModelSourceSpecification Class object specifying the model data to import.</param>
        /// <param name="callback">The name of the function that is called after the data has been imported. See below for the arguments received by the callback.</param>
        /// <param name="latlong" type="VELatLong">A VELatLong Class object that specifies the point at which to place the origin of the model.</param>
        /// <param name="orientation" type="VEModelOrientation">A VEModelOrientation Class object that specifies the orientation of the model on the map.</param>
        /// <param name="scale" type="VEModelScale">A VEModelScale Class object that specifies the scale of the model.</param>
    },

    IncludePointInView: function(latlong) {
        /// <summary>Changes the map view so that it includes both the specified VELatLong Class point and the center point of the current map.</summary>
        /// <param name="latlong" type="VELatLong">A VELatLong Class object that specifies the latitude and longitude of the point to include</param>
    },

    IsBirdseyeAvailable: function() {
        /// <summary>Determines whether the bird's eye map style is available in the current map view.</summary>
        /// <returns type="Boolean"></returns>        
    },

    LatLongToPixel: function(LatLong) {
        /// <summary>Converts a VELatLong Class object (latitude/longitude pair) to the corresponding pixel on the map.</summary>
        /// <param name="LatLong" type="VELatLong">A VELatLong Class object that contains the latitude and longitude of a point.</param>
    },

    LoadMap: function(VELatLong, zoom, style, fixed, mode, showSwitch, tileBuffer, mapOptions) {
        /// <summary>Loads the specified map. All parameters are optional.</summary>
        /// <param name="VELatLong" type="VELatLong">A VELatLong Class object that represents the center of the map. Optional.</param>
        /// <param name="zoom" type="Number">The zoom level to display. Valid values range from 1 through 19. Optional. Default is 4.</param>
        /// <param name="style" type="VEMapStyle">A VEMapStyle Enumeration value specifying the map style. Optional. Default is VEMapStyle.Road.</param>
        /// <param name="fixed" type="Boolean">A Boolean value that specifies whether the map view is displayed as a fixed map that the user cannot change. Optional. Default is false.</param>
        /// <param name="mode" type="VEMapMode">A VEMapMode Enumeration value that specifies whether to load the map in 2D or 3D mode. Optional. Default is VEMapMode.Mode2D.</param>
        /// <param name="showSwitch" type="Boolean">A Boolean value that specifies whether to show the map mode switch on the dashboard control. Optional. Default is true (the switch is displayed).</param>
        /// <param name="tileBuffer" type="Number">How much tile buffer to use when loading map. Default is 0 (do not load an extra boundary of tiles). This parameter is ignored in 3D mode.</param>        
        /// <param name="mapOptions" type="VEMapOptions">A VEMapOptions Class that specifies other map options to set.</param>        
    },

    LoadTraffic: function(showFlow) {
        /// <summary>Loads the traffic map.  The traffic map is only available at zoom levels from 9 through 15, inclusively.</summary>
        /// <param name="showFlow" type="Boolean">Whether to show the traffic flow.</param>
    },

    Pan: function(deltaX, deltaY) {
        /// <summary>When in 2D mode, moves the map the specified amount.  The Pan method only applies to 2D mode maps. If you are working with maps in 3D mode, use the VEMap.StartContinuousPan Method and VEMap.EndContinuousPan Method.</summary>
        /// <param name="deltaX" type="Number">The amount to move the map horizontally, in pixels</param>
        /// <param name="deltaY" type="Number">The amount to move the map vertically, in pixels</param>
    },

    PanToLatLong: function(VELatLong) {
        /// <summary>Pans the map to a specific latitude and longitude.</summary>
        /// <param name="VELatLong" type="VELatLong">A VELatLong Class object that represents the latitude and longitude of the point on which to center the map</param>
    },

    PixelToLatLong: function(pixel) {
        /// <summary>Converts a pixel (a point on the map) to a VELatLong Class object (latitude/longitude pair).</summary>
        /// <param name="pixel" type="VEPixel">VEPixel Class object representing a pixel location on the map.</param>
        /// <returns type="VELatLong"></returns> 
    },

    RemoveCustomLayer: function (object) {
        /// <summary>Removes a custom layer from the map.</summary>
        /// <param name="object">The object to remove from the map DIV container.</param>
    },

    Resize: function(width, height) {
        /// <summary>Resizes the map based on the specified width and height.  If this method is called with no parameters, the map is resized to fit the entire DIV element.</summary>
        /// <param name="width" type="Number">The width, in pixels, of the map. Optional.</param>
        /// <param name="height" type="Number">The height, in pixels, of the map. Optional.</param>
    },

    Search: function (query, callback, options) {
        /// <summary>Resizes the map based on the specified width and height.  If this method is called with no parameters, the map is resized to fit the entire DIV element.</summary>
        /// <param name="query" type="String">The string to use in the search.</param>
        /// <param name="callback" type="String">The name of the function that the server calls with the search results.</param>
        /// <param name="options" type="VESearchOptions">A VESearchOptions Class object specifying additional options.</param>
    },

    SetAltitude: function(altitude) {
        /// <summary>In 3D mode, sets the altitude, in meters, above the WGS 84 ellipsoid in the map view.</summary>
        /// <param name="altitude" type="Number">The altitude, in meters.</param>
    },

    SetBirdseyeOrientation: function(orientation) {
        /// <summary>Changes the orientation of the existing bird's eye image (VEBirdseyeScene Class object) to the specified orientation.</summary>
        /// <param name="orientation" type="VEOrientation "></param>
    },

    SetBirdseyeScene: function(id) {
        /// <summary>Displays the bird's eye image specified by the VEBirdseyeScene Class ID.</summary>
        /// <param name="id" type="Number">The ID of the VEBirdseyeScene Class object that you want to display</param>
    },

    SetBirdseyeScene: function(veLatLong, orientation, zoomLevel, callback) {
        /// <summary>Displays the bird's eye image specified by the center of the map, the orientation, and the zoom level</summary>
        /// <param name="veLatLong" type="VELatLong">A VELatLong Class object specifying the center of the image. Optional. If this parameter is not supplied the center of the map is used.</param>
        /// <param name="orientation" type="VEOrientation">A VEOrientation Enumeration value specifying the direction to which which the image is viewed. Optional. If this value is not supplied, the default value VEOrientation.North is used.</param>
        /// <param name="zoomLevel" type="Number">The level of zoom. Optional. If this parameter is not supplied, the value 1 is used.</param>
        /// <param name="callback">The name of the function called when the SetBirdseyeScene method completes.</param>
    },

    SetCenter: function(VELatLong) {
        /// <summary>Centers the map to a specific latitude and longitude.</summary>
        /// <param name="VELatLong" type="VELatLong">A VELatLong Class object that contains the latitude and longitude of the point on which to center the map.</param>       
    },

    SetCenterAndZoom: function(VELatLong, zoomLevel) {
        /// <summary>Centers the map to a specific latitude and longitude and sets the zoom level.</summary>
        /// <param name="VELatLong" type="VELatLong">A VELatLong Class object that contains the latitude and longitude of the point on which to center the map.</param>       
        /// <param name="zoomLevel" type="Number">The zoom level for the map. Valid values range from 1 through 19.</param>       
    },

    SetClientToken: function(clientToken) {
        /// <summary>Sets a Virtual Earth token for the VEMap object.</summary>
        /// <param name="clientToken">A string representing the Virtual Earth token.</param>
    },

    SetDashboardSize: function(dashboardSize) {
        /// <summary>Sets the map dashboard size and type.  This method must be called before VEMap.LoadMap Method.</summary>
        /// <param name="dashboardSize" type="VEDashboardSize">A VEDashboardSize Enumeration representing the dashboard size. Valid values are Normal, Small, and Tiny.</param>       
    },

    SetDefaultInfoBoxStyles: function() {
        /// <summary>Sets the info box CSS styles back to their original classes.</summary>
    },

    SetFailedShapeRequest: function(policy) {
        /// <summary>Specifies what the map control does when a request to the server to get the accurate position of a shape when the map style is changed to birdseye fails.</summary>
        /// <param name="policy" type="VEFailedShapeRequest">A VEFailedShapeRequest Enumeration value that defines the policy.</param>       
    },

    SetHeading: function(heading) {
        /// <summary>In 3D mode, sets the compass heading of the current map view.</summary>
        /// <param name="heading" type="Number">The compass direction, expressed as a double. A value of 0 is true north, and a value of 180 is true south. Values less than 0 and greater than 360 are valid and are calculated as compass directions.</param>       
    },

    SetMapMode: function(mode) {
        /// <summary>Sets the mode of the map.</summary>
        /// <param name="mode" type="VEMapMode">A VEMapMode Enumeration value that specifies whether to load the map in 2D or 3D mode.</param>       
    },

    SetMapStyle: function(mapStyle) {
        /// <summary>Sets the style of the map.</summary>
        /// <param name="mapStyle" type="VEMapStyle">A VEMapStyle Enumeration value specifying the map style.</param>       
    },

    SetMapView: function(object) {
        /// <summary>Sets the map view to include all of the points, lines, or polygons specified in the provided array, or to the view defined by a VEMapViewSpecification Class object.</summary>
        /// <param name="object">In 2D mode, an array of VELatLong Class points or a VELatLongRectangle Class object. In 3D mode, can also be a VEMapViewSpecification Class object. This object defines the location, altitude, pitch, and heading to use for the map view.</param>       
    },

    SetMouseWheelZoomToCenter: function(zoomToCenter) {
        /// <summary>Specifies whether to zoom to the center of the screen or to the cursor position on the screen.</summary>
        /// <param name="zoomToCenter" type="Boolean">A Boolean value specifying whether to zoom to the center of the screen or to the cursor position. If true, the map control zooms to the center of the screen; if false, the map control zooms to the cursor position on the screen.</param>       
    },

    SetPitch: function(pitch) {
        /// <summary>In 3D mode, sets the pitch of the current map view.</summary>
        /// <param name="pitch" type="Number">The pitch direction, expressed as a double. A value of 0 is level and a value of -90 is straight down. Values less than -90 or greater than 0 are ignored, and the pitch is set to -90.</param>       
    },

    SetPrintOptions: function(printOptions) {
        /// <summary>This method controls how the map is printed.</summary>
        /// <param name="printOptions " type="VEPrintOptions">A VEPrintOptions Class specifying the print options to set.</param>           
    },

    SetScaleBarDistanceUnit: function(distanceUnit) {
        /// <summary>Sets the distance unit (kilometers or miles) for the map scale.</summary>
        /// <param name="distanceUnit" type="VEDistanceUnit">A VEDistanceUnit Enumeration value that specifies either miles or kilometers.</param>       
    },

    SetShapesAccuracy: function(policy) {
        /// <summary>Specifies the accuracy in converting shapes when the map style is changed to birdseye.</summary>
        /// <param name="policy" type="VEShapeAccuracy">The VEShapeAccuracy Enumeration value specifying the accuracy in converting shapes.</param>       
    },

    SetShapesAccuracyRequestLimit: function(max) {
        /// <summary>Specifies the maximum number of shapes that are accurately converted at one time when the map style is changed to birdseye.</summary>
        /// <param name="max" type="Number">The maximum number of shapes that are accurately converted.</param>       
    },

    SetTileBuffer: function(numRings) {
        /// <summary>Sets the number of "rings" of map tiles that should be loaded outside of the visible mapview area. This is also called tile overfetching.</summary>
        /// <param name="numRings" type="Number">An integer value greater than or equal to 0 that indicates the number of rings of additional tiles that should be loaded. The default is 0, and the maximum is 3.</param>       
    },

    SetTrafficLegendText: function(text) {
        /// <summary>Specifies the text shown with the traffic legend, if visible.</summary>
        /// <param name="text" type="String">A string specifying the text shown with the traffic legend.</param>       
    },

    SetZoomLevel: function(zoomLevel) {
        /// <summary>Sets the view of the map to the specified zoom level.</summary>
        /// <param name="zoomLevel" type="Number">The zoom level for the map. Valid values range from 1 through 19.</param>       
    },

    Show3DBirdseye: function(showBirdseye) {
        /// <summary>Controls whether or not to show the Birdseye and BirdseyeHybrid map styles when the map mode is set to VEMapMode.Mode3D.</summary>
        /// <param name="showBirdseye" type="Boolean">A Boolean value that specifies whether or not to show the Birdseye or BirdseyeHybrid map styles when the map mode is set to VEMapMode.Mode3D. The default is false.</param>       
    },

    Show3DNavigationControl: function() {
        /// <summary>In 3D mode, shows the default user interface for controlling the map in 3D mode. By default, this control is shown.</summary>
    },

    ShowAllShapeLayers: function() {
        /// <summary>Shows all shape layers on the map.</summary>
    },

    ShowControl: function(element) {
        /// <summary>Makes the specified control visible. This method only affects control elements that have been hidden from view using the VEMap.HideControl Method.</summary>
        /// <param name="element">An HTML element that contains the control to be shown.</param>       
    },

    ShowDashboard: function() {
        /// <summary>Shows the default user interface for controlling the map (the compass-and-zoom control). By default, this control is shown.</summary>
    },

    ShowDisambiguationDialog: function(showDialog) {
        /// <summary>Specifies whether the default disambiguation dialog is displayed when multiple results are returned from a location query using the VEMap.GetDirections Method.</summary>
        /// <param name="showDialog" type="Boolean">A Boolean value. True enables the disambiguation dialog; false disables it.</param>       
    },

    ShowFindControl: function() {
        /// <summary>Shows the Find control, which enables users to enter search queries.</summary>
    },

    ShowInfoBox: function(shape, anchor, offset) {
        /// <summary>Shows an information box for the shape.</summary>
        /// <param name="shape" type="VEShape">The reference to the shape for which an info box is to be shown. Required.</param>       
        /// <param name="anchor">The anchor point where the info box is docked when displayed. This can either be a VELatLong Class object or a VEPixel Class object. This value must be a valid point on the current map. Optional.</param>       
        /// <param name="offset" type="VEPixel">If the anchor point is a VELatLong object, this parameter, a VEPixel object, specifies the anchor point's offset from that latlong position. Optional.</param>       
    },

    ShowMessage: function(message) {
        /// <summary>Displays the specified message in a dialog box on the map.</summary>
        /// <param name="message" type="String">The message you want to display on the map.</param>       
    },

    ShowMiniMap: function(xoffset, yoffset, size) {
        /// <summary>Displays the mini map at the specified offset from the top left corner of the screen.</summary>
        /// <param name="xoffset" type="Number">The x coordinate offset as a number of pixels from the top left corner of the screen. Optional.</param>       
        /// <param name="yoffset" type="Number">The y coordinate offset as a number of pixels from the top left corner of the screen. Optional.</param>       
        /// <param name="size" type="VEMiniMapSize">A VEMiniMapSize Enumeration value that specifies the mini map size. Optional. Default value is VEMiniMapSize.Small.</param>       
    },

    ShowScalebar: function() {
        /// <summary>Displays the scale bar on the map.</summary>
    },

    ShowTileLayer: function(layerID) {
        /// <summary>Shows a tile layer on the map.</summary>
        /// <param name="layerID" type="String">The ID of the layer to be shown.</param>       
    },

    ShowTrafficLegend: function(x, y) {
        /// <summary>Displays the traffic legend.</summary>
        /// <param name="x" type="Number">The x-coordinate of the top-left corner of the legend. Optional.</param>       
        /// <param name="y" type="Number">The y-coordinate of the top-left corner of the legend. Optional.</param>
    },

    StartContinuousPan: function(x, y) {
        /// <summary>Moves the map in the specified direction until the VEMap.EndContinuousPan Method is called.</summary>
        /// <param name="x" type="Number">The speed, as a percentage of the fastest speed, to move the map in the x direction. Positive numbers move the map to the right, while negative numbers move the map to the left.</param>       
        /// <param name="y" type="Number">The speed, as a percentage of the fastest speed, to move the map in the y direction. Positive numbers move the map down, while negative numbers move the map up</param>
    },

    ZoomIn: function() {
        /// <summary>Increases the map zoom level by 1.  Valid values range from 1 through 19. If you call the ZoomIn method when the current zoom level is already at the maximum, the zoom level does not change.</summary>
    },

    ZoomOut: function() {
        /// <summary>Decreases the map zoom level by 1.  Valid values range from 1 through 19. If you call the ZoomOut method when the current zoom level is already at the minimum, the zoom level does not change.</summary>
    }
}

