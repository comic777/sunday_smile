Ext.define('Cafebnb.view.Search.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'SearchContainer',

	config: {

		title: 'Search',
		iconCls: 'search',

		autoDestroy: false,

		items: [
			{
				// xtype: 'sessions',
				// store: 'Sessions',
				// grouped: true,
				// pinHeaders: false
				html:"Search"

			}
		]
	}
});
