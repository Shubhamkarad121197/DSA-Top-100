let arr=[1,2,4,6,7,10];
let target=9;
function bruteForceTwoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(target==arr[i]+arr[j]){
                return [i,j]
            }
        }
    }
    return [-1,-1]
}

console.log(bruteForceTwoSum(arr,target));


function optimalTwoSum(arr,target){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        let diff=target-arr[i];
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        else{
            map.set(arr[i],i)
        }
    }
    return [-1,-1]
}

console.log(optimalTwoSum(arr,target))