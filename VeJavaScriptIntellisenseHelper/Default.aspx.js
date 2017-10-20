/// <reference path="VEJS/VeJavaScriptIntellisenseHelper.js" />

// NOTE:    The above reference is used only at design time.
//          It provides a skeleton of the VE API to enable 
//          intellisense.  Notice that the Default.aspx 
//          page DOES NOT reference VeJavaScriptIntellisenseHelper.js.
//          At run time, we use the real VE API.

// KNOWN ISSUE: Due to the nature of JavaScript, there is no way
//              to know the type of a page level variable inside
//              a given function in the page when the variable
//              was instatiated in another function.  The side
//              effect of this is that you will not get 
//              intellisense for a page leverl map variable 
//              outside of the function in which it was instantiated.

// WORKAROUND:
//  USE AT DESIGN TIME TO GET INTELLISENSE FOR A PAGE LEVEL map VARIABLE
var map;

if (typeof (DESIGN_TIME) == 'undefined')
{
    map = null;
}
else
{
    var map = new VEMap();
}

// WORKAROUND:
//  YOU WILL PROBABLY WANT TO COMMENT THE WORKAROUND ABOVE AND UNCOMMENT THE LINE
//  BELOW FOR PRODUCTION.
//var map; 

//NOTE:
//  You really don't have to comment/uncomment while you are developing.  
//  You just want to make sure you fix things for production:).  

function pageLoad()
{
    // Type the following commented code to experience
    // JavaScript Intellisense:
    
    //map = new VEMap("myMap");
    //map.LoadMap();
    
    
}

function btnZoomIn_Click()
{
    // Type the following commented code to experience
    // JavaScript Intellisense:

    //map.ZoomIn();   NOTE: this line of code will not show intellisense without the workaround explained at the beginning of this file.
}