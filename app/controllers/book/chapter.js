import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  currentSection: computed(function() {
    return this.get('model.sections.firstObject');
  }),

  actions: {
    next(section) {
      let nextSection = this.get('model.sections').objectAt(section.get('id'));
      this.set('currentSection', nextSection);
    }
  }
});
