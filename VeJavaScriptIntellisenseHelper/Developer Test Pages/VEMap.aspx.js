/// <reference path="../VEJS/VeJavaScriptIntellisenseHelper.js" />

// NOTE:    The above reference is used only at design time.
//          It provides a skeleton of the VE API to enable 
//          intellisense.  Notice that the Default.aspx 
//          page DOES NOT reference VeJavaScriptIntellisenseHelper.js.
//          At run time, we use the real VE API.

function pageLoad()
{
        //This code below will not run.  I am merely using it to visually verify intellisense.
        
        var map = new VEMap("myMap");
        map.LoadMap();
        
        map.onLoadMap = foo;

        map.AddControl(blah, blah);
        map.AddCustomLayer(blah);
        map.AddShape(blah);
        map.AddShapeLayer(blah);
        map.AddTileLayer(blah,blah);
        map.AttachEvent(blah,blah);        
        map.Clear();               
        map.ClearInfoBoxStyles(); 
        map.DeleteAllShapeLayers();       
        map.DeleteAllShapes();
        map.DeleteControl(blah);
        map.DeleteRoute();
        map.DeleteShape(blah);
        map.DeleteShapeLayer(blah);
        map.DeleteTileLayer(blah);
        map.DetachEvent(blah, blah);
        map.Dispose();
        map.EndContinuousPan();
        map.Find(blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah);
        map.Geocode(blah, blah, blah);
        map.GetAltitude();
        map.GetBirdseyeScene();
        map.GetCenter();
        map.GetDirections(blah,blah)
        map.GetHeading();
        map.GetLeft();
        map.GetMapMode();
        map.GetMapStyle();
        map.GetMapView();
        map.GetPitch();
        map.GetShapeByID(blah);
        map.GetShapeLayerByIndex(blah);
        map.GetShapeLayerCount();
        map.GetTileLayerByID(blah);
        map.GetTileLayerByIndex(blah);
        map.GetTileLayerCount();
        map.GetTop();        
                
        VEMap.GetVersion();       
        
        map.GetZoomLevel();
        map.Hide3DNavigationControl();
        map.HideAllShapeLayers();
        map.HideBaseTileLayer();
        map.HideControl(blah);
        map.HideDashboard();      
        map.HideFindControl();  
        map.HideInfoBox();
        map.HideMiniMap();
        map.HideTileLayer(blah);
        map.HideTrafficLegend();
        map.ImportShapeLayerData(blah, blah, blah);
        map.IsBirdseyeAvailable();
        map.LatLongToPixel(blah);
        map.LoadMap(blah,blah,blah,blah,blah,blah,blah);
        map.LoadTraffic(true);
        map.Pan(blah,blah);
        map.PanToLatLong(blah);
        map.PixelToLatLong(blah);
        map.RemoveCustomLayer(blah);
        map.Resize(blah, blah);
        map.Search(blah, blah, blah)
        map.SetAltitude(blah);
        map.SetBirdseyeOrientation(blah);
        map.SetBirdseyeScene(blah,blah,blah,blah);
        map.SetCenter(blah);
        map.SetCenterAndZoom(blah,blah); 
        map.SetDashboardSize(blah);
        map.SetDefaultInfoBoxStyles(); 
        map.SetFailedShapeRequest(blah);
        map.SetHeading(blah);
        map.SetMapMode(blah);
        map.SetMapStyle(blah);
        map.SetMapView();
        map.SetMouseWheelZoomToCenter(true);
        map.SetPitch(blah);
        map.SetScaleBarDistanceUnit(blah);
        map.SetShapesAccuracy(blah);
        map.SetShapesAccuracyRequestLimit(blah);
        map.SetTileBuffer(blah);
        map.SetTrafficLegendText(blah);
        map.SetZoomLevel(blah);
        map.Show3DNavigationControl();
        map.ShowAllShapeLayers();
        map.ShowControl(blah);
        map.ShowDashboard();
        map.ShowDisambiguationDialog(blah);
        map.ShowFindControl();
        map.ShowInfoBox(blah,blah,blah);
        map.ShowMessage(blah);
        map.ShowMiniMap(blah,blah,blah);
        map.ShowTileLayer(blah);
        map.ShowTrafficLegend(blah, blah);
        map.StartContinuousPan(blah,blah);
        map.ZoomIn();
        map.ZoomOut();
        
}