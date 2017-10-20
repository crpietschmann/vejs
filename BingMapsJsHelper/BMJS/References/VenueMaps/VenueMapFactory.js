(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.VenueMapFactory = function (map) {
        /// <summary>
        /// Represents one floor map of a venue map.
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.VenueMaps", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="map" type="Microsoft.Maps.Map"></param>

        /// <returns type="Microsoft.Maps.VenueMaps.VenueMapFactory"/>
    };

    m.VenueMapFactory.prototype = {
        create: function (options) {
            /// <signature>
            /// <summary>
            /// Creates a venue map. If the venue map is created successfully, a VenueMap is returned to the function specified in the success property of the VenueMapCreationOptions. You can display a venue map using the show method of the VenueMap Class.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>error (function), success (function), venueMapId (string)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Creates a venue map. If the venue map is created successfully, a VenueMap is returned to the function specified in the success property of the VenueMapCreationOptions. You can display a venue map using the show method of the VenueMap Class.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>error (function): The function to call if the venue map was not successfully created. The function must accept two parameters: an integer which is an error code and an object that contains the arguments passed to the create method of the VenueMapFactory.,</para>
            /// <para>success (function): The function to call if the venue map was successfully created. The function must accept two parameters: a VenueMap and an object that contains the arguments passed to the create method of the VenueMapFactory.,</para>
            /// <para>venueMapId (string): A string that identifies the venue map to display.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Creates a venue map. If the venue map is created successfully, a VenueMap is returned to the function specified in the success property of the VenueMapCreationOptions. You can display a venue map using the show method of the VenueMap Class.
            /// </summary>
            /// <param name="options" type="AnonymousObject.VenueMapCreationOptions"/>
            /// </signature>
        },
        getNearbyVenues: function (options) {
            /// <signature>
            /// <summary>
            /// Searches for venue maps within a specified distance. The callback function must accept a Microsoft.Maps.VenueMaps.NearbyVenue[].
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>callback (function), location (Microsoft.Maps.Location), map (Microsoft.Maps.Map), radius (double)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Searches for venue maps within a specified distance. The callback function must accept a NearbyVenue array.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>callback (function): The function to call when the search is completed. The function must accept an Microsoft.Maps.VenueMaps.NearbyVenue[],</para>
            /// <para>location (Microsoft.Maps.Location): The center of the circle in which to search for nearby venue maps.,</para>
            /// <para>map (Microsoft.Maps.Map): The base map.,</para>
            /// <para>radius (double): The radius, in meters, of the circle in which to search for nearby venue maps.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Searches for venue maps within a specified distance. The callback function must accept a NearbyVenue array.
            /// </summary>
            /// <param name="options" type="AnonymousObject.NearbyVenueMapOptions"/>
            /// </signature>
        }
    };

    m.VenueMapFactory.__class = true;

})(this);