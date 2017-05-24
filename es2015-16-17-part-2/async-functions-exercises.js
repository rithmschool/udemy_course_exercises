async function getMostFollowers(...usernames){
  let baseUrl = "https://api.github.com/users/"
  let urls = usernames.map(v => $.getJSON(baseUrl + v));
  let results = await Promise.all(urls);
  let max = results.sort((a,b) => a.followers < b.followers);
  console.log(`${max[0].name} has the most followers with ${max[0].followers}`);
}

async function starWarsString(id){
  var str = '';
  var results = await $.get(`https://swapi.co/api/people/${id}/`)
  str += `${results.name} is featured in `;
  var movies = results.films[0].replace('http','https');
  var moreResults = await $.get(movies);
  str += `${moreResults.title}, directed by ${moreResults.director} `
  var movies = moreResults.planets[0].replace('http','https');
  var finalResults = await $.get(movies)
  str += `and it takes place on ${finalResults.name}`;
  console.log(str);
}

async function getTracksForRandomAlbum(artist){
  let data = await $.getJSON(`https://api.spotify.com/v1/search?q=${artist}&type=album`)
  var randomAlbumIdx = Math.floor(Math.random() * data.albums.items.length)
  var randomAlbum = data.albums.items[randomAlbumIdx];
  console.log(`Getting tracks for ${randomAlbum.name}`)
  var albumData = await $.getJSON(`https://api.spotify.com/v1/albums/${randomAlbum.id}`)
  var trackNames = albumData.tracks.items.map(v => v.name);
  console.log(trackNames)
}