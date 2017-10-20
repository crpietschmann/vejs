VEException  = function()
{
    /// <summary>Contains the exception information for the map control.</summary>
    /// <field name="message">A text description of the exception.</field>        
    /// <field name="name">The name of the exception.</field>  
    /// <field name="source">The source object that caused the exception.</field>  
};

VEException.prototype =
{
    message: null,
    name: null,
    source: null
}

