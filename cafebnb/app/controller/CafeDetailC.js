Ext.define("cafe.controller.CafeDetailC",{
	extend:"Ext.app.Controller",
	
	requires:[
		
		"cafe.view.CafeDetailV"
		
	],
	
	config:{
		
		refs:{
			mainView : "mainview",
			cafeView :  "cafeview",
			cafeDetailView: "cafedetailview",
			
		},
		
		control:{
			"cafedetailview #btn_back" : {
				tap : "onBack"
			}
		}
	},
	
	onBack:function(){
		
		this.getMainView.animateActiveItem(this.getCafeView(), {type:"slide", reverse:true, duration:300});
	},
	
})