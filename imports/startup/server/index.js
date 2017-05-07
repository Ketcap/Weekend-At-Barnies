import '../../api/spotify/methods.js'

Meteor.publish('me',function(){
  return Meteor.users.find({
    "_id":this.userId
  },{
    fields:{
      "services.spotify.id":1
    }
  });
})
