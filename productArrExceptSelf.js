// 238. Product of Array Except Self

// avatar
// Discuss Approach
// arrow-up
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

let arr = [-1, 1, 0, -3, 3];

function productOfArrExceptSelf(arr) {
    let n = arr.length;
    let result = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= arr[i];
    }

    return result.map(x => x === 0 ? 0 : x);
}

console.log(productOfArrExceptSelf(arr))