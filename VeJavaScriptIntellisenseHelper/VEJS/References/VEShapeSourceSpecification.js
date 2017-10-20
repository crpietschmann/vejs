VEShapeSourceSpecification = function(dataType, dataSource, layer)
{
    /// <summary>Initializes a new instance of the VEShapeSourceSpecification object.</summary>
    /// <param name="dataType" type="VEDataType">A VEDataType Enumeration that specifies the type of data to import. Required.</param>
    /// <param name="dataSource" type="String">A URL representing the GeoRSS feed or KML data, or a globally-unique identifier (GUID) representing the Live Maps collection. Required.</param>
    /// <param name="layer" type="VEShapeLayer">A VEShapeLayer Class object in which the VEShape objects are contained after importing. If this parameter value is null, the VEShape objects are added to the base layer.</param>
    
    /// <field name="Layer" type="Number">A VEShapeLayer Class object in which the VEShape objects are contained after importing.</field>
    /// <field name="LayerSource" type="Number">A String specifying the layer source.</field>
    /// <field name="MaxImportedShapes" type="Number">Specifies the maximum number of items that can be imported from an XML file. The default value is 200.</field>
    /// <field name="Type" type="Number">A VEDataType Enumeration value defining the type of data to be imported into a shape layer.</field>
}

VEShapeSourceSpecification.prototype =
{   
    Layer: null,
    LayerSource: null,
    MaxImportedShapes: null,
    Type: null
}

