VELatLong = function(latitude, longitude, altitude, altitudeMode)
{
    /// <summary>Initializes a new instance of the VELatLong Class.</summary>
    /// <param name="latitude" type="Number">The latitude of a single point on the globe.</param>
    /// <param name="longitude" type="Number">The longitude of a single point on the globe.</param>
    /// <param name="altitude" type="Number">The altitude of a single point on the globe.</param>
    /// <param name="altitudeMode" type="VEAltitudeMode">A VEAltitudeMode Enumeration value representing the mode in which an altitude is represented.</param>
    /// <field name="Altitude">Specifies the altitude of a single point on the globe.</field>        
    /// <field name="AltitudeMode">Specifies the mode in which an altitude is represented.</field>        
    /// <field name="Latitude">Specifies the latitude of a single point on the globe.</field>        
    /// <field name="Longitude">Specifies the longitude of a single point on the globe.</field>        
}

VELatLong.prototype = 
{
    Altitude: null,
    AltitudeMode: null,
    Latitude: null,
    Longitude: null,
    
    SetAltitude: function(altitude, mode)
    {
        /// <summary>Initializes a new instance of the VELatLong Class.</summary>
        /// <param name="altitude" type="Number">The altitude of a single point on the globe.</param>
        /// <param name="altitudeMode" type="VEAltitudeMode">A VEAltitudeMode Enumeration value representing the mode in which an altitude is represented.</param>
    }
}

