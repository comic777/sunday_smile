Ext.define("cafe.view.HostV", {
	extend:"Ext.Panel",
	xtype:"hostview",


	config:{
		layout:"fit",
		items:[{
			xtype:"toolbar",
			docked:"top",
			title:"Host"
		},{
			html:"Host Page"
		}]

	}


})