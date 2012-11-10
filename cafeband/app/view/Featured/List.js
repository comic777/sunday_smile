Ext.define('Cafebnb.view.Featured.List', {

	extend: 'Ext.List',
	requires: 'Ext.SegmentedButton',

	xtype: 'featureds',

	config: {

		

		itemTpl: [
			"<div style=\"background:url('img/{picture}.png'); width:300px ;height:180px;text-align:center\"><div style=\"padding: 155px 0px 2px 180px;\"><font color=white>{name}</font></div></div>"
			
			
		]
	},

	// initialize: function() {
	// 	this.config.title = Oreilly.app.title;
	// 	this.callParent();
	// 
	// 	var segmentedButton = this.down('segmentedbutton');
	// 
	// 	Ext.Array.each(Oreilly.sessionDays, function(day) {
	// 		segmentedButton.add(day);
	// 	});
	// }
});