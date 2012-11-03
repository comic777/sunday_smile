Ext.define("cafe.view.SearchV", {
	extend:"Ext.Panel",
	xtype:"searchview",
	
	
	config:{
		
		layout:"fit",
		
		items:[{
			xtype:"toolbar",
			docked:"top",
			title:"Search"
		},{
			
			html:"Search"
		}]
	}
	
})