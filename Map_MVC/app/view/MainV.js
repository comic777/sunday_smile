Ext.define("Map.view.MainV",{
	extend:"Ext.Panel",
	xtype:"mainv",
	
	config:{
		layout:"fit",
		listeners:[{
			fn:"onMapMaprender",
			event:"maprender"
		}
			
		]
	},
	
	onMapMaprender:function(map,gmap,options){
		
		var store = Ext.getStore("itemsStoreId");
		
		store.each(function(record){
			
		var latitude = record.get("latitude"),
		    longitude = record.get("longitude");
		    
		    new google.maps.Marker({
		    position: new google.maps.LatLng(latitude, longitude),
                    map: map.getMap(),
                    draggable: false,
                    animation: google.maps.Animation.DROP
        		});
        	});
        }
    
 });	
