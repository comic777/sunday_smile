Ext.define('Cafebnb.view.Featured.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'featuredContainer',
	requires: 'Ext.SegmentedButton',
	
	config: {
		
		title: 'Featured',
		iconCls: 'time',
		// navigationBar: {
		// 	items: [
		// 		{
		// 			xtype: 'segmentedbutton',
		// 			id: 'editButton',
		// 			padding:"0 35",
		// 			items: [
		// 				{
		// 					width:120,
		// 					text: 'Popular',
		// 					pressed: true
		// 				},
		// 				{
		// 					width:120,
		// 					text: 'Cafebnb picks',
		// 					
		// 				},
		// 				
		// 			],
		// 			
		// 		}
		// 	]
		// },
		autoDestroy: false,

		items: [{
				title:"Time Line",
				xtype: 'featureds',
				store: 'Featureds',
				//grouped: true,
				pinHeaders: false,
				indexbar:true,
			}
		],
	
	},
	
	
});
