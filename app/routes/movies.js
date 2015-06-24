import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      movieModel: this.store.find('movie'),
      userModel: this.store.find('user')
    };
  }
});
