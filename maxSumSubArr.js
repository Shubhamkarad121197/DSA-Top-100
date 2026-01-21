// Output: 6   // [4,-1,2,1]
let arr=[-2,1,-3,4,-1,2,1,-5,4];

function maxSumSubArray(arr){
        let maxSum=0;
        let currSum=0;

        for(let i=0;i<arr.length;i++){
           currSum+=arr[i]

           currSum=Math.max(currSum,arr[i])
           maxSum=Math.max(maxSum,currSum)
        }

        return maxSum;
}

console.log(maxSumSubArray(arr))