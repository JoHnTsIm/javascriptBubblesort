// swapElements function idea from https://codingbeautydev.com/blog/javascript-swap-array-elements/
function swapElements(arr, i1, i2) {
    let temp = arr[i1];

    arr[i1] = arr[i2];
  
    arr[i2] = temp;
}
// ----------------------------------

// number and letter array
let numArray = [9,5,1,3,4,7,6,8,2,10]
let letterArray = ['c', 'd', 'a', 'b', 'j', 'i', 'e', 'f', 'g', 'h']
let wordArray = ['cat', 'door', 'age', 'bird', 'jacket', 'ice', 'earth', 'farm', 'game', 'house']


// number array and letter array lengths
const numArrayLength = numArray.length 
const letterArrayLength = letterArray.length
const wordArrayLength = wordArray.length


// bubblesort puts in order array elements -> either numbers, letters or whole words | words and letters -> alphabetical(a-z, z-a) | numbers -> decreasing, increasing order
// this bubblesort is from the smallest to the biggest 
// if you change the < to > inside the 'if', you can get from the biggest to the smallest
// this works with letters and words too
// try replace all the 'numArray' with 'letterArray' and 'numArrayLength' with 'letterArrayLength' see results on console
// try replace all the 'numArray' with 'wordArray' and 'numArrayLength' with 'wordArrayLength' see results on console
for (let i = 1; i < numArrayLength+1; i++) {
    for (let j = numArrayLength - 1; j > i-1; j--) {
        if (numArray[j] < numArray[j-1]) {
            swapElements(numArray, j, j-1)
        }
    }
}

console.log(numArray)
