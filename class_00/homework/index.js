// // Primitive Data Type Exercise
// // 1. The Age Calculator
// const birthyear = 1997;
// const currentyear = 2021;
// const age = currentyear - birthyear;
// console.log("They are either " + age + " or " + (age - 1));

// // Bonus
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDay();

// console.log(year);      //to get year
// console.log(month);     //to get month
// console.log(day);       //to get day(6th day)

// // or
// console.log(new Date().getFullYear());

// // or
// console.log(`${new Date().getFullYear()}`);



// // 2. The Lifetime Supply Calculator
// const myage = 24;
// const max = 100;
// let numbers = 3;
// let estimated = numbers * 365 * (max - myage);
// let answer = "You will need " + estimated + " to last you until the ripe old age of " + max;
// console.log(answer);

// // Bonus
// let myAge = prompt("What is your current age?", "Type here");
// let maxAge = prompt("How long do you think will live?", "Type here");
// let estimate = prompt("How many packets of chips do you eat in a day?", "Type here");
// alert("You will need " + (maxAge - myAge) * estimate + " packets of chips until " + maxAge + " years old" );

// or
// alert(`You will need ${(promptMaxAge - promptCurrentAge25) * promptEstimateAmt} until the ripe old age of ${promptMaxAge}`);





// // 3. Geometrizer
// let radius = 2.5;
// let circumference = 2 * (22 / 7) * radius;
// let area = (22 / 7) * radius * radius;
// console.log("The circumference is " + circumference + "cm");
// console.log("The area is " + area + "cm2");

// or
// let radius = 10;
// console.log(`The circumference is ${2 * Math.PI * radius}`);
// console.log(`The area is ${Math.PI * Math.pow(radius, 2)}`);





// // 4. Temperature Converter
// var c = 33;
// var ctf = (c * 9) / 5 + 32;
// console.log(c + " degree celcius is " + ctf + " degree fahrenheit");

// var f = 33;
// var ftc = ((f - 32) * 5) / 9;
// console.log(f + " degree fahrenheit is " + ftc + " degree celcius");
