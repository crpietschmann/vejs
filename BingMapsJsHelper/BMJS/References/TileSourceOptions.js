(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.TileSourceOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.TileSourceOptions.prototype = {
        /// <field type='Number'>The pixel height of each tile in the tile source. The default value is 256. The specified height needs to be a multiplier of 2 of the current projection’s tile height for the tiles to be shown. For example, since Mercator tile source tiles are 256x256, this projection supports tiles that are 64x64, 128x128, 256x256, 512x512, or any combination of these.</field>
        height: {},
        /// <field type='String'>The string that constructs the URLs used to retrieve tiles from the tile source. This property is required. The uriConstructor will replace {subdomain} and {quadkey}. You can also set this to a callback function that receives a tile URL with location (x,y) and zoom level properties. This is useful when you want to use tiles with x/y/zoom URL structure, or if you are connecting to a Web Map Service (WMS) and need to pass the tile bounding box in the URL. If a callback function is used it will recieve one parameter object of format: { levelOfDetail:number, x:number, y:number }</field>
        uriConstructor: {},
        /// <field type='Number'>The pixel width of each tile in the tile source. The default value is 256. The specified width needs to be a multiplier of 2 of the current projection’s tile width for the tiles to be shown. For example, since Mercator tile source tiles are 256x256, this projection supports tiles that are 64x64, 128x128, 256x256, 512x512, or any combination of these.</field>
        width: {}
    };

})(this);