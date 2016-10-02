import {
  create,
  collection,
  text,
  visitable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  books: collection({
    itemScope: 'li',

    item: {
      title: text()
    }
  })
});
