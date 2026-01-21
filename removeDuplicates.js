let arr=[23,56,35,23,56,35,78]

// function removeDuplicates(arr){
//     let uniqueArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(!uniqueArr.includes(arr[i])){
//             uniqueArr.push(arr[i])
//         }
//     }
//     return uniqueArr;
// }



function removeDuplicates(arr){
    let uniqueArr=[]
    for(let i=0;i<arr.length;i++){
        let seen=false;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                seen=true
            }
        }
        if(!seen){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates(arr))

