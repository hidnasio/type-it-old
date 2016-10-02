import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', { path: '/' });
  this.route('book', { path: 'book/:book_id' }, function() {
    this.route('index', { path: '' });
    this.route('chapter', { path: 'chapter/:chapter_id' });
  });
});

export default Router;
