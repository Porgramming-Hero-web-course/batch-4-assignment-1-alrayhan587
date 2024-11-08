// Problem-1 Write a TypeScript function sumArray that takes an array of numbers
// and returns the sum of all elements in the array.    

function sumArray(arr: number[]): number {
    let sum: number = 0;

    arr.forEach((i: number) => sum += i);

    return sum;
}

//function calling
const result: number = sumArray([1, 2, 3, 4, 5]);
console.log(result);