import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      Ember.$("#login-form").show()
    }
  }
});
