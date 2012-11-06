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
			
			items:[{
				xtype:"segmentedbutton",
				padding:"0 35",
				
				items:[{
					text:"Popular",
					//flex:5,
					width:120
				},{
					text:"Cafebnb picks",
					width:120,
				}]
			}]
		},{
			xtype:"list",
			store:"cafeS",
			scroll:"vertical",
			itemTpl: new Ext.Template(["<img src='{picture}.png' width='300', height='150'>",]),
			
			emptyText:"데이터가 아직 없습니다",
	}]
		
	}
	
	
})