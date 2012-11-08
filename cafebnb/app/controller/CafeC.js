Ext.define("cafe.controller.CafeC", {
	extend: "Ext.app.Controller",
	
	config:{
		
		refs:{
			mainView : "mainview",
			cafeView :  "cafeview",
			// cafeDataView : "cafedataview"
			cafeDetailView: "cafedetailview"
	},
	control:{
		"cafeview" : {
			activate:"onActivate"
		},
		
		"cafeview list" :{
			itemtap:"onItemTap"
		},
	}
		
		
	},
	
	
	onActivate:function(container, newActiveItem, oldActiveItem, opts){
		var objStore = Ext.getStore("CafeS");
		console.log(objStore);
		if(objStore.isLoaded()==false)
			objStore.load();
	},
	
	onItemTap:function(dataView, index, target, record){
		// this.getCafeDetailView().setRecord(record);
		// 
		// this.getMainView().animateActiveItem(this.CafeDetailView());
		console.log(dataView);
		console.log(index);
		console.log(record);
		console.log(target);
		Ext.Viewport.setActiveItem({
			xtype:"cafedetailview"
		
		});
		
	}
	
	
		
})
