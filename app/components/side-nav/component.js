import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$(".button-collapse.sidenav-collapse").sideNav();
    return true;
  }
});
