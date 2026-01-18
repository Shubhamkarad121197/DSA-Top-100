function subarraySum(nums,k){
    let count=0;
    let currSum=0;
    let map=new Map()

    map.set(0,1)
    for(let num of nums){
        currSum+=num;
        if(map.has(currSum-k)){
            count+=map.get(currSum-k)
        }
        map.set(currSum,(map.get(currSum)||0)+1)
    }
    return count;
}

console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2