// Input: prices = [7,1,5,3,6,4]
// Output: 5

let prices=[7,1,5,3,6,4];
function maxProfit(prices){
    let minPrice=Infinity; // 
    let maxProfit=0;
    for(let price of prices){
        if(price<minPrice){
            minPrice=price
        }else{
            maxProfit=Math.max(maxProfit,price-minPrice)
        }
    }
    return maxProfit;
}
console.log(maxProfit(prices))

//  let minPrice=Infinity; 

// We want to track the minimum stock price seen so far.

// If we don’t know the array’s first value yet, we need a safe starting value that won’t block comparisons when looping.