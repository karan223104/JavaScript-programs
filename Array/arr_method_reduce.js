const array = [1, 2, 3, 4, 5];

const initialValue = 0;

const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);

console.log(sumWithInitial);


/* let arr = [1, 2, 3, 4, 5];

const output = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output); */