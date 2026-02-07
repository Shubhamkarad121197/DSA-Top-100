// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.
let arr=[1,8,6,2,5,4,8,3,7]
function maxArea(height){
    let left=0;
    let right=height.length-1;
    let maxWater=0;

    while(left<right){
        let width=right-left;
        let currentHeight=Math.min(height[left],height[right]);
        let area=width*currentHeight;

        maxWater=Math.max(maxWater,area);

        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxWater;
}

console.log(maxArea(arr))