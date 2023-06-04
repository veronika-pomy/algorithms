const unsortedArray = [ 3, 5, 2, 1, 8, 5, 4, 3, 9, 2, 0, 8, 1 ];

function quickSortMiddlePivot (array) {

    // base case - return if array has only one element in it
    if (array.length < 2) return array;

    // value to compare the rest of array's values to 
    const pivotIndex = Math.floor(array.length/2);
    const pivot = array[pivotIndex];

    // arrays that will hold values after they are compared to pivot 
        // left for smaller
        // right for larger
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            leftArr.push(array[i]);
        } else {
            rightArr.push(array[i]);
        };
    };

    return [...quickSortMiddlePivot(leftArr), pivot, ...quickSortMiddlePivot(rightArr)];
};

const sortedArray = quickSortMiddlePivot(unsortedArray);

console.log(sortedArray);