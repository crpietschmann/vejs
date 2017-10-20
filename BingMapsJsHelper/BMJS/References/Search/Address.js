(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.Address = function () {
        /// <summary>
        /// Represents an address.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.Address"/>
    };

    m.Address.prototype = {
        /// <field type='String'>The street line of an address. The addressLine property is the most precise, official line for an address relative to the postal agency servicing the area specified by the locality or postalCode properties.</field>
        addressLine: {},
        /// <field type='String'>The subdivision name within the country or region for an address. This element is also commonly treated as the first order administrative subdivision. An example is a US state, such as “Oregon”.</field>
        adminDistrict: {},
        /// <field type='String'>The country or region name of the address.</field>
        countryRegion: {},
        /// <field type='String'>The second, third, or fourth order subdivision within a country, dependency, or region.</field>
        district: {},
        /// <field type='String'>The complete, unparsed address.</field>
        formattedAddress: {},
        /// <field type='String'>The locality, such as the primary city, that corresponds to an address. An example is “Seattle”.</field>
        locality: {},
        /// <field type='String'>The post code, postal code, or ZIP code of an address. An example is a US ZIP code, such as “98152”.</field>
        postalCode: {},
        /// <field type='String'>The city or neighborhood that corresponds to the postalCode.</field>
        postalTown: {}
    };

    m.Address.__class = true;

})(this);