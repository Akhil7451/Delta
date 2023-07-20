// str.trim()
let str = "       Hello Akhil  ";
console.log(str.trim());

// toUpperCase() & toLowerCase()
let str1 = "Akhil Kumar"
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// .indexOf("a");

console.log(str1.indexOf("h"));

// .slice(5);

console.log(str1.slice(6));

// .replace()

console.log(str1.replace("Kumar", "Dangi"));

// .repeat()

console.log(str1.repeat(2)); 

// Practice Qs

    // Qs   -   1
let msg = "help!";
console.log(msg.trim().toUpperCase());

    // Qs   -   2
let pName = "ApnaCollege";
console.log(pName.slice(4, 9));
console.log(pName.indexOf("na"));
console.log(pName.replace("Apna", "Our"));

    // Qs   -   3
console.log(pName.slice(4).replace("l", "t").replace("l", "t"));