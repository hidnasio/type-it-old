import Ember from 'ember';

const { computed, String: { htmlSafe } } = Ember;

export default Ember.Controller.extend({
  currentSection: 0,

  sectionsCount: computed.alias('model.sections.length'),

  positionClass: computed('currentSection', function() {
    let top = 0;
    let current = this.get('currentSection') - 1;

    Ember.$('.section-viewer__content').each((index, section) => {
      top += Ember.$(section).outerHeight(true);

      if (index === current) {
        return false;
      }
    });

    return htmlSafe(`top: -${top}px`);
  }),

  actions: {
    next() {
      let current = this.get('currentSection');
      let max = this.get('sectionsCount') - 1;

      if (current < max) {
        this.incrementProperty('currentSection');
      }
    }
  }
});
