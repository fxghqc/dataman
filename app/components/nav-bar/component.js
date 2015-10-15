import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$(".button-collapse.navbar-collapse").sideNav({
      edge: 'right'
    });
    return true;
  }
});
