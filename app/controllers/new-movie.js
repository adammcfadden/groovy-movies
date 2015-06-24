import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newMovie = this.store.createRecord('movie', {
        title: this.get('title'),
        description: this.get('description'),
        image: this.get('image'),
        releaseDate: new Date(this.get('release-date'))
      });
      newMovie.save();
      this.transitionToRoute('movies');

      this.set('title', null);
      this.set('description', null);
      this.set('release-date', null);
    }
  }
});
