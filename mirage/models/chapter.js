import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  book: belongsTo(),
  sections: hasMany()
});
