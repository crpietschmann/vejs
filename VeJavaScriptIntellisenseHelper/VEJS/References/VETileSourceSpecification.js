VETileSourceSpecification = function(tileSourceId, tileSource, numServers, bounds, minZoom, maxZoom, getTilePath, opacity, zindex) 
{
    /// <summary>Initializes a new instance of the VETileSourceSpecification object.</summary>
    /// <param name="tileSourceId" type="Number">A unique identifier for the layer. Each layer on a map must have a unique Identifier. Required.</param>
    /// <param name="tileSource" type="String">The location of the tiles. Required.</param>
    /// <param name="numServers" type="Number">The number of servers on which the tiles are hosted. Optional. The default value is 1.</param>
    /// <param name="bounds" type="Array">An array of VELatLongRectangle Class objects that specifies the approximate coverage area of the layer. Optional.</param>
    /// <param name="minZoom" type="Number">The minimum zoom level at which to display the custom tile source. Optional.</param>
    /// <param name="maxZoom" type="Number">The maximum zoom level at which to display the custom tile source. Optional.</param>
    /// <param name="getTilePath" type="String">When viewing a map in 2D mode, the function that determines the correct file names for the tiles. Optional.</param>
    /// <param name="opacity" type="Number">The opacity level of the tiles when displayed on the map. 0.0 to 1.0. Optional.</param>
    /// <param name="zindex" type="Number">The z-index value for the tiles. Optional.</param>
    
    /// <field name="Bounds" type="Array">An array of VELatLongRectangle Class objects that specifies the approximate coverage area of the layer.</field>
    /// <field name="ID" type="Number">The unique identifier for the layer. Each tile layer on a map must have a unique ID.</field>
    /// <field name="MaxZoom" type="Number">The maximum zoom level at which to display the custom tile source.</field>
    /// <field name="MinZoom" type="Number">The minimum zoom level at which to display the custom tile source.</field>
    /// <field name="NumServers" type="Number">The number of servers on which the tiles are hosted.</field>
    /// <field name="Opacity" type="Number">Specifies the opacity level of the tiles when displayed on the map. 0.0 to 1.0.</field>
    /// <field name="TileSource" type="String">The location of the tiles.</field>
    /// <field name="ZIndex" type="Number">Specifies the z-index for the tiles.</field>
}

VETileSourceSpecification.prototype =
{   
    Bounds: null,
    ID: null,
    MaxZoom: null,
    MinZoom: null,
    NumServers: null,
    Opacity: null,
    TileSource: null,
    ZIndex: null
}

