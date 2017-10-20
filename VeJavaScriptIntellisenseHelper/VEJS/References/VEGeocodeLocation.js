VEGeocodeLocation = function()
{
    /// <summary>A location used to interpolate a found result for a location search.</summary>
    /// <field name="LatLong">A VELatLong Class object specifying the latitude and longitude of the location.</field>        
    /// <field name="Precision">A VELocationPrecision Enumeration value specifying the precision of the location.</field> 
};

VEGeocodeLocation.prototype =
{
    LatLong : null,
    Precision : null
}

