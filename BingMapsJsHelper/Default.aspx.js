/// <reference path="BMJS/Microsoft.Maps-vsdoc.js" />

// NOTE:    The above reference is used only at design time.
//          It provides a skeleton of the Bing Maps API to enable 
//          intellisense.  Notice that the Default.aspx 
//          page DOES NOT reference Microsoft.Maps-vsdoc.js.
//          At run time, we use the real Bing Maps API.

var map;

function pageLoad()
{
    // Type the following commented code to experience
    // JavaScript Intellisense:

    map = new Microsoft.Maps.Map(document.getElementById("mapElement"), {
        credentials: 'YOUR_BING_MAPS_KEY',
        mapTypeId: Microsoft.Maps.MapTypeId.arial
    });


    Microsoft.Maps.Events.addHandler(map, 'click', function(args){
        //Temporary reference to provide intellisense. Remove before running code.
        //args = new AnonymousObject.MouseEventArgs();

        var map = args.target;
    });
    
    var loc = new Microsoft.Maps.Location(45, -110);

    var pin = new Microsoft.Maps.Pushpin(loc);
    map.entities.push(pin);    

    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', {
        callback: function () {
            var directions = new Microsoft.Maps.Directions.DirectionsManager(map);
            directions.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ address: 'Seattle' }));
            directions.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ location: loc }));
            directions.calculateDirections();
        }
    });    
}
