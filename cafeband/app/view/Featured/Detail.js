Ext.define('Cafebnb.view.Featured.Detail', {

	extend: 'Ext.Container',
	xtype: 'featured',

	config: {

		layout: 'vbox',
		
		scrollable: 'vertical',
		directionLock:true,
		
		items: [
			{
				flex: 3,
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
				flex:1,
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
			
				xtype:"panel",
				html:"Description<br>Property Details<br>Amenities"
			},{
				xtype:"map"
			}
		]

	}
});
