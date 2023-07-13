const prices = [7,1,5,3,6,4];

// find lowest price in the array 
// find the highest price at a later index
// return 0 if it's not possible to make profit

// the brut force approach has run time of N^2 because it woudl iterate through the array n* n/2 times - not very efficient

// more optimal way is to take a two pointer approach
    // buyIndex and sellIndex
    // this way we traverse the array once - linear time complexity - N; space complexity is constant 1 because we do not copy anything

function maxProfit (prices) {
    let sellIndex = prices.length - 1;
    let profit = 0;

    for (let buyIndex = prices.length - 1; buyIndex >= 0; buyIndex--) {
        let buyVal = prices[buyIndex];
        let sellVal = prices[sellIndex];

        if(buyVal - sellVal >= 0) {
            sellIndex = buyIndex;
        } else {
            let price = sellVal - buyVal;
            profit = Math.max(profit,price);
        }
    }
    console.log(profit);

};

maxProfit(prices);