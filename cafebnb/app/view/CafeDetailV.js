Ext.define("cafe.view.CafeDetailV", {
	extend:"Ext.Panel",
	xtype:"cafedetailview",
	
	
	config:{
		
		layout:"card",		
		
		
		scroll:"vertical",
		tpl: '<div><img src="{picture}.png" width="70%"><br>{name}</div>',	
		emptyText:"데이터가 아직 없습니다",						
		
		
		items:[{
			xtype:"toolbar",
			docked:"top",
			title:"cafedetail",
			items:[{
				xtype:"button",
				text:"back",
				ui:"back",
				itemId:"btn_back"
			}]
		}]	

	}
	
	
})