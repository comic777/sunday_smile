Ext.define("cafe.view.CafeD", {
	extend:"Ext.List",
	xtype:"cafelist",
	

	requires:[
		"Ext.Panel",
		"Ext.DataView",
		"Ext.Container"
		
	],
	config:{
		
		
			store:"CafeS",
			style:"background-color:grey",
			scroll:"vertical",
			itemTpl: new Ext.Template(["<div style=\"background:url('{picture}.png'); width:300px ;height:180px;text-align:center\"><div style=\"padding: 155px 0px 2px 180px;\"><font color=white>{name}</font></div></div>",]),
			emptyText:"데이터가 아직 없습니다",			
			
			items:[{
				xtype:"toolbar",
				docked:"top",
				items:{
					xtype:"segmentedbutton",
					padding:"0 35",
					items:[{
						text:"Popular",
						width:120,
						pressed:true,
					},{
						text:"Cafebnb picks",
						width:120,
								
					}]
				}	
			}]
		
		

	}	

})