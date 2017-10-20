(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    /* Static Methods */

    m.Events.addHandler = function (target, eventName, handler) {
        /// <summary>
        /// Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        /// Microsoft.Maps.Events.addHandler(map,'viewchangeend’, function(e){ //Handle the event }); 
        /// </summary>
        /// <param name="target" type="Object">The object ot attach the event to.</param>
        /// <param name="eventName" type='String'>Name of the event to monitor.</param>
        /// <param name="handler" type="function(AnonymousObject.EventCallback)">Callback function that is called when this event is triggered.</param>
        /// <returns type="Object"/>
    };

    m.Events.addThrottledHandler = function (target, eventName, handler, throttleInterval) {
        /// <summary>
        /// Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified in the throttleInterval parameter. The last occurrence of the event is called after the specified throttleInterval.
        /// </summary>
        /// <param name="target" type="Object">The object ot attach the event to.</param>
        /// <param name="eventName" type='String'>Name of the event to monitor.</param>
        /// <param name="handler" type="function(AnonymousObject.EventCallback)">Callback function that is called when this event is triggered.</param>
        /// <param name="throttleInterval" type='Number'>The minimium interval time between events in milliseconds.</param>
        /// <returns type="Object"/>
    };

    m.Events.hasHandler = function (target, eventName) {
        /// <summary>
        /// Checks if the target has any attached event handler.
        /// </summary>
        /// <param name="target" type="Object">The object ot attach the event to.</param>
        /// <param name="eventName" type='String'>Name of the event to monitor.</param>
        /// <returns type='Boolean'/>
    };

    m.Events.invoke = function (target, eventName, args) {
        /// <summary>
        /// Invokes an event on the target. This causes all handlers for the specified eventName to be called.
        /// </summary>
        /// <param name="target" type="Object">The object ot attach the event to.</param>
        /// <param name="eventName" type='String'>Name of the event to monitor.</param>
        /// <param name="args" type="Object">A set of arguments to pass on to the event.</param>
    };

    m.Events.removeHandler = function (handlerId) {
        /// <summary>
        /// Detaches the specified handler from the event. The handlerId is returned by the addHandler and addThrottledHandler methods.
        /// </summary>
        /// <param name="handlerId" type="Object">An object that was returned by either addHandler or addThrottledHandler methods</param>
    };

    AnonymousObject.EventCallback = function (event) {
        /// <signature>
        /// <summary>
        /// Events: click, dblclick, mousedown, mouseout, mouseover, mouseup, mousewheel, rightclick
        /// </summary>
        /// <param name="event" type="AnonymousObject.MouseEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: keydown, keypress, keyup
        /// </summary>
        /// <param name="event" type="AnonymousObject.KeyEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: copyrightchanged, imagerychanged, maptypechanged, optionschanged, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart
        /// </summary>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: entitiyadded, entitychanged, entityremoved
        /// <para>Target: Microsoft.Maps.EntityCollection</para>
        /// </summary>
        /// <param name="collection" type="Microsoft.Maps.EntityCollection"/>
        /// <param name="entity" type="Object">The entity that triggered the event: Pushpin, Polyline, Polygon, Infobox, TileLayer, EntityCollection</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: drag
        /// <para>Target: Microsoft.Maps.Pushpin</para>
        /// </summary>
        /// <param name="event" type="Object">{ entity: Object }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: dragend, dragstart
        /// <para>Target: Microsoft.Maps.Pushpin</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.MouseEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: changed, geocoded, reverseGeocoded
        /// <para>Target: Microsoft.Maps.Directions.Waypoint</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.WaypointEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: changed, geocoded, reverseGeocoded
        /// <para>Target: Microsoft.Maps.Directions.Waypoint</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.WaypointEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: waypointadded, waypointremoved
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.WaypointEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: directionsError
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DirectionsErrorEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: directionsUpdated
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DirectionsEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: itineraryStepClicked, mouseEnterStep, mouseLeaveStep
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DirectionsStepEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterStepRender, beforeStepRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DirectionsStepRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: beforeDisambiguationRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DisambiguationRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: dragDropCompleted
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: mouseEnterRouteSelector, mouseLeaveRouteSelector, routeSelectorClicked
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.RouteSelectorEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterRouteSelectorRender, beforeRouteSelectorRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.RouteSelectorRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterRouteSelectorRender, beforeRouteSelectorRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.RouteSelectorRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterSummaryRender, beforeSummaryRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.RouteSummaryRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterWaypointRender, beforeWaypointRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.WaypointRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: close
        /// <para>Target: Microsoft.Maps.VenueMaps.VenueMap</para>
        /// </summary>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: click, footprintclick, mouseout, mouseover
        /// <para>Target: Microsoft.Maps.VenueMaps.VenueMap</para>
        /// </summary>
        /// <param name="event" type="Microsoft.Maps.VenueMaps.Primitive"/>
        /// </signature>      
    };

})(this);