Ext.define('Cafebnb.view.Featured.Maplist', {

	extend: 'Ext.Container',
	xtype: 'maplist',

	requires: [
		'Ext.Map'
	],

	config: {
		layout:{
			type:"fit",
		},
		
		// align:"start",
		
				
		items:[{
			
			
			xtype: "map",	
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
			
			
		}]
			
			
		
		
			
			
		
		
	},

});
