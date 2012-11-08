Ext.define("cafe.view.CafeDetailV", {
	extend:"Ext.Panel",
	xtype:"cafedetailview",
	
	config:{
		
		layout:"fit",
			scrollable:"vertical",
			
			
			
			items:[{
				xtype:"toolbar",
				docked:"top",
				title:"Detail",
				items:[{
					xtype:"button",
					text:"back",
					ui:"back",
					itemId:"btn_back"
				}]
			},{
				itemTpl:"<div style=\"background:url('{picture}.png'); width:300px ;height:180px;text-align:center\"><div style=\"padding: 155px 0px 2px 180px;\"><font color=white>{name}</font></div></div>"
			}]


	}
	
	
})