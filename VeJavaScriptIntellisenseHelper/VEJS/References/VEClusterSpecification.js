VEClusterSpecification = function() {
    /// <summary>Contains the shape objects and location of a pushpin cluster.</summary>
    /// <field name="Shapes">An array of VEShape Class items representing the pushpins in a pushpin cluster.</field>
    /// <field name="LatLong">A VELatLong Class object indicating the center of the pushpin cluster.</field>
};

VEClusterSpecification.prototype = {
    Shapes: null,
    LatLong: null,
    
    GetClusterShape: function() {
        /// <summary>Returns a VEShape Class that represents the pushpin cluster.</summary>
    }
};
