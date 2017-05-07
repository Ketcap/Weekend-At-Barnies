// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';


Meteor.startup(function(){
    ServiceConfiguration.configurations.update(
    { "service": "spotify" },
    {
      $set: {
        "clientId": Meteor.settings.private.clientId,
        "secret":Meteor.settings.private.secret
      }
    },
    { upsert: true }
  );

})
