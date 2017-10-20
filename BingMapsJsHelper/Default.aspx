<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Bing Maps JS Helper v7 - Test Page</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
        <Scripts>
            <asp:ScriptReference Path="http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0" />
            <asp:ScriptReference Path="Default.aspx.js" />
        </Scripts>
    </asp:ScriptManager>
    <div id='mapElement' style="position: relative; width: 1000px; height: 500px;">
    </div>
    </form>
</body>
</html>
