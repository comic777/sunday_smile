Ext.define("Map.store.MapS",{
	extend:"Ext.data.Store",
	
	config:{
		model:"Map.model.MapM",
		autoLoad:true,
		
		clearOnPageLoad:false,
		
		storeId:"itemsStoreId",
		
		proxy:{
			type:"ajax",
			url:"http://localhost:9090",
		},
		
		reader:{
				type:"json",
				successProperty:"success",
				root:"map"
		}
		
	}
});
