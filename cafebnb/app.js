Ext.application({
	
	name:"cafe",
	models:["CafeM"],
	stores:["CafeS"],
	controllers:["CafeC", "CafeDetailC"],
	views:["MainV", "CafeV", "SearchV", "HostV", "AccountV", "CafeDetailV", "CafeD"],
	
	launch : function(){
		console.log("application.launch");
		Ext.Viewport.add({
			
			xtype:"mainview"
		});
		
	}
	
})