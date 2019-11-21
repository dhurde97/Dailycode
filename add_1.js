function add1(arr){                          
    let result=(parseInt(arr.join().replace(/,/g,""))+1).toString().split("");                          
    return result.length>arr.length ? result.splice(1,arr.length) : result;

 }

let arr=[9,9,9,9];
console.log(add1(arr))