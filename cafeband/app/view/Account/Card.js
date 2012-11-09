Ext.define('Cafebnb.view.Account.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'accountContainer',

	config: {

		title: 'Account',
		iconCls: 'user',

		autoDestroy: false,

		items: [
			{
				// xtype: 'sessions',
				// store: 'Sessions',
				// grouped: true,
				// pinHeaders: false
				html:"user Info"
			}
		]
	}
});
