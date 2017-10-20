VEShape = function(type, points)
{
    /// <summary>Initializes a new instance of the VEShape class.</summary>
    /// <param name="type" type="VEShapeType">A VEShapeType Enumeration value of type that represents the type of shape. Required.</param>
    /// <param name="points">If the shape is a pushpin, this parameter can either be a single VELatLong Class object or an array of VELatLong objects. If it is an array of VELatLong objects, only the first VELatLong object is used to define the pushpin's location. Any additional data members are ignored. If the shape is a polyline or polygon, it must be an array of VELatLong objects, containing at least two points for a polyline and at least three points for a polygon. Required.</param>
    /// <field name="Draggable" type="Boolean">A Boolean value indicating whether the VEShape icon on the map can be dragged using the mouse.</field>
    /// <field name="ondrag">Occurs when a shape is being dragged across the map.</field>        
    /// <field name="onenddrag">Occurs when a shape is being dragged across the map.</field>        
    /// <field name="ondrag">Occurs when a shape is being dragged across the map.</field>        
}

VEShape.prototype =
{
    // Fields
    Draggable: null,

    // Events
    ondrag: null,
    onenddrag: null,
    onstartdrag: null,

    // Functions
    GetAltitude: function()
    {
        /// <summary>Returns the altitude for the shape.  A floating-point value representing meters above the level represented by the altitude mode.</summary>
        /// <returns type="Number"></returns>
    },
    
    GetAltitudeMode: function()
    {
        /// <summary>Gets the mode in which the shape's altitude is represented.  This method returns VEAltitudeMode.RelativeToGround if the altitude is not set.</summary>
        /// <returns type="VEAltitudeMode"></returns>
    },
    
    GetCustomIcon: function()
    {
        /// <summary>Gets the VEShape objects custom icon.  A String or VECustomIconSpecification object representing the custom icon of the VEShape object.</summary>
        /// <returns type="String_OR_VECustomIconSpecification"></returns>
    },
    
    GetDescription: function()
    {
        /// <summary>Gets the description of the VEShape object. This description will be displayed in the shape's info box.  A String object representing the description field of the VEShape object.</summary>
        /// <returns type="String"></returns>
    },
    
    GetFillColor: function()
    {
        /// <summary>Gets the fill color and transparency for a polygon.  The default is semi-transparent green (alpha=0.3, RGB=0, 128, 0). This method is ignored for pushpins and polylines. </summary>
        /// <returns type="VEColor"></returns>
    },
    
    GetIconAnchor: function()
    {
        /// <summary>Gets a VELatLong Class object representing the shape's custom icon anchor point.</summary>
        /// <returns type="VELatLong"></returns>
    },
    
    GetID: function()
    {
        /// <summary>Gets the internal identifier of the VEShape object.  Use this identifier when working with VEShape object events. A VEShape object only has an identifier when it has been added to a layer. If you try to get the identifier of a VEShape object that is not part of a layer, the VEShape.GetID method returns null.</summary>
        /// <returns type="String"></returns>
    },
    
    GetLineColor: function()
    {
        /// <summary>Gets the line color or transparency for a polyline or polygon.  A VEColor Class object representing the line color or transparency for a polyline or polygon. This method returns null for pushpins.</summary>
        /// <returns type="VEColor"></returns>
    },
    
    GetLineToGround: function()
    {
        /// <summary>Gets whether a line is drawn from the shape to the ground.  If the shape type is Polyline or Polygon, this method returns a Boolean value; if the shape type is Pushpin, this method returns null.</summary>
        /// <returns type="Boolean"></returns>
    },
    
    GetLineWidth: function()
    {
        /// <summary>Gets the line width of a polyline or polygon.  This method returns null for pushpins. If the line width is not set, the default value 2 is returned.</summary>
        /// <returns type="Number"></returns>
    },
    
    GetMaxZoomLevel: function()
    {
        /// <summary>Gets the maximum zoom level at which the shape is visible.  The default maximum zoom level is 21.</summary>
        /// <returns type="Number"></returns>
    },
    
    GetMinZoomLevel: function()
    {
        /// <summary>Gets the minimum zoom level at which the shape is visible.  The default minimum zoom level is 1.</summary>
        /// <returns type="Number"></returns>
    },
    
    GetMoreInfoURL: function()
    {
        /// <summary>Gets the string containing the URL of the "more info" link that is displayed in the shape's info box.</summary>
        /// <returns type="String"></returns>
    },
    
    GetPhotoURL: function()
    {
        /// <summary>Gets the shape's "photo" URL.</summary>
        /// <returns type="String"></returns>
    },
    
    GetPoints: function()
    {
        /// <summary>Returns an array of VELatLong objects representing the points that make up the pushpin, polyline, or polygon.</summary>
        /// <returns type="Array"></returns>
    },
    
    GetShapeLayer: function()
    {
        /// <summary>Gets the reference to the layer containing the specified VEShape object.</summary>
        /// <returns type="VEShapeLayer"></returns>
    },
    
    GetTitle: function()
    {
        /// <summary>Gets the title of the VEShape object.</summary>
        /// <returns type="String"></returns>
    },
    
    GetType: function()
    {
        /// <summary>Gets the type of the VEShape object.</summary>
        /// <returns type="VEShapeType"></returns>
    },
    
    GetZIndex: function()
    {
        /// <summary>Gets the z-index of a pushpin shape or pushpin attached to a polyline or polygon.</summary>
        /// <returns type="Number"></returns>
    },
    
    GetZIndexPolyShape: function()
    {
        /// <summary>Gets the z-index for a polyline or polygon.</summary>
        /// <returns type="Number"></returns>
    },
    
    Hide: function()
    {
        /// <summary>Hides the specified VEShape object from view.</summary>
    },
    
    HideIcon: function()
    {
        /// <summary>Hides the icon associated with a polyline or polygon. This method is ignored for pushpins.</summary>
    },
    
    IsModel: function()
    {
        /// <summary>Returns whether the shape is a model.</summary>
        /// <returns type="Boolean"></returns>
    },
    
    SetAltitude: function(altitude, altitudeMode)
    {
        /// <summary>Specifies the altitude for the shape.</summary>
        /// <param name="altitude" type="Number">A floating-point value or array of floating-point values specifying the altitude, in meters, of the shape.</param>
        /// <param name="altitudeMode" type="VEAltitudeMode">A VEAltitudeMode Enumeration value specifying the mode in which the shape's altitude is represented.</param>
        /// <returns type="Boolean"></returns>
    },
    
    SetAltitudeMode: function(mode)
    {
        /// <summary>Specifies the mode in which a shape's altitude is represented.</summary>
        /// <param name="mode" type="VEAltitudeMode">A VEAltitudeMode Enumeration value specifying the altitude representation.</param>
    },
    
    SetCustomIcon: function(customIcon)
    {
        /// <summary>Sets the VEShape object's custom icon.</summary>
        /// <param name="customIcon" type="String">A String object containing either a URL to an image, custom HTML that defines the custom icon, or a VECustomIconSpecification object.</param>
    },
    
    SetDescription: function(details)
    {
        /// <summary>Sets the description of the VEShape object.</summary>
        /// <param name="details" type="String">A String object containing either plain text or HTML that represents the VEShape object's description field.</param>
    },
    
    SetFillColor: function(color)
    {
        /// <summary>Sets the fill color and transparency of a polygon.</summary>
        /// <param name="color" type="VEColor">A VEColor object representing the fill color and transparency.</param>
    },
    
    SetIconAnchor: function(point)
    {
        /// <summary>Sets the info box anchor of the VEShape object.</summary>
        /// <param name="point" type="VELatLong">A VELatLong Class object representing the shape's info box anchor point.</param>
    },
    
    SetLineColor: function(color)
    {
        /// <summary>Sets the line color or transparency for a polyline or polygon.</summary>
        /// <param name="color" type="VEColor">A VEColor Class object representing the line color and transparency.</param>
    },
    
    SetLineToGround: function(extrude)
    {
        /// <summary>Specifies whether a line is drawn from the shape to the ground.</summary>
        /// <param name="extrude" type="Boolean">A Boolean value specifying whether a line is drawn from the shape to the ground.</param>
    },
    
    SetLineWidth: function(width)
    {
        /// <summary>Sets the line width for a polyline or polygon.</summary>
        /// <param name="width" type="Number">An integer representing the line's width.</param>
    },
    
    SetMaxZoomLevel: function(level)
    {
        /// <summary>Sets the maximum zoom level at which the shape is visible.</summary>
        /// <param name="level" type="Number">An integer specifying the maximum zoom level.</param>
    },
    
    SetMinZoomLevel: function(level)
    {
        /// <summary>Sets the maximum zoom level at which the shape is visible.</summary>
        /// <param name="level" type="Number">An integer specifying the minimum zoom level.</param>
    },
    
    SetMoreInfoURL: function(moreInfoURL)
    {
        /// <summary>Sets the shape's "more info" URL.</summary>
        /// <param name="moreInfoURL" type="String">A String object containing the URL of the "more info" link that is displayed in the shape's info box.</param>
    },
    
    SetPhotoURL: function(photoURL)
    {
        /// <summary>Sets the shape's photo URL.</summary>
        /// <param name="photoURL" type="String">The string containing the URL of the image that is displayed in the shape's info box.</param>
    },
    
    SetPoints: function(points)
    {
        /// <summary>Sets the points of the VEShape Class object.</summary>
        /// <param name="points" type="Array">An array of VELatLong Class objects.</param>
    },
    
    SetTitle: function(title)
    {
        /// <summary>Sets the title of the VEShape object. This title will be displayed in the shape's info box.</summary>
        /// <param name="title" type="String">A String object containing either plain text or HTML that represents the VEShape object's title.</param>
    },
    
    SetZIndex: function(icon, polyshape)
    {
        /// <summary>Sets the maximum zoom level at which the shape is visible.</summary>
        /// <param name="icon" type="Number">Optional. An integer specifying the z-index for the shape's icon (or for the pushpin if the shape is a pushpin). If this value is null or undefined the z-index is not changed.</param>
        /// <param name="polyshape" type="Number">Optional. An integer specifying the z-index for the shape. This parameter is ignored if the shape is a pushpin. If this value is null or undefined the z-index is not changed.</param>
    },
        
    Show: function()
    {
        /// <summary>Makes the specified VEShape object visible.</summary>
    },

    ShowIcon: function () {
        /// <summary>Shows the icon associated with a polyline or polygon. This method is ignored for pushpins.</summary>
    }    
}

