VEMapOptions = function()
{
    /// <summary>Contains the options to set when loading the map.</summary>
    /// <field name="BirdseyeOrientation">A VEOrientation Enumeration value indicating the orientation of the bird's eye map. The default value is VEOrientation.North.</field>        
    /// <field name="EnableBirdseye">A Boolean value specifying whether or not to enable the Birdseye map style in the map control.</field>
    /// <field name="EnableDashboardLabels">A Boolean value that specifies whether or not labels appear on the map when a user clicks the Aerial or Birdseye map style buttons on the map control dashboard.</field>
    /// <field name="LoadBaseTiles">A Boolean value indicating whether or not to load the base map tiles. The default value is true.</field>        
}

VEMapOptions.prototype =
{
    BirdseyeOrientation: null,
    EnableBirdseye : null,
    EnableDashboardLabels : null,
    LoadBaseTiles: null
}

