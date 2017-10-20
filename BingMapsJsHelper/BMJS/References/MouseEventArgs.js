(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.MouseEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary>
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.MouseEventArgs.prototype = {
        /// <field type='String'>The event that occurred.</field>
        eventName: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. If this property is set to true, the default map control behavior for the event is cancelled.</field>
        handled: {},
        /// <field type='Boolean'>A boolean indicating if the primary button (such as the left mouse button or a tap on a touch screen) was used.</field>
        isPrimary: {},
        /// <field type='Boolean'>A boolean indicating if the secondary mouse button (such as the right mouse button) was used.</field>
        isSecondary: {},
        /// <field type='Boolean'>A boolean indicating whether the event that occurred was a touch event.</field>
        isTouchEvent: {},
        /// <field type='object'>The original browser event.</field>
        originalEvent: {},
        /// <field type='Number'>The x-value of the pixel coordinate on the page of the mouse cursor.</field>
        pageX: {},
        /// <field type='Number'>The y-value of the pixel coordinate on the page of the mouse cursor.</field>
        pageY: {},
        /// <field type='object'>The object that fired the event.</field>
        target: {},
        /// <field type='String'>The type of the object that fired the event. Valid values include the following: ‘map’, ‘polygon’, ‘polyline’, or ‘pushpin’</field>
        targetType: {},
        /// <field type='Number'>The number of units that the mouse wheel has changed.</field>
        wheelDelta: {},
        getX: function () {
            /// <summary>
            /// Returns the x-value of the pixel coordinate, relative to the map, of the mouse.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getY: function () {
            /// <summary>
            /// Returns the y-value of the pixel coordinate, relative to the map, of the mouse.
            /// </summary>
            /// <returns type='Number'></returns>
        }
    };

})(this);