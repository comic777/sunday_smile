Ext.define("cafe.view.CafeV", {
	extend:"Ext.Panel",
	xtype:"cafeview",
	
	requires:[
		"cafe.store.CafeS",
		"cafe.model.CafeM",
		
	],
	
	config:{
		layout:"fit",
		items:[{
			xtype:"toolbar",
			docked:"top",
			title:"cafe_list"
		},{
			xtype:"list",
			store:"cafeS",
			scroll:"vertical",
			itemTpl: new Ext.Template(["<img src='{picture}.png' width='320', height='150'>",]),
			
			emptyText:"데이터가 아직 없습니다",
	}]
		
	}
	
	
})