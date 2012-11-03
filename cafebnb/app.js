Ext.application({
	
	name:"cafe",
	
	views:["MainV", "CafeV", "SearchV", "HostV", "AccountV"],
	
	launch : function(){
		
		Ext.Viewport.add({
			xtype:"mainview"
		});
	}
	
	
})