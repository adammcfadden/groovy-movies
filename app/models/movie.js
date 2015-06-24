import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  releaseDate: DS.attr('date'),
  image: DS.attr('string'),
  users: DS.hasMany('user'),
  comments: DS.hasMany('comment')
});
