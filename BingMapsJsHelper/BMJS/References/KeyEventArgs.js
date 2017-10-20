(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.KeyEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.KeyEventArgs.prototype = {
        /// <field type='Boolean'>A boolean indicating if the ALT key was pressed.</field>
        altKey: {},
        /// <field type='Boolean'>A boolean indicating if the CTRL key was pressed.</field>
        ctrlKey: {},
        /// <field type='String'>The event that occurred.</field>
        eventName: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. If this property is set to true, the default map control behavior for the event is cancelled.</field>
        handled: {},
        /// <field type='String'>The ASCII character code that identifies the keyboard key that was pressed.</field>
        keyCode: {},
        /// <field type='object'>The original browser event.</field>
        originalEvent: {},
        /// <field type='Boolean'>A boolean indicating if the SHIFT key was pressed.</field>
        shiftKey: {}
    };

})(this);