Ext.define('Cafebnb.controller.Featureds', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			featureds: 'featureds',
			featured: 'featured',
			featuredContainer: 'featuredContainer',
			featuredSpeakers: 'featuredContainer list',
			featuredInfo: 'featuredContainer featuredInfo',
			sessions: 'featuredContainer featured list'
		},
		control: {
			
			featureds: {
				
				itemtap: 'onSessionTap',
			},
		}
	},

	
	onSessionTap: function(list, idx, el, record) {

		if (!this.featuredInfo) {
			this.featuredInfo = Ext.widget('featuredInfo');
		}

		this.featuredInfo.config.title = record.get('name');
		this.featuredInfo.setRecord(record);
		this.getFeaturedContainer().push(this.featuredInfo);
	},
	

});