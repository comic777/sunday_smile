Ext.define("cafe.view.MainV", {
	extend:"Ext.TabPanel",
	xtype:"mainview",
	
	
	config:{
		
		layout:"card",
		tabBar:{
			docked:"bottom"
		},
		
		
		items:[{
			xtype:"cafeview",
			id:"cafe_detail_view",
			title:"Featured",
			iconCls:"favorites",
			
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