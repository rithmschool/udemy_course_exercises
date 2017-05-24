function getMostFollowers(...usernames){
  let baseUrl = "https://api.github.com/users/"
  let urls = usernames.map(v => $.getJSON(baseUrl + v));
  Promise.all(urls).then(function(data){
    let max = data.sort((a,b) => a.followers < b.followers);
    console.log(`${max[0].name} has the most followers with ${max[0].followers}`)
  })
}

function starWarsString(id){
  var str = '';
  $.getJSON(`https://swapi.co/api/people/${id}/`).then(function(data){
    str += `${data.name} is featured in `;
    var movies = data.films[0].replace('http','https');
    return $.getJSON(movies);
  }).then(function(res){
    str += `${res.title}, directed by ${res.director} `
    var movies = res.planets[0].replace('http','https');
    return $.getJSON(movies)
  }).then(function(res){
    str += `and it takes place on ${res.name}`;
    return str;
  }).then(function(finalString){
    console.log(finalString);
  })
}

function getTracksForRandomAlbum(artist){
  return $.getJSON(`https://api.spotify.com/v1/search?q=${artist}&type=album`)
  .then(function(data){
    var randomAlbumIdx = Math.floor(Math.random() * data.albums.items.length)
    var randomAlbum = data.albums.items[randomAlbumIdx];
    console.log(`Getting tracks for ${randomAlbum.name}`)
    return $.getJSON(`https://api.spotify.com/v1/albums/${randomAlbum.id}`)
  }).then(function(data){
    var trackNames = data.tracks.items.map(v => v.name);
    console.log(trackNames)
  })
}
