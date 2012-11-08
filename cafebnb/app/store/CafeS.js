Ext.define("cafe.store.CafeS", {
	extend:"Ext.data.Store",
	xtype:"cafestore",

	config:{
		model:"cafe.model.CafeM",
		storeId:"CafeS",
		
		
		data:[
		{picture : "cafe1", name: "gongringa", price:"5000won"},
		{picture : "cafe2", name: "culcom", price:"4000won"},
		{picture : "cafe3", name: "choi", price:"6000won"},
		]
		

	}


})