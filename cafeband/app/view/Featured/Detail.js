Ext.define('Cafebnb.view.Featured.Detail', {

	extend: 'Ext.Container',
	xtype: 'featured',

	config: {

		layout: 'vbox',
		items: [
			{
				flex: 2,
				//scrollable: 'vertical',
				// xtype: 'featuredInfo'
				//html:"<image src='cafe1.png'>",
				xtype:"carousel",
				
				items:[{
					xtype:"featuredInfo"
				},{
					xtype:"featuredInfa"
				}]
			},
			{
				flex: 2,
				xtype: 'list',
				// store: 'SpeakerSessions',
				
			}
		]

	}
});
