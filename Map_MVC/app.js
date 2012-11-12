Ext.Loader.setPath({
    'Ext': 'src'
});

Ext.application({
	name:"MAP",
	
	models:["MapM"],
	stores:["MapS"],
	views:["MainV"],
	
	launch:function(){
		Ext.Viewport.add({
			xclass:"Map.view.MainV",
		});
	}
});
