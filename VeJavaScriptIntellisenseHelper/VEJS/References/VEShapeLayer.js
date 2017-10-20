VEShapeLayer = function() {
    /// <summary>Initializes a new instance of the VEShapeLayer class.</summary>
}

VEShapeLayer.prototype =
{
    AddShape: function(shape) {
        /// <summary>Adds a VEShape Class object or array of VEShape objects to the layer.</summary>
        /// <param name="shape" type="VEShape">The VEShape object or array of VEShape objects to be added. Required.</param>
    },

    DeleteAllShapes: function() {
        /// <summary>Deletes all VEShape Class objects (pushpins, polylines, and polygons) from the layer.</summary>
    },

    DeleteShape: function(shape) {
        /// <summary>Adds a VEShape Class object or array of VEShape objects to the layer.</summary>
        /// <param name="shape" type="VEShape">A reference to the VEShape object (pushpin, polyline, and polygon) to delete. Required.</param>
    },

    GetBoundingRectangle: function() {
        /// <summary>Returns a best-fit VELatLongRectangle Class object based on the shapes currently present in the layer.</summary>
        /// <returns type="VELatLongRectangle"></returns>
    },

    GetClusteredShapes: function(type) {
        /// <summary>Returns an array of VEClusterSpecification Class objects representing the calculated pushpin clusters.</summary>
        /// <param name="type" type="VEClusteringType">A VEClusteringType Enumeration specifying the algorithm used to determine which pushpins to cluster.</param>
        /// <returns type="Array"></returns>
    },

    GetDescription: function() {
        /// <summary>Gets the description of the VEShapeLayer object.</summary>
        /// <returns type="String"></returns>
    },

    GetShapeByID: function(id) {
        /// <summary>Retrieves a reference to a VEShape Class object contained in this layer based on the specified ID.</summary>
        /// <param name="id" type="String">The identifier of the VEShape object. Required.</param>
        /// <returns type="VEShape"></returns>
    },

    GetShapeByIndex: function(index) {
        /// <summary>Retrieves a reference to a VEShape Class object contained in this layer based on the specified index.</summary>
        /// <param name="index" type="Number">The index of the shape to retrieve. Required.</param>
        /// <returns type="VEShape"></returns>
    },

    GetShapeCount: function() {
        /// <summary>Returns the total number of shapes in the current layer.</summary>
        /// <returns type="Number"></returns>
    },

    GetTitle: function() {
        /// <summary>Gets the title of the VEShapeLayer Class object.</summary>
        /// <returns type="String"></returns>
    },

    Hide: function() {
        /// <summary>Hides the layer from view on the map.</summary>
    },

    IsVisible: function() {
        /// <summary>Returns true if the layer is visible, otherwise returns false.</summary>
        /// <returns type="Boolean"></returns>
    },

    SetClusteringConfiguration: function(type, options) {
        /// <summary>Sets the method for determining which pushpins are clusted as well as how the cluster is displayed.</summary>
        /// <param name="type" type="VEClusteringType">A VEClusteringType Enumeration specifying which shapes to cluster, OR the name of the function used to determine which pushpins are clustered. The function must accept a VEShapeLayer Class object and return an array of VEClusterSpecification Class objects. Required.</param>
        /// <param name="options" type="VEClusteringOptions">A VEClusteringOptions Class object specifying how the pushpin cluster is displayed. Optional.</param>
    },

    SetDescription: function(details) {
        /// <summary>Sets the description of the VEShapeLayer object.</summary>
        /// <param name="details" type="String ">A String object containing either plain text or HTML that represents the VEShapeLayer object's description field.</param>
    },

    SetTitle: function(title) {
        /// <summary>Sets the title of the VEShapeLayer object.</summary>
        /// <param name="title" type="String">A String object containing either plain text or HTML that represents the VEShapeLayer object's title.</param>
    },

    Show: function() {
        /// <summary>Shows the layer on the map.</summary>
    }
}

