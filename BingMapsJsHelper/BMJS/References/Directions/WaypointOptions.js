(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.WaypointOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.WaypointOptions.prototype = {
        /// <field type='String'>The address string, business name, or search string of the waypoint. For example, the following strings are valid for this parameter: “Seattle”, “Microsoft”, “pizza”, or “pizza Seattle”. Either the address or location property must be specified.</field>
        address: {},
        /// <field type='Microsoft.Maps.Directions.BusinessDetails'>The business details of the waypoint, if it is a business.</field>
        businessDetails: {},
        /// <field type='DOMElement'>The DOM element inside which the waypoint disambiguation list will be rendered. If this property is not set, the disambiguation list is rendered inside the itineraryContainer.</field>
        disambiguationContainer: {},
        /// <field type='Boolean'>A boolean indicating whether the waypoint location is the exact location. The default value is false.</field>
        exactLocation: {},
        /// <field type='Boolean'>A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to true if you just want the route to pass through this location. The default value is false.</field>
        isViapoint: {},
        /// <field type='Microsoft.Maps.Location'>The location of the waypoint. Either the address or location property must be specified.</field>
        location: {},
        /// <field type='Microsoft.Maps.Pushpin'>The custom pushpin to use to represent this waypoint. This property overrides any pushpin options that apply to this waypoint that have been set in the DirectionsRenderOptions Object.</field>
        pushpin: {},
        /// <field type='String'>The short address of the waypoint.</field>
        shortAddress: {}
    };

})(this);