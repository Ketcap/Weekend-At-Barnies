import './index.html';


Template.App_home.events({
  'click #loginSpotify'(){
    var options = {
      showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
      requestPermissions: ['user-read-email','user-read-playback-state','user-read-currently-playing',"user-modify-playback-state"] // Spotify access scopes.
    };
    Meteor.loginWithSpotify(options, function(accessToken) {
      console.log(accessToken);
    });
  }
})

Template.App_home.helpers({
})
