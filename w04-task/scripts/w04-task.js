/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: 'Kevin Hernandez',
    photo: 'images/mySelf.jpg',
    favoritesFoods: ["sardine", "pizza", "baleadas", "chiken"],
    hobbies: ['play tennis', 'play mobile games', 'listen podcast'],
    placesLived: []

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place: 'Guatemala City, Guatemala', length: '9 years'});
myProfile.placesLived.push({place: 'San Jose Pinula, Guatemala', length: '12 years'});
myProfile.placesLived.push({place: 'Mixco, Guatemala', length: '1 year'});

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').innerHTML = myProfile.name;

/* Photo with attributes */
 document.getElementById('photo').setAttribute('src', myProfile.photo);

/* Favorite Foods List*/
//const favFoodList = document.getElementById('favorite-foods');
//favFoodList.innerHTML = myProfile.favoritesFoods.forEach(food => `<li>${food}</li>`);

myProfile.favoritesFoods.forEach(food => {
    let liHtml = document.createElement('li');
    liHtml.textContent = food;
    document.getElementById('favorite-foods').appendChild(liHtml);
});
/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let liElement = document.createElement('li');
    liElement.textContent = hobby;
    document.getElementById('hobbies').appendChild(liElement);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
    let dtHtml = document.createElement('dt');
    let ddHtml = document.createElement('dd');

    dtHtml.textContent = place.place;
    ddHtml.textContent = place.length;

    document.getElementById('places-lived').appendChild(dtHtml);
    document.getElementById('places-lived').appendChild(ddHtml);    
})