(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Traffic = window.Microsoft.Maps.Traffic || {}

    var m = Microsoft.Maps.Traffic;

    m.TrafficManager = function (map) {
        /// <summary>
        /// Requires Microsoft.Maps.Traffic module.
        /// <para>Initializes a new instance of the TrafficManager class.</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Traffic", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>

        /// <param name="map" type="Microsoft.Maps.Map"></param>

        /// <returns type="Microsoft.Maps.Traffic.TrafficManager"/>
    };

    m.TrafficManager.prototype = {
        hide: function () {
            /// <summary>
            /// Hides all traffic data.
            /// </summary>
        },
        hideFlow: function () {
            /// <summary>
            /// Hides the traffic flow layer.
            /// </summary>
        },
        hideIncidents: function () {
            /// <summary>
            /// Hides all traffic incidents.
            /// </summary>
        },
        hideLegend: function () {
            /// <summary>
            /// Hides the traffic legend.
            /// </summary>
        },
        show: function () {
            /// <summary>
            /// Displays all traffic data.
            /// </summary>
        },
        showFlow: function () {
            /// <summary>
            /// Displays the traffic flow layer.
            /// </summary>
        },
        showIncidents: function () {
            /// <summary>
            /// Displays all traffic incidents.
            /// </summary>
        },
        showLegend: function () {
            /// <summary>
            /// Displays the traffic legend.
            /// </summary>
        }
    };

    m.TrafficManager.__class = true;

})(this);