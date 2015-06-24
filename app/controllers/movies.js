import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    openAddMovies: function() {
      Ember.$("#open-add-movies").hide();
      Ember.$("#done-selecting").show();
      this.set('addingMovies', true);
    },

    doneSelecting: function() {
      Ember.$("#done-selecting").hide();
      Ember.$("#open-add-movies").show();
      this.set('addingMovies', false);
    },

    deleteMovie: function(currentMovie) {
      currentMovie.destroyRecord();
      Ember.$('#movie-modal').modal('hide');
    },

    addMovieToLoggedUser: function(movie, addingMovies) {
      var usersModel = this.get('model').userModel;
      if (addingMovies) {
        for (var i = 0; i < usersModel.get('length'); i++) {
          if (usersModel.objectAt(i).get('isLoggedIn')) {
            usersModel.objectAt(i).get('movies').pushObject(movie);
            movie.save();
            usersModel.objectAt(i).save();
            this.set("loggedInUser", usersModel.objectAt(i))
          };
        }
      } else {
        this.set("currentMovie", movie);
        Ember.$('#movie-modal').modal('show');
      }
    }
  }
});
