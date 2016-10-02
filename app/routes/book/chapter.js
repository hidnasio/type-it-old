import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('chapter', params.chapter_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('currentSection', 0);
  }
});
