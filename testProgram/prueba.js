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

let placesList = document.getElementById('places-lived');

function generateList(list, template)
{
    let htmlList = list.forEach(template);
    return htmlList.join('');
}

function placeTemplate(place)
{
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

placesList.innerHTML = generateList(myInfo.placesLived, placeTemplate);