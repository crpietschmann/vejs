﻿<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Untitled Page</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
</head>
<body>
<form id="form1" runat="server">
<asp:ScriptManager ID="ScriptManager1" runat="server">
    <Scripts>
        <asp:ScriptReference 
            Path="http://dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=6" />
        <asp:ScriptReference 
            Path="VEMapStyle.aspx.js" />
    </Scripts>
</asp:ScriptManager>
<div id='myMap' 
    style="position: relative; width: 1000px; height: 500px;">
</div>
</form>
</body>
</html>