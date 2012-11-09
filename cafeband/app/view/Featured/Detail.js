Ext.define('Cafebnb.view.Featured.Detail', {

	extend: 'Ext.Container',
	xtype: 'featured',

	config: {

		layout: 'vbox',
		items: [
			{
				flex: 1,
				//scrollable: 'vertical',
				xtype: 'featuredInfo'
				//html:"<image src='cafe1.png'>",
			},
			{
				flex: 2,
				xtype: 'list',
				// store: 'SpeakerSessions',
				
			}
		]

	}
});
