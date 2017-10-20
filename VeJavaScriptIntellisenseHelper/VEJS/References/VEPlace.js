VEPlace = function() 
{
    /// <summary>A found result returned from a location search.</summary>
    /// <field name="LatLong" type="VELatLong">Gets a VELatLong Class object that represents the best location of the found result.</field>
    /// <field name="Locations" type="Array">An array of VEGeocodeLocation Class objects specifying all of the possible match results returned by the geocoder for this place.</field>
    /// <field name="Name" type="String">Gets the String object that represents Virtual Earth's unambiguous name for the location.</field>
    /// <field name="MatchCode" type="VEMatchCode">A VEMatchCode Enumeration value specifying the match code from the geocoder. This property value is only valid for where-only searches.</field>
    /// <field name="MatchConfidence" type="VEMatchConfidence">A VEMatchConfidence Enumeration value specifying the match confidence from the geocoder. This property value is only valid for where-only searches.</field>
    /// <field name="Precision " type="VELocationPrecision">A VELocationPrecision Enumeration value specifying the match precision from the geocoder for the best result, which is found in the VEPlace.LatLong property.</field>
}

VEPlace.prototype =
{   
    LatLong: null,
    Locations: null,
    Name: null,
    MatchCode: null,
    MatchConfidence: null,
    Precision: null
}

