async function getMostFollowers(...usernames){
  let baseUrl = "https://api.github.com/users/"
  let urls = usernames.map(v => $.getJSON(baseUrl + v));
  let results = await Promise.all(urls);
  let max = results.sort((a,b) => a.followers < b.followers);
  return (`${max[0].name} has the most followers with ${max[0].followers}`);
}

async function starWarsString(id){
  var str = '';
  var results = await $.getJSON(`https://swapi.co/api/people/${id}/`)
  str += `${results.name} is featured in `;
  var movies = results.films[0].replace('http','https');
  var moreResults = await $.getJSON(movies);
  str += `${moreResults.title}, directed by ${moreResults.director} `
  var movies = moreResults.planets[0].replace('http','https');
  var finalResults = await $.getJSON(movies)
  str += `and it takes place on ${finalResults.name}`;
  return str;
}

async function getTracksForFirstAlbum(artist){
  let data = await $.getJSON(`https://api.spotify.com/v1/search?q=${artist}&type=album`)
  var firstAlbum = data.albums.items[0];
  console.log(`Getting tracks for ${firstAlbum.name}`)
  var albumData = await $.getJSON(`https://api.spotify.com/v1/albums/${firstAlbum.id}`)
  var trackNames = albumData.tracks.items.map(v => v.name);
  return trackNames;
}

var taco = "dopr"