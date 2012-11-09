Ext.define('Cafebnb.view.Main', {

	extend: 'Ext.tab.Panel',
	xtype: 'main',

	config: {

		tabBarPosition: 'bottom',
		tabBar: {
			ui: 'dark'
		},

		items: [
			{ xclass: 'Cafebnb.view.Featured.Card'},
			{ xclass: 'Cafebnb.view.Search.Card' },
			{ xclass: 'Cafebnb.view.Host.Card'   },
			{ xclass: 'Cafebnb.view.Account.Card' },
			// { xclass: 'Cafebnb.view.about.Card'    }
		]
	}
});
