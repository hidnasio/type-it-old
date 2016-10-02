import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['section-viewer__content'],

  classNameBindings: ['isCurrent:section-viewer__content--active'],

  isCurrent: computed('position', 'current', function() {
    return this.get('position') === this.get('current');
  }),

  content: null
});
