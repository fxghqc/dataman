import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('models-config');
  }
});
