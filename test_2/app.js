Ext.application({
	
	viewport:{
		autoMaximize:true
	},
	
	launch:function(){
		
		Ext.create("Ext.Panel",{
			fullscreen:true,
			
			items:[{
				xtype:"toolbar",
				docked:"top",
				title:"TOP"
			},{
				html:"<font size = 20><br><center>hello 바탕화면입니다.<br> 이곳에 글자가 쓰여집니다.<br></font> 이제 시작해볼까요?"
			},{
				xtype:"titlebar",
				docked:"bottom",
				title:"BOTTOM"
			}			
			]

		});
	}
});

