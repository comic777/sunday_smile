Ext.define('Cafebnb.store.Featureds', {
	extend: 'Ext.data.Store',

	requires: 'Ext.DateExtras',

	config: {

		model: 'Cafebnb.model.Featured',
		
		
		data:[
		{picture : "cafe1", name: "gongringa", price:"5000won"},
		{picture : "cafe2", name: "culcom", price:"4000won"},
		{picture : "cafe3", name: "choi", price:"6000won"},
		],
		
		
	}
});