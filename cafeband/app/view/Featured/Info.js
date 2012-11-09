Ext.define('Cafebnb.view.Featured.Info', {

	extend: 'Ext.Container',
	xtype: 'featuredInfo',

	config: {

		cls: 'featuredInfo',
		tpl: [
			"<image src='{picture}.png'>",
		]
		
	}
});
