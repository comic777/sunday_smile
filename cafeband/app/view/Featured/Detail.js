Ext.define('Cafebnb.view.Featured.Detail', {

	extend: 'Ext.Container',
	xtype: 'featured',
	
	requires: [
		'Ext.Map'
	],
	
	config: {

		layout: 'vbox',
		scrollable: 'vertical',
		directionLock:true,
		
		items: [
			{
				// flex: 3,
				height:200,
				//scrollable: 'vertical',
				// xtype: 'featuredInfo'
				//html:"<image src='cafe1.png'>",
				xtype:"carousel",
				directionLock:true,
				items:[{
					xtype:"featuredInfo"
				},{
					xtype:"featuredInfa"
				}]
			},
			{
				height:50,
				layout:"hbox",
				items:[{xtype:"spacer"},{
					xtype:"button",
					text:"Book It",	
					width:150,
					height:20,
					ui:"confirm"
				},{xtype:"spacer"},{
					xtype:"button",
					text:"Contact Host",
					width:150,
					height:20,
					ui:"action"
				},{xtype:"spacer"}]
				
			},{
				height:100,
				xtype:"panel",
				html:"Description<br>Property Details<br>Amenities"
			},{
				
			
				height:200,
				
				
				xtype: "maplist",
				
				// //useCurrentLocation: true,
				// mapOptions : {
				// 	center : new google.maps.LatLng(37.381592, -122.135672),  //nearby San Fran
				// 	zoom : 12,
				// 	mapTypeId : google.maps.MapTypeId.ROADMAP,
				// 	navigationControl: true,
				// 	navigationControlOptions: {
				// 		style: google.maps.NavigationControlStyle.DEFAULT
				// 	}
				// },
		},{
			height:200,
			xtype:"panel",
			html:"host"
		}
		]

	}
});
