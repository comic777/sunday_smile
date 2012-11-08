Ext.define("cafe.controller.CafeC", {
	extend: "Ext.app.Controller",
	
	config:{
		
		refs:{
			mainView : "mainview",
			cafeView :  "cafeview",
			cafeDetailView: "cafedetailview",
			
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
		
		if(objStore.isLoaded()==false)
			objStore.load();
	},
	
	onItemTap : function(dataView, index, target, record){
		
		// var store = Ext.getStore("CafeS");
		// console.log(store);
		// 
		// console.log(dataView);
		
		
		
		// var detail = Ext.create("cafe.view.CafeDetailV");
		// console.log(detail);
		// 
		// var aa = detail.setRecord(record);
		// 
		// console.log("========");
		// console.log(aa);
		// 
		// 
		// Ext.Viewport.setActiveItem({
		// 	xtype:"cafedetailview",
		// 	// var aa = detail.setRecord(record);
		// 	})
		
		
		
					
		
		this.getCafeDetailView().setRecord(record);
		this.getCafeView().animateActiveItem(this.getCafeDetailView(), {type:"slide", direction:"left", duration:300});
		
		
		
		// console.log(Ext.getStore("CafeS").data.items[index].data.name);
		
		
		
		

	}
	
	
		
})
