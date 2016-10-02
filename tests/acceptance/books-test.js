import { test } from 'qunit';
import moduleForAcceptance from 'type-it/tests/helpers/module-for-acceptance';
import page from 'type-it/tests/pages/books';

moduleForAcceptance('Acceptance | books');

test('visiting /', function(assert) {
  assert.expect(3);

  server.createList('book', 2);
  server.create('book', {
    title: 'Foo bar'
  });

  page.visit();

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(page.books().count, 3);

    assert.equal(page.books(2).title, 'Foo bar');
  });
});

test('Title links to book page', function(assert) {
  server.create('book', {
    title: 'Foo bar'
  });

  page.visit();

  andThen(function() {
    page.books().clickOn('Foo bar');
  });

  andThen(function() {
    assert.equal(currentURL(), '/book/1');
  });
});
