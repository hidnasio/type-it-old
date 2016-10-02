import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  positionClass: computed('currentSection', function() {
    let value = this.get('currentSection') * 200;
    return `top: -${value}px`;
  }),

  actions: {
    next() {
      this.incrementProperty('currentSection');
    }
  }
});
