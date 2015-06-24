import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      var usersModel = this.get('model');
      var testUser = this.get('user-name');
      var testPass = this.get('password');
      var userMatch = null;
      for (var i = 0; i < usersModel.get('length'); i++) {
        if (usersModel.objectAt(i).get('userName') === testUser) {
          userMatch = usersModel.objectAt(i)
        };
      }
      if (userMatch.get('password') === testPass) {
        this.transitionToRoute('movies');
      };
      for (var i = 0; i < usersModel.get('length'); i++) {
        if (usersModel.objectAt(i).get('isLoggedIn')) {
          usersModel.objectAt(i).toggleProperty('isLoggedIn');
          usersModel.objectAt(i).save();
        };
      }
      userMatch.toggleProperty('isLoggedIn');
      userMatch.save();
    }
  }
});
