VEMapViewSpecification = function(center, zoom, altitude, pitch, heading)
{
    /// <summary>Initializes a new instance of the VEMapViewSpecification object.</summary>
    /// <param name="center" type="VELatLong">A VELatLong Class object that specifies the center point of the map. Required.</param>
    /// <param name="zoom" type="Number">An integer that represents the zoom level of the map. In Mode2D: required; In Mode3D: ignored when altitude is specified.</param>
    /// <param name="altitude" type="Number">If VEMapMode Enumeration is set to Mode3D, the altitude of the view, in meters above the geoid.</param>
    /// <param name="pitch" type="Number">If VEMapMode Enumeration is set to Mode3D, the pitch of the view, in degrees. A value of –90 is straight down and a value of 0 is level.</param>
    /// <param name="heading" type="Number">If VEMapMode Enumeration is set to Mode3D, the heading of the view, in compass degrees. A value of 0 or 360 is true north.</param>
 }
 
 