var unsortedArray = [ 3, 5, 2, 1, 8, 5, 4, 3, 9, 2, 0, 8, 1 ];

function quickSort(array) {
  
    if (array.length < 2) return array;

    const pivot = array[0];
  
    let leftArr = []; 
    let rightArr = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? leftArr.push(array[i]) : rightArr.push(array[i]);
  };

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const sortedArray = quickSort(unsortedArray);

console.log(sortedArray);