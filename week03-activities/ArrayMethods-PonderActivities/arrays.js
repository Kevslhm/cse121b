const stringNumbers = ['one', 'two', 'three'];
const stringNumbersHtml = stringNumbers.map(function (stringNumber){
    return `<li>${stringNumber}</li>`;
});
document.getElementById("myList").innerHTML = stringNumbersHtml.join(); 



const grades = ['A', 'B', 'A']
function convertGradesToPoints(grade)
{
    let points = 0;

    if (grade === "A")
    {
        points = 4
    }
    else if (grade === "B")
    {
        points = 3
    }

    return points;
}
const gpa = grades.map(convertGradesToPoints);
document.querySelector('#map2').innerHTML = gpa;


const totalPoints = gpa.reduce(function (total, item){
    return total + item;
})

const totalGpa = totalPoints / gpa.length;
document.querySelector('#reduce1').innerHTML = totalGpa;




const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortfruits = fruits.filter((fruit) => fruit.length < 6);
document.querySelector('#filter1').innerHTML = shortfruits;




const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);
document.querySelector('#indexof').innerHTML = luckyIndex;