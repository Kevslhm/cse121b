
//here I have all my elements stored in their respective variable and the api link as well.
const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=024965e91c9095f586ed095aec9cea5b';
let spanTag = document.getElementById('temperture');
const divTag = document.getElementById('data');
const divTag2 = document.getElementById('data-2');


//this function is fetching the url that contains movie data store in a json.
async function getMovie(url){
    const response = await fetch(url);
    if (response.ok){
        const moviesData = await response.json();
        displayMovie(mostPopular(moviesData, 5), divTag);
        document.getElementById('selected').addEventListener('change', () => {sortBy(moviesData)});

    }
}


//this function display a image, the movie title, and the release data and put it on the webpage.
function displayMovie(data, tag){
    if (data && data.results){
        data.results.forEach(movie => {
            let html = `<article>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
                <h1>${movie.title}</h1>
                <h2>${movie.release_date}</h2>
            </article>`;
            tag.innerHTML += html;
        });
    } 
    else {
        data.forEach(movie => {
            let html = `<article>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
                <h1>${movie.title}</h1>
                <h2>${movie.release_date}</h2>
            </article>`;
            tag.innerHTML += html;
        });
    }
    
    
}


//this one resets whatever is on the webpage leave it in blank.
function reset()
{
    while (divTag2.firstChild) 
    {
        divTag2.removeChild(divTag2.firstChild);
    }
}

//this function returns certain information depending on the user's selection.
function sortBy(data)
{
    reset();
    let filter = document.querySelector('#selected').value;

    switch (filter){
        case 'newones':
            displayMovie(newestMovies(data, 10), divTag2)
            break;
        case 'oldones':
            displayMovie(oldestMovies(data, 10), divTag2);
            break;
        case 'all':
            displayMovie(data, divTag2);
            break;
    }
}

// function newestMovies(data){
//     const newArray = data.results.filter(movies => {
//         let newList = movies.release_date.split('-');
//         if (parseInt(newList[0]) === 2023 && parseInt(newList[1]) > 10){
//            return true;
//         }
//     });
//     return newArray;
// }

//this function return a new array with the lates movies.
function newestMovies(data, count){
    const newArray = data.results.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    const latestMovies = newArray.slice(0, count);
    return latestMovies;
}

// function oldestMovies(data){
//     const newArray = data.results.filter(movies => {
//         let newList = movies.release_date.split('-');
//         if (parseInt(newList[0]) < 2023){
//             return true;
//         }
//     });
//     return newArray;
// }


//this one returns an array but with the oldest movies.
function oldestMovies(data, count){
    const newArray = data.results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    const olderOnes = newArray.slice(0, count);

    return olderOnes;
}


//this one returns the popular ones.
function mostPopular(data, count){
     const descendingList = data.results.sort((a, b) => b.popularity - a.popularity);
     const mostPopularOnes = descendingList.slice(0, count);
     
     return mostPopularOnes;
}


 

getMovie(movieUrl);
