import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  currentSection: 0,

  sectionsCount: computed('model.sections.[]', function() {
    return this.get('model.sections.length');
  }),

  positionClass: computed('currentSection', function() {
    let value = this.get('currentSection') * 200;
    return `top: -${value}px`;
  }),

  actions: {
    next() {
      let current = this.get('currentSection');
      let max = this.get('sectionsCount');

      if (current < --max) {
        this.incrementProperty('currentSection');
      }
    }
  }
});
