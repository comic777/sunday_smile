Ext.define('Cafebnb.view.Search.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'SearchContainer',

	config: {

		title: 'Search',
		iconCls: 'search',

		autoDestroy: false,

		items: [
			{
				// xtype: 'sessions',
				// store: 'Sessions',
				// grouped: true,
				// pinHeaders: false
				// html:"Search"
				xtype:"map",	
				//useCurrentLocation: true,
				mapOptions : {
					center : new google.maps.LatLng(37.381592, -122.135672),  //nearby San Fran
					zoom : 12,
					mapTypeId : google.maps.MapTypeId.ROADMAP,
					navigationControl: true,
					navigationControlOptions: {
						style: google.maps.NavigationControlStyle.DEFAULT
					}
				},
			}
		]
	}
});
