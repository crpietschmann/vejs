VEModelSourceSpecification = function(modelFormat, modelSource, layer) {
    /// <summary>Contains the specification for importing a 3D model onto the map.</summary>
    /// <param name="modelFormat">A VEModelFormat Enumeration value specifying the data format of the 3D model being imported. Optional. The default value is VEModelFormat.OBJ.</param>
    /// <param name="modelSource">A string specifying the URL of the 3D model data file. Required.</param>
    /// <param name="layer">A VEShapeLayer Class specifying the shape layer into which the 3D model will be imported. Optional. If this parameter is not specified, the 3D model is added to the base layer.</param>
    /// <field name="Format">A VEModelFormat Enumeration value specifying the data format of the 3D model being imported.</field>
    /// <field name="Layer">A VEShapeLayer Class specifying the shape layer into which the 3D model will be imported.</field>
    /// <field name="ModelSource">A string specifying the URL of the 3D model data file.</field>
};
VEModelSourceSpecification.prototype = {
    Format: null,
    Layer: null,
    ModelSource: null
};

