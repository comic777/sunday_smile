//<debug>
Ext.Loader.setPath({
	'Ext': '../../src',
	'Oreilly': 'app'
});
//</debug>


Ext.application({
	// Change the values below to re-configure the app for a different 	conference.

	
	// App namespace

	name: 'Cafebnb',
	

	// Dependencies

	models: [
		"Featured"
	],

	views: [
		"Main",
		
		"Featured.Card",
		"Featured.List",
		"Featured.Detail",
		"Featured.Info",
		"Featured.Infa",
		
		
		"Search.Card",
		
		"Host.Card",
		
		"Account.Card"
	],

	controllers: [
		"Featureds"
	],

	stores: [
		"Featureds"
	],

	launch: function() {

		//Ext.Viewport.setMasked({ xtype: 'loadmask' });

		
		Ext.Viewport.add({ xtype: 'main' });
		//Ext.Viewport.setMasked(false);

		// setInterval(function(){
		//     Ext.DomQuery.select('link')[0].href = "resources/css/oreilly.css?" + Math.ceil(Math.random() * 100000000)
		// }, 1000);
	}

});
