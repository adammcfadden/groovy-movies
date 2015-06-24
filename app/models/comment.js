import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr('string'),
  user: DS.belongsTo('user'),
  movie: DS.belongsTo('movie'),
  timeStamp: DS.attr('date')
});
