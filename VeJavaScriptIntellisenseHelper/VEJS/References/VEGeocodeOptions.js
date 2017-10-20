VEGeocodeOptions = function ()
{
    /// <summary>Contains additional geocoding options for the VEMap.Geocode Method.</summary>
    /// <field name="SetBestMapView ">A Boolean value that specifies whether the map control moves the view to the first location match. The default value is true.</field>        
    /// <field name="UseDefaultDisambiguation">A Boolean value indicating whether to show the disambiguation dialog if there is more than one result with high match confidence. The default value is true.</field> 
};

VEGeocodeOptions.prototype =
{
    SetBestMapView: null,
    UseDefaultDisambiguation: null
}

