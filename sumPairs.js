/*Given an array "arr", find the pair of elements whose sum is divisible by 5 and print those pairs.
Also find the total number of such pair of elements whose sum is an even number.
*/
function findPairs(arr){
let divisibleBy5=[];
let evenSum=[];
let count=0;
arr.forEach(element => {
    arr.forEach(element1=>{
        sum=element+element1;
        if(sum%5==0) {
            let c=[element,element1];
            divisibleBy5.push(c);
      } 
      if(sum%5==0 && sum%2==0){
          let c=[element,element1];
           evenSum.push(c);
           count++;
      }
    });
      });

console.log("the pairs whose sum is divisible by 5 are ");
console.log(divisibleBy5);
console.log("there are "+count +" pairs whose sum is even and divisible by 5,they are");
console.log(evenSum)
}
let arr=[2,3,5,4,3,2,2,4,5,5,2,4];
findPairs(arr)