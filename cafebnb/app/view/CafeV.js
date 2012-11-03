Ext.define("cafe.view.CafeV", {
	extend:"Ext.Panel",
	xtype:"cafeview",
	
	
	config:{
		layout:"fit",
		items:[{
			xtype:"toolbar",
			docked:"top",
			title:"cafe_list"
		},{
			html:"cafe list"
		}]
		
	}
	
	
})