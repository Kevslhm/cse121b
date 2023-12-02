/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesurl = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';
const templeElement = document.querySelector('#temples');
//const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let html = `<article>
            <h3>${temple.templeName}</h3>
            <img src="${temple.imageUrl}" alt="${temple.location}">
        </article>`;
        templeElement.innerHTML += html;
    })
}



/* async getTemples Function using fetch()*/
async function getTemples(url)
{
    const response = await fetch(templesurl);
    if(response.ok)
    {
        const templeList = await response.json();
        displayTemples(templeList);
        document.getElementById('sortBy').addEventListener('change', () => {sortBy(templeList)});
    }
}

/* reset Function */
function reset()
{
    while (templeElement.firstChild) 
    {
        templeElement.removeChild(templeElement.firstChild);
    }
}

/* sortBy Function */
function sortBy(temples)
{
    reset();
    let filter = document.querySelector('#sortBy').value;

    switch (filter){
        case 'utah':
            let onlyUtahTemples = filterOnlyUtahTemples(temples);
            displayTemples(onlyUtahTemples);
            break;
        case 'notutah':
            displayTemples(filterDifferentThanUtah(temples));
            break;
        case 'older':
            displayTemples(filterOlderTemples(temples));
            break;
        case 'all':
            displayTemples(temples);
            break;

    }
}


/* Event Listener */

function filterOnlyUtahTemples(temples)
{
    let newArray = temples.filter(temple => {
        let isInArray = false;
        const newList = temple.location.split(',');
        newList.forEach(string => {
            if (string === ' Utah'){
                return isInArray = true;
            }
        });

        if (isInArray === true){
            return true;
        }
        else{
            return false;
        }
    })
    return newArray;   
}

function filterDifferentThanUtah(temples)
{
    let newArray = temples.filter(temple => {
        let isInArray = true;
        const newList = temple.location.split(',');
        newList.forEach(string => {
            if (string === ' Utah'){
                return isInArray = false;
            }
        });

        if (isInArray === true){
            return true;
        }
        else{
            return false
        }
    })
    return newArray;
}

function filterOlderTemples(temples)
{
    let newArray = temples.filter(temple => {
        let isInArray = false;
        const newList = temple.dedicated.split(',');
        for (let i = 0; i < 1; i++){
            if (parseInt(newList[0]) < 1950){
                return isInArray = true;
            }
        }

        if (isInArray === true){
            return true;
        }
        else{
            return false
        }
    })
    return newArray;
}


getTemples(templesurl, displayTemples);

