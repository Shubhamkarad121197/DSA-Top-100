// 42. Trapping Rain Water

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105
let arr=[0,1,0,2,1,0,1,3,2,1,2,1]
function trapWater(height){
    let left=0,right=height.length-1,leftMax=0,rightMax=0,water=0;
    while(left<right){
        if(height[left]<height[right]){
            if(height[left]>=leftMax){
                leftMax=height[left]
            }else{
                water+=leftMax-height[left]
            }
            left++;
        }else{
            if(height[right]>=rightMax){
                rightMax=height[right];
            }else{
                water+=rightMax-height[right];
            }
            right--;
        }
    }
    return water;
}

console.log(trapWater(arr))