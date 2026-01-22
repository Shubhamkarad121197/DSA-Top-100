function majorityElement(arr) {
    let map = new Map();

   
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (map.has(num)) {
            let currentCount = map.get(num);
            map.set(num, currentCount + 1);
        } else {
            map.set(num, 1);
        }
    }

   
    let maxCount = 0;
    let majority = null;

    for (let [num,count] of map.entries()) {

        if (count > maxCount) {
            maxCount = count;
            majority = num;
        }
    }

    return majority;
}
let arr = [1,1,2,2,2]
console.log(majorityElement(arr))