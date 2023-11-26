myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

const foodsList = document.getElementById('favorite-foods');
const placesList = document.getElementById('places-lived');

function getListfromCompoundList(list, listTemplate)
{
    const listHtml = list.map(listTemplate);
    return listHtml.join('');
}

function foodTemplate(food)
{
    return `<li>${food}</li>`;
}

function placeTemplate(place)
{
    return `<dt>${place.place}</dt><dt>${place.length}</dt>`;
}

foodsList.innerHTML = getListfromCompoundList(myInfo.favoriteFoods, foodTemplate);
placesList.innerHTML = getListfromCompoundList(myInfo.placesLived, placeTemplate);



/*const listHtmlElement = document.getElementById('favorite-foods');  
function createAndAppendArrayElement(food)
{
    let foodItem = document.createElement('li');
    foodItem.textContent = food;
    listHtmlElement.appendChild(foodItem);
    return listHtmlElement;
}

myInfo.favoriteFoods.forEach(createAndAppendArrayElement);*/


/*const listHtmlElement = document.getElementById('favorite-foods');
const createAndAppendMapElement = (food) => {
    let favFood = document.createElement('li');
    favFood.textContent = food;
    listHtmlElement.appendChild(favFood);
}

const foodListElements = myInfo.favoriteFoods.map(createAndAppendMapElement);
foodListElements.innerHTML = foodListElements.join('');*/



/*myInfo.favoriteFoods.forEach((food, index = 0)=> {
    let favFood = document.createElement('li');
    favFood.textContent = myInfo.favoriteFoods[index];
    document.getElementById('favorite-foods').appendChild(favFood);
    index += 1;
});


myInfo.favoriteFoods.map((food, index = 0) => {
    let favFood = document.createElement('li');
    favFood.textContent = myInfo.favoriteFoods[index];
    document.getElementById('favorite-foods').appendChild(favFood);
})*/