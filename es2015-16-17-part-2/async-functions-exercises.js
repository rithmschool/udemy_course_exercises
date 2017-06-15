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