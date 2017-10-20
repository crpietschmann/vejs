VEFindResult  = function()
{
    /// <summary>A single "what" result returned from a VEMap.Find Method search.</summary>
    /// <field name="Description">The description of the found result.</field>        
    /// <field name="IsSponsored">A Boolean value that indicates whether the found result is a paid advertisement.</field>  
    /// <field name="LatLong">A VELatLong Class object that represents the location of the found result.</field>  
    /// <field name="Name">The name of the found result.</field>
    /// <field name="Phone">The telephone number of the found result. </field>
    /// <field name="FindType">Gets or sets the VEFindType Enumeration that represents the type of Find that was performed.</field>  
    /// <field name="Shape">A reference to the VEShape Class object corresponding to this FindResult object. The VEShape object represents the result's pushpin displayed on the map.</field>
};

VEFindResult.prototype =
{
    Description: null,
    IsSponsored: null,
    LatLong: null,
    Name: null,
    Phone: null,
    FindType: null,
    Shape: null
}

