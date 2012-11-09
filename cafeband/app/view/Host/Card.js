Ext.define('Cafebnb.view.Host.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'hostContainer',

	config: {

		title: 'Host',
		iconCls: 'compose',

		autoDestroy: false,

		items: [
			{
				html:"host"
			}
		]
	}
});
