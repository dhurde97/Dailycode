
/*Write a function roll_odometer that adds 1 to a number represented 
by a list of digits, carrying where appropriate, e.g.:
    roll_odometer([1, 0, 2]) = [1, 0, 3]
    roll_odometer([1, 3, 9, 9]) = [1, 4, 0, 0]
    roll_odometer([9, 9, 9]) = [0, 0, 0] (resets like an odometer)*/
function add1(elements){
    let str=elements.join();                          // convert to string
    // console.log(typeof str);
    let str1=str.replace(/,/g,"");                       //remove all , from string
    // console.log(str1)
    let stradded1=(parseInt(str1)+1).toString();               
    let finalresult=stradded1.split("");                              
    if(finalresult.length>elements.length){
    finalresult.shift()
    }
console.log(finalresult);
}

let elements=[9,9,9];
add1(elements)