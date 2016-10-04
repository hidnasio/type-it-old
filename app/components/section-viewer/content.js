import Ember from 'ember';

const { computed, observer, inject } = Ember;

export default Ember.Component.extend({
  keyboard: inject.service(),

  init() {
    this._super(...arguments);
    this.set('cleanContent', this.get('content').replace(/\r?\n|\r/g, " "));

    let pending = this.get('cleanContent').slice(this.get('completedIndex'));

    this.set('pending', `<span>${pending.slice(0, 1)}</span>${pending.slice(1)}`.htmlSafe());

    if(this.get('isCurrent')) {
      this.get('keyboard').on('keyPress', (letter) => {
        this.get('onKeyPress')(letter, this);
      });
    }
  },

  classNames: ['section-viewer__content'],

  classNameBindings: ['isCurrent:section-viewer__content--active'],

  isCurrent: computed('position', 'current', function() {
    return this.get('position') === this.get('current');
  }),

  activeKeyboard: observer('isCurrent', function() {
    if(this.get('isCurrent')) {
      this.get('keyboard').on('keyPress', (letter) => {
        this.get('onKeyPress')(letter, this);
      });
    } else {
      this.get('keyboard').off('keyboard.keyPress');
    }
  }),

  finish: observer('completedIndex', function() {
    let currentIndex = this.get('completedIndex');
    let lastIndex = this.get('cleanContent.length');

    if(currentIndex === lastIndex) {
      this.get('next')();
    }
  }),

  cleanContent: null,

  completedIndex: 0,

  pending: '',
  completed: '',

  onKeyPress(key, obj) {
    let script = obj.get('cleanContent');
    let index = obj.get('completedIndex');
    let scriptChar = script.charAt(index);

    if (key === scriptChar) {
      obj.incrementProperty('completedIndex');
      obj.set('error', null);
      obj.set('completed', obj.get('cleanContent').slice(0, obj.get('completedIndex')));

      let pending = obj.get('cleanContent').slice(obj.get('completedIndex'));

      obj.set('pending', `<span>${pending.slice(0, 1)}</span>${pending.slice(1)}`.htmlSafe());
    } else {
      let errorMessage = `Expected "${scriptChar}" but was "${key}"`;
      obj.set('error', errorMessage);
      console.log('error', obj.get('error'));
    }
  }
});
