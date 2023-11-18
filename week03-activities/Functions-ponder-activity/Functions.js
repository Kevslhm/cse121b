let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(firstString, lastString)
{
    return `${firstString} ${lastString}`;
}

//Anonymous function expression
// const fullName = function (fisrtString, lastString)
// {
//     return `${firstString} ${lastString}`;
// }

//Arrow function expression
// const fullName = (firstString, lastString) => `${firstString} ${lastString}`;
// const fullName = (firstString, lastString) => `${firstString} ${lastString}`;


document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);


