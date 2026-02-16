// Q1. create a h2 heading with text - "Hello javascript". append "from this side" to this text using js

// Q2. create 3 div common class name -" box". access them & add some text to each of them

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText += " from this side";          // Q1


let divs = document.querySelectorAll(".box ");
console.log(divs);      // use div[index] to print individual
let index = 1;
for(div of divs){
    div.innerText = `level up ${index}`;
    index++
}
