const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log('this results where gotten with a for loop.');
for (sr = 0; sr < 7; sr++)
{
    if (studentReport[sr] < 30)
    {
        console.log(studentReport[sr]);
    }
}

console.log();
console.log('this results where gotten with a while loop.');
let index = 0;
while (index < 7)
{
    if (studentReport[index] < 30)
    {
        console.log(studentReport[index]);
    }

    index++;
}

console.log();
console.log('this results where gotten with a for in loop.');
for (const number in studentReport)
{
    if (studentReport[number] < 30)
    {
        console.log(studentReport[number]);
    }
}