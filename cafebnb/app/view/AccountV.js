Ext.define("cafe.view.AccountV", {
	extend:"Ext.Panel",
	xtype:"accountview",


	config:{
		layout:"fit",
		items:[{
			xtype:"toolbar",
			docked:"top",
			title:"User"
		},{
			html:"Account Page"
		}]

	}


})