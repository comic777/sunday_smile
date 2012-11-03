Ext.define("cafe.view.MainV", {
	extend:"Ext.TabPanel",
	xtype:"mainview",
	
	
	config:{
		
		
		tabBar:{
			docked:"bottom"
		},
		
		
		items:[{
			xtype:"cafeview",
			title:"Featured",
			iconCls:"favorites"
		},{
			xtype:"searchview",
			title:"Search",
			iconCls:"search"
		},{
			xtype:"hostview",
			title:"Host",
			iconCls:"compose"
		},{
			xtype:"accountview",
			title:"Account",
			iconCls:"user"
			
		}]
	}
	
	
})