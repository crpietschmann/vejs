VELatLongRectangle = function(TopLeftLatLong, BottomRightLatLong, TopRightLatLong, BottomLeftLatLong) 
{
    /// <summary>Initializes a new instance of the VELatLongRectangle object.</summary>
    /// <param name="TopLeftLatLong" type="VELatLong">A VELatLong Class object that specifies the latitude and longitude of the upper-left corner of the map view.</param>
    /// <param name="BottomRightLatLong" type="VELatLong">A VELatLong Class object that specifies the latitude and longitude of the lower-right corner of the map view.</param>
    /// <param name="TopRightLatLong" type="VELatLong">If the map is in 3D mode, a VELatLong Class object that specifies the latitude and longitude of the upper-right corner of the map view.</param>
    /// <param name="BottomLeftLatLong" type="VELatLong">If the map is in 3D mode, a VELatLong Class object that specifies the latitude and longitude of the lower-left corner of the map view.</param>
   
    /// <field name="TopLeftLatLong" type="VELatLong">A VELatLong Class object that specifies the latitude and longitude of the upper-left corner of the map view.</field>
    /// <field name="BottomRightLatLong" type="VELatLong">A VELatLong Class object that specifies the latitude and longitude of the lower-right corner of the map view.</field>
    /// <field name="TopRightLatLong" type="VELatLong">If the map is in 3D mode, a VELatLong Class object that specifies the latitude and longitude of the upper-right corner of the map view.</field>
    /// <field name="BottomLeftLatLong" type="VELatLong">If the map is in 3D mode, a VELatLong Class object that specifies the latitude and longitude of the lower-left corner of the map view.</field>
 }

VELatLongRectangle.prototype =
{   
    TopLeftLatLong: null,
    BottomRightLatLong: null,
    TopRightLatLong: null,
    BottomLeftLatLong: null
}

