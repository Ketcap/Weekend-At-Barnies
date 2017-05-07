import './index.html'

Template.App_now_playing.onCreated(function(){
  var self = this;

  self.now_playing = new ReactiveVar();
  self.songs = new ReactiveVar();

  Meteor.call('get_now_playing',function(err,resp){
    if(!err){
      self.now_playing.set(resp);
    }else{
      Materialize.toast('Ups....',2000,'red darken-2 white-text');
    }
  });


})

Template.App_now_playing.helpers({
  nowplaying(){
    return Template.instance().now_playing.get();
  },
  album_image(){
    return Template.instance().now_playing.get().data.item.album.images[0].url;
  },
  song_name(){
    return Template.instance().now_playing.get().data.item.name;
  },
  song_artist(Artists){
    let artists;
    Artists.map(function(artist){
      artists ? artists = artists + " , " + artist.name : artists = artist.name ;
    })
    return artists;
  },
  songs(){
    return Template.instance().songs.get();
  },
  profilePicture(){
    if(Meteor.user()){
      return Meteor.user().profile.images["0"].url;
    }
  },
  log(song){
    console.log(song);
  }
});

Template.App_now_playing.events({
  'click .refresh':function(event,Template){
    $('.refresh').removeClass('scale-in').addClass('scale-out');

    Meteor.call('get_now_playing',function(err,resp){
      if(!err){
        Template.now_playing.set(resp);
      }else{
        Materialize.toast('Ups....',2000,'red darken-2 white-text');
      }
      $('.refresh').removeClass('scale-out').addClass('scale-in');

    });
  },
  'submit form':function(event,Template){
    event.preventDefault();
    const search = event.target.search.value;
    if(!search)
      return false;

    Meteor.call('search_track',search,function(err,response){
      if(!err){
        Template.songs.set(response);
      }
    })
  },
  'click .play_song':function(event,Template){
    event.preventDefault();
    let uri = this.uri;
    Meteor.call('play_song',uri,function(err,resp){
      if(!err){
        $('.refresh').trigger('click');
        $('.close').trigger('click');
      }
    });
  },
  'click .resume':function(event,Template){
    event.preventDefault();
    Meteor.call('resume_song',function(err,resp){
      if(!err){
        $('.refresh').trigger('click');
      }
    });
  },
  'click .pause':function(event,Template){
    event.preventDefault();
    Meteor.call('pause_song');
  },
  'click .next_song':function(event,Template){
    event.preventDefault();
    Meteor.call('next_song',function(err,resp){
      if(!err){
        $('.refresh').trigger('click');
      }
    });
  },
  'click .prev_song':function(event,Template){
    event.preventDefault();
    Meteor.call('prev_song',function(err,resp){
      if(!err){
        $('.refresh').trigger('click');
      }
    });
  },
  'click .close':function(){
     $('.button-collapse').sideNav('hide');
  }

})

Template.App_now_playing.onRendered(function(){


})
