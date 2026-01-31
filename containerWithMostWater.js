// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

let height=[1,8,6,2,5,4,8,3,7]

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let width = right - left;
        let area = Math.min(height[left], height[right]) * width;

        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}
console.log(maxArea(height));