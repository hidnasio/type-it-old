import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', { path: '/' });
  this.route('book', function() {
    this.route('index', { path: ':book_id' });
    this.route('chapter', { path: ':book_id/chapter/:chapter_id' });
  });
});

export default Router;
