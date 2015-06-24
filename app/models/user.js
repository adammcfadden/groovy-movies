import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr('string'),
  comments: DS.hasMany('comment'),
  movies: DS.hasMany('movie'),
  password: DS.attr('string'),
  isLoggedIn: DS.attr('boolean', {defaultValue: false})
});
