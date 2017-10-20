(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchResult = function () {
        /// <summary>
        /// Represents a distinct search result.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.SearchResult"/>
    };

    m.SearchResult.prototype = {
        /// <field type='Microsoft.Maps.Search.Address'>The address of the search result.</field>
        address:{}, 
        /// <field type='String'>The city of the search result.</field>
        city:{}, 
        /// <field type='String'>The country of the search result.</field>
        country:{}, 
        /// <field type='String'>The entity type of the search result.</field>
        entityType:{}, 
        /// <field type='String'>The hours of operation of the entity defined by the search result.</field>
        hoursOfOperation:{}, 
        /// <field type='Number'>The entity ID of the search result.</field>
        id:{}, 
        /// <field type='Microsoft.Maps.Location'>The location of the search result.</field>
        location:{}, 
        /// <field type='String'>The name of the entity defined by the search result.</field>
        name:{}, 
        /// <field type='String'>The phone number of the search result.</field>
        phone:{}, 
        /// <field type='String'>The postal code of the search result.</field>
        postalCode:{}, 
        /// <field type='Number'>The number of user reviews recorded for this search result.</field>
        reviewCount:{}, 
        /// <field type='Number'>The average user rating for the entity defined by the search result.</field>
        userRating:{}, 
        /// <field type='String'>The URL of the entity defined by the search result.</field>
        website:{}
    };

    m.SearchResult.__class = true;

})(this);