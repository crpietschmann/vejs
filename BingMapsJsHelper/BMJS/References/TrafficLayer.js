(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Traffic = window.Microsoft.Maps.Traffic || {}

    var m = Microsoft.Maps.Traffic;

    m.TrafficLayer = function (map) {
        /// <deprecated type="deprecate">
        /// Requires Microsoft.Maps.Traffic module.
        /// <para>Initializes a new instance of the TrafficLayer class.</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Traffic", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </deprecated>

        /// <param name="map" type="Microsoft.Maps.Map"></param>

        /// <returns type="Microsoft.Maps.Traffic.TrafficLayer"/>
    };

    m.TrafficManager.prototype = {
        hide: function () {
            /// <summary>
            /// Hides traffic data.
            /// </summary>
        },
        getTileLayer: function () {
            /// <summary>
            /// Returns the traffic layer.
            /// </summary>
            /// <returns type="Microsoft.Maps.TileLayer"></returns>
        },
        show: function () {
            /// <summary>
            /// Displays traffic data.
            /// </summary>
        }
    };

    m.TrafficLayer.__class = true;

})(this);