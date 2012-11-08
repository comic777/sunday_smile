Ext.define("cafe.view.CafeListV", {
	extend:"Ext.List",
	xtype:"cafedataview",
	
	requires:[
		"Ext.data.Store",
		"Ext.DataView",
		
	],
	
	config:{
		
		store:"cafeS",
		scroll:"vertical",
		itemTpl: "<div style=\"background:url('{picture}.png'); width:300px ;height:180px;text-align:center\"><div style=\"padding: 155px 0px 2px 180px;\"><font color=white>{name}</font></div></div>",			
								
		
	}
	
	
})