VECustomIconSpecification = function()
{
    /// <summary>Initializes a new instance of the VECustomIconSpecification.</summary>   
    /// <field name="BackColor" type="VEColor">A VEColor object representing the icon's background and transparency.</field>
    /// <field name="CustomHTML" type="String">Custom HTML representing the pin's appearance. 2D only.</field>    
    /// <field name="ForeColor " type="VEColor">A VEColor object representing the icon's text color and transparency.</field>
    /// <field name="Image" type="String">A String representing the URL of an image file.</field>  
    /// <field name="ImageOffset" type="VEPixel">A VEPixel object representing the image's offset from the icon's anchor.</field>
    /// <field name="TextBold" type="Boolean">Specifies whether the text for the icon should be bold.</field>
    /// <field name="TextContent" type="String">The actual text to display for the icon.</field>
    /// <field name="TextFont" type="String">A String containing the name of the font to use for the icon text.</field>
    /// <field name="TextItalics" type="Boolean">Specifies whether the text for the icon should be italic.</field>
    /// <field name="TextOffset" type="VEPixel">A VEPixel object representing the amount to offset text from the top left corner.</field>
    /// <field name="TextSize " type="Number">Specifies the size at which to display text, in points.</field>
    /// <field name="TextUnderline" type="Boolean">Specifies whether the text for the icon should be underlined.</field>
};

VECustomIconSpecification.prototype =
{  
    BackColor: null,
    CustomHTML: null,
    ForeColor: null,
    Image: null,
    ImageOffset: null,
    TextBold: null,
    TextContent: null,
    TextFont: null,
    TextItalics: null,
    TextOffset: null,
    TextSize: null,
    TextUnderline: null
}

