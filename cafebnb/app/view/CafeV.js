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
					width:120,
					pressed:true,
				},{
					text:"Cafebnb picks",
					width:120,
					
				}]
			}]
		},{
			xtype:"list",
			store:"cafeS",
			style:"background-color:grey",
			scroll:"vertical",
			itemTpl: new Ext.Template(["<div style=\"background:url('{picture}.png'); width:300px ;height:180px;text-align:center\"><div style=\"padding: 155px 0px 2px 180px;\"><font color=white>{name}</font></div></div>",]),			
			emptyText:"데이터가 아직 없습니다",
	}]
		
	}
	
	
})