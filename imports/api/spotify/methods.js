new ValidatedMethod({
  name: 'get_now_playing',
  validate(){},
  run() {
    var spotifyApi = new SpotifyWebApi();
    spotifyApi.refreshAndUpdateAccessToken();
    let token = spotifyApi.getAccessToken();

    const result = HTTP.call('GET', 'http://api.spotify.com/v1/me/player/currently-playing', {
        headers : {
         'Authorization': "Bearer "+token
        }
    });

    return result;
  }
})

new ValidatedMethod({
  name: 'search_track',
  validate(){},
  run(search) {
    var spotifyApi = new SpotifyWebApi();
    spotifyApi.refreshAndUpdateAccessToken();
    let token = spotifyApi.getAccessToken();
    const songs = spotifyApi.searchTracks(search,{limit:10});
    return songs.data.body.tracks.items;
  }
})

new ValidatedMethod({
  name: 'play_song',
  validate(){},
  run(uri) {
    var spotifyApi = new SpotifyWebApi();
    spotifyApi.refreshAndUpdateAccessToken();
    let token = spotifyApi.getAccessToken();

    const result = HTTP.call('PUT', 'https://api.spotify.com/v1/me/player/play', {
        headers : {
         'Authorization': "Bearer "+token
       },
       data:{
         uris:[uri]
       }
    });
    return result
  }
})

new ValidatedMethod({
  name: 'resume_song',
  validate(){},
  run(uri) {
    var spotifyApi = new SpotifyWebApi();
    spotifyApi.refreshAndUpdateAccessToken();
    let token = spotifyApi.getAccessToken();

    const result = HTTP.call('PUT', 'https://api.spotify.com/v1/me/player/play', {
        headers : {
         'Authorization': "Bearer "+token
       }
    });
    return result
  }
})

new ValidatedMethod({
  name: 'pause_song',
  validate(){},
  run(uri) {
    var spotifyApi = new SpotifyWebApi();
    spotifyApi.refreshAndUpdateAccessToken();
    let token = spotifyApi.getAccessToken();

    const result = HTTP.call('PUT', 'https://api.spotify.com/v1/me/player/pause', {
        headers : {
         'Authorization': "Bearer "+token
       }
    });
    return result
  }
})

new ValidatedMethod({
  name: 'next_song',
  validate(){},
  run() {
    var spotifyApi = new SpotifyWebApi();
    spotifyApi.refreshAndUpdateAccessToken();
    let token = spotifyApi.getAccessToken();

    const result = HTTP.call('POST', 'https://api.spotify.com/v1/me/player/next', {
        headers : {
         'Authorization': "Bearer "+token
       }
    });
    return result
  }
})

new ValidatedMethod({
  name: 'prev_song',
  validate(){},
  run() {
    var spotifyApi = new SpotifyWebApi();
    spotifyApi.refreshAndUpdateAccessToken();
    let token = spotifyApi.getAccessToken();

    const result = HTTP.call('POST', 'https://api.spotify.com/v1/me/player/previous', {
        headers : {
         'Authorization': "Bearer "+token
       }
    });
    return result
  }
})
