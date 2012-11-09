Ext.define('Cafebnb.view.Featured.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'featuredContainer',

	config: {

		title: 'Featured',
		iconCls: 'time',

		autoDestroy: false,

		items: [
			{
				xtype: 'featureds',
				store: 'Featureds',
				//grouped: true,
				pinHeaders: false,
				indexbar:true,
				
			}
		]
	}
});
