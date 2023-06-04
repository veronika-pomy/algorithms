const unsortedArray = [ 3, 5, 2, 1, 8, 5, 4, 3, 9, 2, 0, 8, 1 ];

function quickSortMiddlePivot (array, left, right) {

    // anchor values to find the middle
    left = left || 0;
    right = right || array.length - 1;

    // partition array 
    const pivot = partitionArr(array, left, right);

    // recursive conditions to iterate to left and right arrays relative to pivot value
    if (left < pivot - 1) {
        quickSortMiddlePivot(array, left, pivot - 1);
    };

    if (right > pivot) {
        quickSortMiddlePivot(array, pivot, right);
    };

    return array;
};

function partitionArr(array, left, right) {

    const multiplier = right - left + 1; // defines the range based on ancor values
    const pivot = Math.floor(Math.random()*multiplier) + left; // selects a rnadom value

    while (left <= right) {
        while(array[left] < array[pivot]){
            left++;
        }
        while (array[right] > array[pivot]) {
            right--;
        }

        if (left <= right) {
            // switch values at indexes in this case
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }

    return left;
};

const sortedArray = quickSortMiddlePivot(unsortedArray);

console.log(sortedArray);