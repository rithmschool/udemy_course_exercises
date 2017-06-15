async function getMostFollowers(...usernames){
  let baseUrl = "https://api.github.com/users/"
  let urls = usernames.map(v => $.getJSON(baseUrl + v));
  let results = await Promise.all(urls);
  let max = results.sort((a,b) => a.followers < b.followers);
  return (`${max[0].name} has the most followers with ${max[0].followers}`);
}

async function starWarsString(id){
  let str = '';
  let results = await $.getJSON(`https://swapi.co/api/people/${id}/`)
  str += `${results.name} is featured in `;
  let movies = results.films[0].replace('http','https');
  let moreResults = await $.getJSON(movies);
  str += `${moreResults.title}, directed by ${moreResults.director} `
  let movies = moreResults.planets[0].replace('http','https');
  let finalResults = await $.getJSON(movies)
  str += `and it takes place on ${finalResults.name}`;
  return str;
}

// async function getTracksForFirstAlbum(artist){
//   let data = await $.getJSON(`https://api.spotify.com/v1/search?q=${artist}&type=album`)
//   var firstAlbum = data.albums.items[0];
//   console.log(`Getting tracks for ${firstAlbum.name}`)
//   var albumData = await $.getJSON(`https://api.spotify.com/v1/albums/${firstAlbum.id}`)
//   var trackNames = albumData.tracks.items.map(v => v.name);
//   return trackNames;
// }