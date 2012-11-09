Ext.define('Cafebnb.view.Featured.Infa', {

	extend: 'Ext.Container',
	xtype: 'featuredInfa',

	requires: 'Ext.carousel.Carousel',

	config: {

		cls: 'featuredInfa',
		tpl : "<center><img src='{price}.png' width='80%'>"	,		
		//html:"aaa"

	},

});
