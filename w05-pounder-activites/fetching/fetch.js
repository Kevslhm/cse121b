// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;


async function getPokemonInfo(url, doThis) 
{
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}

function doStuff(data) 
{
  const section = document.getElementById('output');
  results = data;
  const html = `<h1>${results.name}</h1>
  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;

  section.innerHTML = html;
  console.log("first: ", results);
}


function doStuffList(data)
{
  console.log(data);
  const pokeListElement = document.getElementById('outputList');
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList);
  pokeList.forEach((currentItem) => {
  const html = `<li>${currentItem.name}</li>`;
  pokeListElement.innerHTML += html;
  }); 
}

function compare(a, b)
{
  if(a.name < b.name)
  {
    return -1;
  }
  else if(a.name > b.name)
  {
    return 1;
  }
  else 
  {
    return 0;
  }
}

function sortPokemon(list)
{
  let sortedList = list.sort(compare);
  return sortedList;
}

getPokemonInfo(url, doStuff);
console.log("second: ", results);

getPokemonInfo(urlList, doStuffList);