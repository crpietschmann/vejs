VEBirdseyeScene = function()
{
    /// <summary>Contains the information about a specific bird's eye image.</summary>
}

VEBirdseyeScene.prototype = 
{
    ContainsLatLong: function(Latlong)
    {
        /// <summary>Determines whether the location specified by a VELatLong Class object is within the current VEBirdseyeScene object.</summary>
        /// <param name="Latlong" type="VELatLong">A VELatLong Class object. Required.</param>
        /// <returns type="Boolean">A Boolean value. True if the location specified by the VELatLong object is within the bounds of the VEBirdseyeScene object.</returns>        
    },
    
    ContainsPixel: function(x, y, zoomLevel)
    {
        /// <summary>Determines whether a specified pixel is within the current VEBirdseyeScene object.</summary>
        /// <param name="x" type="Number">The X component of the pixel. Required.</param>
        /// <param name="y" type="Number">The Y component of the pixel. Required.</param>
        /// <returns type="Boolean">A Boolean value. True if the specified pixel is within the bounds of the VEBirdseyeScene object.</returns>        
    },
    
    GetBoundingRectangle: function()
    {
        /// <summary>Returns an unencrypted and rounded off bounding rectangle for the VEBirdseyeScene object.</summary>
        /// <returns type="VELatLongRectangle">A VELatLongRectangle Class object containing the bounding rectangle.</returns>        
    },
    
    GetHeight: function()
    {
        /// <summary>Returns the height of the image in the current VEBirdseyeScene object, in pixels, at maximum resolution.</summary>
        /// <returns type="Number">The height in pixels.</returns>        
    },
    
    GetID: function()
    {
        /// <summary>Returns the ID of the current VEBirdseyeScene object.</summary>
        /// <returns type="Number">The scene ID as an integer.</returns>        
    },
    
    GetOrientation: function()
    {
        /// <summary>Returns the orientation (VEOrientation Enumeration) of the current VEBirdseyeScene object.</summary>
        /// <returns type="VEOrientation">The VEOrientation Enumeration value.</returns>        
    },
    
    // Not officialy supported anymore
    GetThumbnailFilename: function()
    {
        /// <summary>(NOT OFFICIAL) Returns the file name of the thumbnail image associated with the current VEBirdseyeScene object.</summary>
        /// <returns type="String">The URL of the thumbnail image.</returns>        
    },
    
    GetWidth: function()
    {
        /// <summary>Returns the width of the image in the current VEBirdseyeScene object, in pixels, at maximum resolution.</summary>
        /// <returns type="Number">The width in pixels.</returns>        
    },
    
    LatLongToPixel: function(LatLong, zoomLevel)
    {
        /// <summary>Converts a VELatLong Class object (latitude/longitude pair) to the corresponding pixel on the map.</summary>
        /// <param name="LatLong" type="VELatLong">A VELatLong Class object, which contains the latitude and longitude of a point. This method also accepts an encrypted VELatLong object, as supplied by the VEBirdseyeScene.PixelToLatLong Method.</param>
        /// <param name="zoomLevel" type="Number">The zoom level of the current map view</param>        
        /// <returns type="VEPixel">A pixel location of the VELatLong Class point. This object has two properties, x and y.</returns>        
    },
    
    PixelToLatLong: function(pixel, zoomLevel)
    {
        /// <summary>Converts a point in the bird's eye scene to an encrypted latitude/longitude value.</summary>
        /// <param name="pixel" type="VEPixel">A VEPixel Class object representing a pixel location on the map</param>
        /// <param name="zoomLevel" type="Number">The zoom level of the current map view</param>        
        /// <returns type="String">A String value that represents an encrypted VELatLong object.</returns>        
    }   
}

