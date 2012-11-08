Ext.application({
	
	name:"cafe",
	models:["CafeM"],
	stores:["CafeS"],
	controllers:["CafeC"],
	views:["MainV", "CafeV", "SearchV", "HostV", "AccountV", "CafeListV", "CafeDetailV"],
	
	launch : function(){
		
		Ext.Viewport.add({
			xtype:"mainview"
		});
	}
	
	
})