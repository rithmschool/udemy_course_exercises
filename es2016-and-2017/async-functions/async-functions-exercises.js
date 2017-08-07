async function getMostFollowers(...usernames){
  let baseUrl = "https://api.github.com/users/"
  let urls = usernames.map(v => $.getJSON(baseUrl + v));
  let results = await Promise.all(urls);
  let max = results.sort((a,b) => a.followers < b.followers)[0];
  return `${max.name} has the most followers`;
}

async function starWarsString(id){
  let str = '';
  let results = await $.getJSON(`https://swapi.co/api/people/${id}/`)
  str += `${results.name} is featured in `;
  let movies = results.films[0];
  let moreResults = await $.getJSON(movies);
  str += `${moreResults.title}, directed by ${moreResults.director} `
  let planetData = moreResults.planets[0];
  let finalResults = await $.getJSON(planetData)
  str += `and it takes place on ${finalResults.name}`;
  return str;
}
