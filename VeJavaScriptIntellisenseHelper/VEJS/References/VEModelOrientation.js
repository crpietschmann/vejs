VEModelOrientation = function(heading, tilt, roll) {
    /// <summary>Represents the orientation of a 3D model on the map.</summary>
    /// <param name="heading">A floating-point value specifying in decimal degrees the counter-clockwise rotation of the 3D model about the z-axis, looking along the positive z-axis away from the origin. Optional. The default value is 0.</param>
    /// <param name="tilt">A floating-point value specifying in decimal degrees the counter-clockwise rotation of the 3D model about the x-axis, looking along the positive x-axis away from the origin. Optional. The default value is 0.</param>
    /// <param name="roll">A floating-point value specifying in decimal degrees the counter-clockwise rotation of the 3D model about the y-axis, looking along the positive y-axis away from the origin. Optional. The default value is 0.</param>
    /// <field name="Heading">A floating-point value specifying in decimal degrees the counter-clockwise rotation of the 3D model about the z-axis, looking along the positive z-axis away from the origin.</field>
    /// <field name="Roll">A floating-point value specifying in decimal degrees the counter-clockwise rotation of the 3D model about the y-axis, looking along the positive y-axis away from the origin.</field>
    /// <field name="Tilt">A floating-point value specifying in decimal degrees the counter-clockwise rotation of the 3D model about the x-axis, looking along the positive x-axis away from the origin.</field>
};
VEModelOrientation.prototype = {
    Heading: null,
    Roll: null,
    Tilt: null
};

