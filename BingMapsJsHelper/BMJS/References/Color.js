(function(window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Color = function (a, r, g, b) {
        /// <summary>
        /// Initializes a new instance of the Color class. The a parameter represents opacity. The range of valid values for all parameters is 0 to 255.
        /// </summary>

        /// <param name="a" type='Number'>The opacity of the color. The range of valid values is 0 to 255.</param>
        /// <param name="r" type='Number'>The red value of the color. The range of valid values is 0 to 255.</param>
        /// <param name="g" type='Number'>The green value of the color. The range of valid values is 0 to 255.</param>
        /// <param name="b" type='Number'>The blue value of the color. The range of valid values is 0 to 255.</param>
                
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Color.prototype = {
        /// <field type='Number'>The opacity of the color. The range of valid values is 0 to 255.</field>
        a: {},
        /// <field type='Number'>The red of the color. The range of valid values is 0 to 255.</field>
        r: {},
        /// <field type='Number'>The green of the color. The range of valid values is 0 to 255.</field>
        g: {},
        /// <field type='Number'>The blue of the color. The range of valid values is 0 to 255.</field>
        b: {},
        clone: function () {
            /// <summary>
            /// Returns a copy of the Color object.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getOpacity: function(){
            /// <summary>
            /// Returns the opacity of the Color as a value between 0 (a=0) and 1 (a=255).
            /// </summary>
            /// <returns type='Number'/> 
        },  
        toHex: function () {
            /// <summary>
            /// Converts the Color into a 6-digit hex string. Opacity is ignored. For example, a Color with values (255,0,0,0) is returned as hex string #000000.
            /// </summary>
            /// <returns type='String'/> 
        },
        toString: function () {
            /// <summary>
            /// Converts the Color object to a string.
            /// </summary>
            /// <returns type='String'/> 
        }
    };

    /* Static Methods */

    m.Color.clone = function () {
        /// <summary>
        /// Returns a copy of the Color object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Color.fromHex = function (hex) {
        /// <summary>
        /// Returns the pushpin icon.
        /// </summary>
        /// <param name="hex" type='String'></param>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Color.__class = true;

})(this);