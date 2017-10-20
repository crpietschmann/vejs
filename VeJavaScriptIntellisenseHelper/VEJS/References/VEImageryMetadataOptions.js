VEImageryMetadataOptions = function() {
    /// <summary>Contains the options that represent the imagery.</summary>
    /// <field name="LatLong">A VELatLong Class object specifying the center of the map view. Optionsl. Defaults to the center of the current map view.</field>
    /// <field name="MapStyle">A VEMapStyle Enumeration value specifying the map style. Optional. Defaults to the current map style.</field>
    /// <field name="ZoomLevel">An integer specifying the zoom level. Optional. Defaults to the current zoom level.</field>
};

VEImageryMetadataOptions.prototype = {
    LatLong: null,
    
    MapStyle: null,
    
    ZoomLevel: null
};

