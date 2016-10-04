import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  content() {
    return faker.lorem.paragraph(1);
  }
});
