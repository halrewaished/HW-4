let characterArray = [
  {
    name: "Haneen",
    height: 170,
    gender: "Female",
    mass: 50,
    eyeColor: "Broun",
  },
  { name: "Ali", height: 180, gender: "Male", mass: 60, eyeColor: "Black" },
  { name: "Sara", height: 165, gender: "Female", mass: 55, eyeColor: "Broun" },
];

// Map - names and height

let map1 = characterArray.map(function (element) {
  return [element.name, element.height];
});
console.log(map1);

// Map - names

let map2 = characterArray.map(function (element) {
    return element.name;
  });
  console.log(map2);

// Reduce - total mass

let sum = characterArray.reduce((a,item) => a + item.mass,0);
console.log(sum);

// Filter - mass

let newFilter = characterArray.filter((element) => {
  if (element.mass > 100 ) return element;
});
console.log(newFilter);

// Filter - female

let newFilter2 = characterArray.filter((element) => {
    if (element.gender === "Female" ) return element;
  });
  console.log(newFilter2);

// Sort - name

let sortName = characterArray.sort(function(a,b){
    return ('' + a.name).localeCompare(b.name)
});
console.log(sortName);

// Sort - height 

let sortHieght = characterArray.sort(function(a,b){
    return ('' + a.height).localeCompare(b.height)
});
console.log(sortHieght);

// Every - blue eyes 

let everyEyeColor = characterArray.every(function(element) {
    return element.eyeColor === "Blue";
});
console.log(everyEyeColor);

// Every - Male 

let everyGender = characterArray.every(function(element) {
    return element.gender === "Male";
});
console.log(everyGender);

// Some - male

let someMale = characterArray.some(function(element) {
    return element.gender === "Male" ;
});
console.log(someMale);

// Some = mass < 50

let someMass = characterArray.some(function(element) {
    return element.mass < 50 ;
});
console.log(someMass);