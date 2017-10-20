(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.VenueMapCreationOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.VenueMapCreationOptions.prototype = {
        /// <field type='function'> The function must accept two parameters: an integer which is an error code and an object that contains the arguments passed to the create method of the VenueMapFactory. </field>
        error: function(errorCode, options){
            /// <summary>
            /// The function to call if the venue map was not successfully created.
            /// </summary>
            /// <param name="errorCode" type="Number">
            /// The error codes are:
            /// <para>1) The metadata needed to create the venue map was not found because of a 404 or other web exception, or because the metadata was found but was empty.</para>
            /// <para>2) The venue map metadata is invalid.</para>
            /// <para>3) A timeout has occurred trying to retrieve the venue map metadata.</para>
            /// </param>
            /// <param name="options" type="AnonymousObject.VenueMapCreationOptions">Options used to request venue map creation.</param>
        },
        /// <field type='function'>The function to call if the venue map was successfully created. The function must accept two parameters: a VenueMap and an object that contains the arguments passed to the create method of the VenueMapFactory.</field>
        success: function (venue, options) {
            /// <summary>
            /// The function to call if the venue map was successfully created.
            /// </summary>
            /// <param name="venue" type="Microsoft.Maps.VenueMaps.VenueMap"/>
            /// <param name="options" type="AnonymousObject.VenueMapCreationOptions">Options used to request venue map creation.</param>
        },
        /// <field type='String'>A string that identifies the venue map to display.</field>
        venueMapId: {}
    };

})(this);