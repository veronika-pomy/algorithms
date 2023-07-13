const nums = [1, 2, 3, 1];

// A brut force approach: N^2 time because this approach has two nested for loops, space complexity is constant

    // loop through each element as soon as you encounter a repeated element, return true, else return false

// function containsDuplicate (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if(nums[i] === nums[j]) {
//                 console.log(true);
//                 return;
//             };
//         };
//     };
//     console.log(false);
//     return;
// };

// A sorting approach with pointers: N log N runtime + N = N log N; space complexity for quick sort is log N

    // sort in ascending order using quickSort

    // compare elements using pointers starting at 0 and 1 indices; as soon as I encounter a repeating element - return 

    // else return false

// function containsDuplicate (nums) {
//     const sortedArray = nums.sort();

//     startIndex = 0;
    
//     for (let nextIndex = 1; nextIndex < sortedArray.length; nextIndex++) {
//         let startValue = sortedArray[startIndex];
//         if (startValue === sortedArray[nextIndex]) {
//             console.log(true);
//             return;
//         } else {
//             startIndex++;
//         };
//     };
//     console.log(false);
//     return;
// };

// Hashset complexity solution: runtime complexity is O(N) - we have to go through the whole array to make sure no duplicates exist; space complexity is also O(N) - we are copying an array
    // try to enter els into a set, if an element repeats it can't b einserted
function containsDuplicate (nums) {
    let hashSet = new Set();

    for (const num of nums) {
        if(hashSet.has(num)) {
            console.log(true);
            return;
        };
        hashSet.add(num);
    };
    console.log(false);
    return;
};

containsDuplicate(nums);
