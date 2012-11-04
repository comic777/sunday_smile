Ext.application({
	
	name:"cafe",
	models:["CafeM"],
	stores:["CafeS"],
	controller:[],
	views:["MainV", "CafeV", "SearchV", "HostV", "AccountV"],
	
	launch : function(){
		
		Ext.Viewport.add({
			xtype:"mainview"
		});
	}
	
	
})