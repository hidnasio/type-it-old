import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import page from 'type-it/tests/pages/components/section-viewer/content';

moduleForComponent('section-viewer/content', 'Integration | Component | section viewer/content', {
  integration: true,
  beforeEach() {
    page.setContext(this);
  },
  afterEach() {
    page.removeContext();
  }
});

test('renders the content', function(assert) {
  assert.expect(2);

  page.render(hbs`
    {{#section-viewer/content content="Foo bar" as |completed pending|}}
    {{completed}}{{pending}}
    {{/section-viewer/content}}
  `);

  assert.ok(page.hasContentClass);
  assert.equal(page.content, 'Foo bar');
});

test('it can be active/inactive', function(assert){
  assert.expect(2);

  this.set('current', 4);

  page.render(hbs`
    {{#section-viewer/content content="Foo bar" position=4 current=current}}
    {{/section-viewer/content}}
  `);

  assert.ok(page.isActive);

  this.set('current', 3);

  assert.notOk(page.isActive);
});
