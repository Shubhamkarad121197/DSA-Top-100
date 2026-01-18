function runningSum(nums) {
    let sum = 0;
    const result = [];

    for (let n of nums) {
        sum += n;
        result.push(sum);
    }

    return result;
}
console.log(runningSum([1,2,3,4,5,6]))