import {
  create,
  hasClass,
  text
} from 'ember-cli-page-object';

export default create({
  hasContentClass: hasClass('section-viewer__content', 'p'),
  content: text('p')
});
