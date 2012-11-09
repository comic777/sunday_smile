Ext.define('Cafebnb.store.Featureds', {
	extend: 'Ext.data.Store',

	requires: 'Ext.DateExtras',

	config: {

		model: 'Cafebnb.model.Featured',
		
		
		data:[
		{picture : "cafe1", name: "gongringa", price:"cafe1_1"},
		{picture : "cafe2", name: "culcom", price:"cafe2_1"},
		{picture : "cafe3", name: "choi", price:"cafe3_1"},
		],
		
		
	}
});