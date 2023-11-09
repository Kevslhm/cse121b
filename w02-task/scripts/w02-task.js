/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Kevin Hernandez";
const currentYear = "2023";
const profilePicture = "images/mySelf.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("myPic");


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerText = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${profilePicture}`);


/* Step 5 - Array */
var favFoods = ["baleadas", "sardine", "pizza"];


//foodElement.innerHTML = `<ul><li>${favFoods[0]}</li><li>${favFoods[1]}</li><li>${favFoods[2]}</li></ul>`;
foodElement.innerHTML = `${favFoods}`;


let newFavFood = "ice cream";
favFoods.push(newFavFood);
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;




