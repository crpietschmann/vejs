(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Directory = function () {
        /// <summary>
        /// Represents a venue map directory, which is a list of businesses and features found within the venue.
        /// <para>Supported Events: click, mouseout, mouseover</para>
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Directory"/>
    };

    m.Directory.prototype = {
        addToDOM: function (div, sortOrder, to_group_or_not) {
            /// <summary>
            /// Adds the venue map directory to the DOM (document object model). The specified div becomes the parent element of the venue map directory. This method does nothing if the createUIElements is not called first.
            /// </summary>
            /// <param name="div" type="HTMLElement"></param>
            /// <param name="sortOrder" type="Microsoft.Maps.VenueMaps.DirectorySortOrder"></param>
            /// <param name="to_group_or_not" type="Microsoft.Maps.VenueMaps.DirectoryGrouping"></param>
        },
        createUIElements: function () {
            /// <summary>
            /// Creates the necessary UI elements and data structures to visualize the venue map directory. After this method is called, use the addToDOM method to add the elements to the DOM.
            /// </summary>
        },
        handleMouseClick: function (e) {
            /// <summary>
            /// The base method to call if you override the click event.
            /// </summary>
            /// <param name="e" type="Object{eventArgs: MouseEventArgs, Microsoft.Maps.VenueMaps.Primitive}"></param>
        },
        handleMouseOut: function (e) {
            /// <summary>
            /// The base method to call if you override the mouseout event.
            /// </summary>
            /// <param name="e" type="Object{eventArgs: MouseEventArgs, Microsoft.Maps.VenueMaps.Primitive}"></param>
        },
        handleMouseOver: function (e) {
            /// <summary>
            /// The base method to call if you override the mouseover event.
            /// </summary>
            /// <param name="e" type="Object{eventArgs: MouseEventArgs, Microsoft.Maps.VenueMaps.Primitive}"></param>
        },
        isInDOM: function () {
            /// <summary>
            /// Returns a boolean indicating whether the venue map directory is in the DOM.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        removeFromDOM: function () {
            /// <summary>
            /// Removes the venue map directory from the DOM. It is recommended that you use this method to remove the venue map directory from the DOM instead of using the removeChild method of the DOM.
            /// </summary>

        },
        setHeight: function (height) {
            /// <summary>
            /// Sets the height of the venue map directory, as a percentage of the base map’s height or in absolute pixels. For example, to set the directory as 90% of the base map’s height, call setHeight(.9). To set the height as 800 pixels, call setHeight(800).
            /// </summary>
            /// <param name="height" type='Number'></param>
        }
    };

    m.Directory.__class = true;

})(this);