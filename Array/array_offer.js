// for given array all item have 10% discount. change the array to store final price after applying offer.

let arr = ["23", "54", "87", "900", "68"];

for(let i = 0; i<arr.length; i++){
    let discount = arr[i] / 10;
    arr[i] = arr[i] - discount;
}

console.log(arr);