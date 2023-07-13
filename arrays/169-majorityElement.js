
// brut force approach - slow runtime N^2, constant space complexity
    // function majorityElement (nums) {
    //     if(nums.length/2 < 1) {
    //         console.log(nums[0]);
    //     };

    //     const majorityThreshold = nums.length / 2;

    //     for (let i = 0; i < nums.length; i++) {
    //         let count = 1;
    // 	    for (let j = i + 1; j < nums.length; j ++) {	
    //             if (nums[i] === nums[j]) {
    //                 count++;
    //             };
    //             if (count > majorityThreshold) {
    //                 console.log(nums[i]);
    //             };      
    //         };
    //     };
    // };


// optimize with hash map for O(N) runtime

function majorityElement (nums) {
   
    let majority = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === majority) {
            count++;
        } else {
            count--;
            if (count === 0) {
                majority = nums[i];
                count = 1;
            }
        }
    }
    console.log(majority);

};

majorityElement([3,2,3]);