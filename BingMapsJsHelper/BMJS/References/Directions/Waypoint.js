(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.Waypoint = function (options) {
        /// <signature>
        /// <summary>
        /// Represents a route waypoint.
        /// <para>Supported Events: changed, geocoded, reverseGeocoded</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>address (string), businessDetails (Microsoft.Maps.Directions.BusinessDetails), disambiguationContainer (DOMElement), exactLocation (boolean), isViapoint (boolean), location (Microsoft.Maps.Location), pushpin (Microsoft.Maps.Pushpin), shortAddress (string)</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a route waypoint.
        /// <para>Supported Events: changed, geocoded, reverseGeocoded</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>address (string): The address string, business name, or search string of the waypoint. For example, the following strings are valid for this parameter: “Seattle”, “Microsoft”, “pizza”, or “pizza Seattle”. Either the address or location property must be specified.,</para>
        /// <para>businessDetails (Microsoft.Maps.Directions.BusinessDetails): The business details of the waypoint, if it is a business.,</para>
        /// <para>disambiguationContainer (DOMElement): The DOM element inside which the waypoint disambiguation list will be rendered. If this property is not set, the disambiguation list is rendered inside the itineraryContainer.,</para>
        /// <para>exactLocation (boolean): A boolean indicating whether the waypoint location is the exact location. The default value is false.,</para>
        /// <para>isViapoint (boolean): A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to true if you just want the route to pass through this location. The default value is false.,</para>
        /// <para>location (Microsoft.Maps.Location): The location of the waypoint. Either the address or location property must be specified.,</para>
        /// <para>pushpin (Microsoft.Maps.Pushpin): The custom pushpin to use to represent this waypoint. This property overrides any pushpin options that apply to this waypoint that have been set in the DirectionsRenderOptions Object.,</para>
        /// <para>shortAddress (string): The short address of the waypoint.</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a route waypoint.
        /// <para>Supported Events: changed, geocoded, reverseGeocoded</para>
        /// </summary>
        /// <param name="options" type="AnonymousObject.WaypointOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Directions.Waypoint"/>
    };

    m.Waypoint.prototype = {
        clear: function () {
            /// <summary>
            /// Clears all options associated with this waypoint.
            /// </summary>
        },
        dispose: function () {
            /// <summary>
            /// Releases any resources associated with the waypoint.
            /// </summary>
        },
        getAddress: function () {
            /// <summary>
            /// Returns the address associated with the waypoint.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getBusinessDetails: function () {
            /// <summary>
            /// Returns the business details associated with the waypoint.
            /// </summary>
            /// <returns type='Microsoft.Maps.Directions.BusinessDetails'></returns>
        },
        getDisambiguationContainer: function () {
            /// <summary>
            /// Returns the container element for the waypoint disambiguation list.
            /// </summary>
            /// <returns type='DOMElement'></returns>
        },
        getDisambiguationResult: function () {
            /// <summary>
            /// Returns the result of the waypoint geocoding disambiguation.
            /// </summary>
            /// <returns type='Microsoft.Maps.Directions.Disambiguation'></returns>
        },
        getLocation: function () {
            /// <summary>
            /// Returns the location of the waypoint.
            /// </summary>
            /// <returns type='Microsoft.Maps.Location'></returns>
        },
        getPushpin: function () {
            /// <summary>
            /// Returns the custom pushpin associated with this waypoint, if one has been specified.
            /// </summary>
            /// <returns type='Microsoft.Maps.Pushpin'></returns>
        },
        getShortAddress: function () {
            /// <summary>
            /// Returns the short address for the waypoint.
            /// </summary>
            /// <returns type='String'></returns>
        },
        isExactLocation: function () {
            /// <summary>
            /// Returns a boolean indicating whether the waypoint location is the exact location.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        isViapoint: function () {
            /// <summary>
            /// Returns a boolean value indicating whether the waypoint is a via point. A via point is a location that your route is guaranteed to pass through. There can be multiple via points between two stop points.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the waypoint. For these options to take effect, you must recalculate the route.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>address (string), businessDetails (Microsoft.Maps.Directions.BusinessDetails), disambiguationContainer (DOMElement), exactLocation (boolean), isViapoint (boolean), location (Microsoft.Maps.Location), pushpin (Microsoft.Maps.Pushpin), shortAddress (string)</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the waypoint. For these options to take effect, you must recalculate the route.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>address (string): The address string, business name, or search string of the waypoint. For example, the following strings are valid for this parameter: “Seattle”, “Microsoft”, “pizza”, or “pizza Seattle”. Either the address or location property must be specified.,</para>
            /// <para>businessDetails (Microsoft.Maps.Directions.BusinessDetails): The business details of the waypoint, if it is a business.,</para>
            /// <para>disambiguationContainer (DOMElement): The DOM element inside which the waypoint disambiguation list will be rendered. If this property is not set, the disambiguation list is rendered inside the itineraryContainer.,</para>
            /// <para>exactLocation (boolean): A boolean indicating whether the waypoint location is the exact location. The default value is false.,</para>
            /// <para>isViapoint (boolean): A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to true if you just want the route to pass through this location. The default value is false.,</para>
            /// <para>location (Microsoft.Maps.Location): The location of the waypoint. Either the address or location property must be specified.,</para>
            /// <para>pushpin (Microsoft.Maps.Pushpin): The custom pushpin to use to represent this waypoint. This property overrides any pushpin options that apply to this waypoint that have been set in the DirectionsRenderOptions Object.,</para>
            /// <para>shortAddress (string): The short address of the waypoint.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the waypoint. For these options to take effect, you must recalculate the route.
            /// </summary>
            /// <param name="options" type="AnonymousObject.WaypointOptions">{
            /// <para>address (string), businessDetails (Microsoft.Maps.Directions.BusinessDetails), disambiguationContainer (DOMElement), exactLocation (boolean), isViapoint (boolean), location (Microsoft.Maps.Location), pushpin (Microsoft.Maps.Pushpin), shortAddress (string)</para>
            /// }</param>
            /// </signature>
        }
    };

    m.Waypoint.__class = true;

})(this);