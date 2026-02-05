let s1='silent';
let s2='listen';

function isAnagram(s1,s2){
    if(s1.length!=s2.length) return false;
    let map=new Map();
    for(let char of s1){
        if(map.has(char)){
            map.set(char,map.get(char)+1)
        }else{
            map.set(char,1)
        }
    }

    for(let char of s2){
        if(!map.has(char)) return false;

        if(map.has(char)){
            map.set(char,map.get(char)-1)
        }

        if(map.get(char)==0){
            map.delete(char)
        }
    }

    return map.size==0
}

console.log(isAnagram(s1,s2))