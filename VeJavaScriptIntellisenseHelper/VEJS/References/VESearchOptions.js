VESearchOptions = function ()
{
    /// <summary>Contains additional search options for the VEMap.Search Method.</summary>
    /// <field name="BoundingRectangle">A VELatLongRectangle Class that defines the area to search. If this property is not specified, the current map view is used. The default value is null.</field>        
    /// <field name="CreateResults">A Boolean value that specifies whether VEShape objects are created. The default value is true.</field>        
    /// <field name="FindType">A VEFindType Enumeration value that specifies the type of search performed. The only supported value is VEFindType.Businesses.</field>        
    /// <field name="NumberOfResults">An integer that defines the number of results to be returned, starting at StartIndex. The default value is 10, the minimum value is 1, and the maximum value is 20.</field>        
    /// <field name="SetBestMapView ">A Boolean value that specifies whether the map control moves the view to the first location match. The default value is true.</field>        
    /// <field name="ShapeLayer">A VEShapeLayer Class object that will contain the VEShape objects created as a result of this search. Optional. If the shape layer is not specified, the pins are added to the base map layer.</field> 
    /// <field name="ShowResults">A Boolean value indicating whether the VEShape objects are visible. Optional. The default value is true.</field> 
    /// <field name="StartIndex">An integer specifying the beginning index of the results returned. Optional. The default value is 0.</field> 
    /// <field name="UseDefaultDisambiguation">A Boolean value indicating whether to show the disambiguation dialog if there is more than one result with high match confidence. The default value is true.</field> 
};

VESearchOptions.prototype =
{
    BoundingRectangle: null,
    CreateResults: null,
    FindType: null,
    NumberOfResults: null,
    SetBestMapView: null,
    ShapeLayer: null,
    ShowResults: null,
    StartIndex: null,
    UseDefaultDisambiguation: null
}

