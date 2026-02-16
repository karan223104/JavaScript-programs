// its return null because no heading id is exsist
// access by id
let heading = document.getElementById("heading");
console.dir(heading);             



// access by class
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);



// access by tag
let para = document.getElementsByTagName("p");
console.dir(para);   



// using queryselector (1st element)
// by tag 
let firstEl = document.querySelector("p");
console.dir(firstEl);

// using queryselector (all element)
// by tag
let allEl = document.querySelectorAll("p");
console.dir(allEl);
// want to access by class then write .classname (only for query selector)


