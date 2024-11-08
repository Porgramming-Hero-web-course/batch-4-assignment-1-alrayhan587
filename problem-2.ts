//Problem 2- Create a TypeScript function removeDuplicates that accepts an array
// of numbers and returns a new array with duplicates removed. 
//Preserve the original order of elements.

function removeDuplicates(arr: number[]):number[] {

    const newArray: number[] = [];

    for (const num of arr) {
        // console.log(newArray.includes(num));
        if (!newArray.includes(num)) {
            newArray.push(num);
        }
        // console.log(newArray);
    }
    return newArray;
}

const noDuplicateArray=removeDuplicates([1, 2, 3, 3, 4, 5, 6, 6, 6, 6, 7, 8]);
console.log(noDuplicateArray)