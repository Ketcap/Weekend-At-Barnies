// Set up all routes in the app
BlazeLayout.setRoot('body');
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
  subscriptions(){
    this.register('me',Meteor.subscribe('me'));
  }
});

// FlowRouter.notFound = {
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_notFound' });
//   },
// };
