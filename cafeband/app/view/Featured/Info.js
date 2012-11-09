Ext.define('Cafebnb.view.Featured.Info', {

	extend: 'Ext.Container',
	xtype: 'featuredInfo',

	requires: 'Ext.carousel.Carousel',
	
	config: {

		cls: 'featuredInfo',
		tpl : "<center><img src='{picture}.png' width='90%'>"	,		
		//html:"aaa"
		
	},
	
});
