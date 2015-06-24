import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('login', {path: '/'})
  this.resource('movies', function() {
    this.resource('new-movie');
  });
  this.route('users', function() {
    this.resource('new-user');
  });
  this.resource('user', {path: ':user_id'}, function() {
    this.resource('user-all-movies');
  });
  this.route('comments');

});

export default Router;
