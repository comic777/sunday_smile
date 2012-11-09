Ext.define('Cafebnb.controller.Featureds', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			featureds: 'featureds',
			featured: 'featured',
			featuredContainer: 'featuredContainer',
			featuredSpeakers: 'featuredContainer list',
			featuredInfo: 'featuredContainer featuredInfo',
			featuredInfa: 'featuredContainer featuredInfa',
			sessions: 'featuredContainer featured list'
		},
		control: {
			
			featureds: {
				
				itemtap: 'onSessionTap',
			},
		}
	},

	
	onSessionTap: function(list, idx, el, record) {
		
		// var featuredStore = Ext.getStore('Featureds'),
		// 	featuredIds = record.get('featuredIds');
		
		// featuredStore.clearFilter();
		// featuredStore.filterBy(function(session) {
		// 	return Ext.Array.contains(sessionIds, session.get('id'));
		// });
		
		if (!this.featured) {
			this.featured = Ext.widget('featured');
		}
		
		this.featured.config.title = record.get('name');
		this.getFeaturedContainer().push(this.featured);
		this.getFeaturedInfo().setRecord(record);
		
		this.getFeaturedInfa().setRecord(record);
		
		// 
		// if (!this.featured) {
		// 	this.featured = Ext.widget('featured');
		// }
		// 
		// this.featured.config.title = record.get('name');
		// this.featured.setRecord(record);
		// 
		// this.getFeaturedContainer().push(this.featured);
	},
	

});