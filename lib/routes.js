Router.map(function() {
  this.route('home', {
  	path: '/',
  	waitOn: function() {
    	return Meteor.subscribe('Doges');
  	},
  });
});
Router.configure({
  loadingTemplate: 'loading',
  layoutTemplate: 'layout'
});
Router.onBeforeAction('loading');