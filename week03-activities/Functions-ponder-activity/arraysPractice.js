let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter((name) => name.charAt(0) === 'B');
console.log(namesB);


let nameLengths = names.map((name) => name.length);
console.log(nameLengths);


let averageStrintLength = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(averageStrintLength);