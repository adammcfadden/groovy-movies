import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newUser = this.store.createRecord('user', {
        userName: this.get('user-name'),
        password: this.get('password'),
      });
      newUser.save();
      this.transitionToRoute('users');

      this.set('user-name', null);
      this.set('password', null);
    }
  }
});
