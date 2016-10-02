import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import page from 'type-it/tests/pages/section-content';

moduleForComponent('section-content', 'Integration | Component | section content', {
  integration: true,
  beforeEach() {
    page.setContext(this);
  },
  afterEach() {
    page.removeContext();
  }
});

test('Render the content', function(assert) {
  assert.expect(2);

  page.render(hbs`{{section-content content="Foo bar"}}`);

  assert.ok(page.hasContentClass);
  assert.equal(page.content, 'Foo bar');
});
