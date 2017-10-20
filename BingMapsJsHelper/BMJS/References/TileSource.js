(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.TileSource = function (options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileSource class.
        /// </summary>
        /// <param name="options" type="Object">{        
        /// <para>uriConstructor (string|function): Required: A formatted Url (or callback function that creates the Url) to retrieve tiles from the tile source. The uriConstructor will replace {subdomain} and {quadkey}. If a callback function is used it will recieve one parameter object of format: { levelOfDetail, x, y },</para>
        /// <para>height (number): The pixel height of each tile in the tile source. The default value is 256.,</para>
        /// <para>width (number): The pixel width of each tile in the tile source. The default value is 256.</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileSource class.
        /// </summary>
        /// <param name="options" type="AnonymousObject.TileSourceOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.TileSource"/>
    };

    m.TileSource.prototype = {
        getHeight: function () {
            /// <summary>
            /// Returns the pixel height of each tile in the tile source.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getUriConstructor: function () {
            /// <signature>
            /// <summary>
            /// Returns a string that constructs tile URLs used to retrieve tiles for the tile layer.
            /// </summary>
            /// <returns type='String'></returns>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the callback function that constructs tile URLs used to retrieve tiles for the tile layer. The function takes in an object of format: { levelOfDetail:number, x:number, y:number }.
            /// </summary>
            /// <returns type="function"></returns>
            /// </signature>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the pixel width of each tile in the tile source.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the TileSource object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.TileSource.__class = true;

})(this);