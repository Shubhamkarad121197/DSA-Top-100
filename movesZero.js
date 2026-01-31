
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
//Brute Force 
let arr=[0,1,0,3,12];
function  bruteForceMovesZero(arr){
    let newArr=new Array(arr.length).fill(0);
    let left=0;
    for(let right=0;right<arr.length;right++){
        if(arr[right]!=0){
            newArr[left]=arr[right];
            left++
        }
    }
    return newArr;
}

console.log(bruteForceMovesZero(arr));

// ⏱ Time Complexity

// Single loop over array → O(n)

// 📦 Space Complexity

// New array of size n → O(n) (extra space)

//Optimize Approach

function optimiaMovesZeros(arr){
  
    let left=0;
    for(let right=0;right<arr.length;right++){
        if(arr[right]!=0){
           [arr[left],arr[right]]=[arr[right],arr[left]]
            left++
        }
    }
    return arr;
}

console.log(optimiaMovesZeros(arr));

// ⏱ Time Complexity

// Single traversal → O(n)

// 📦 Space Complexity

// No extra array, only variables → O(1)