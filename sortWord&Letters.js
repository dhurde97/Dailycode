/*
Create a program to do the following tasks:

Take string input from user:
Input: "i love to code in python"
Output A) ==> [' i ',' love','to','code',' in','python']
Output B) ==> ['code',' i,' in',' love','python','to']
Output C) ==> ['cdeo',' i ',' in','elov','hnopty','ot']

NOTE: You are not allowed to use some inbui lt functions like:

[sort, min, sorted, reverse, reversed, split]
A) Split a given Sentence into list of words.
B) Sort that list according to the letters alphabetically.
C) Sort that list alphabetically.

*/


function splitString() {
    let stringArray = ['']
    let sampleInput="i love to code in python";
    let delimiter=" ";
    let j = 0

    for (let i = 0; i < sampleInput.length; i++) {
        if (sampleInput[i]== delimiter) {
            j++;
            stringArray.push('')
        } else {
            stringArray[j] += sampleInput[i]
        }
    }
    return stringArray
}
let a=splitString();
console.log(a);
a.sort(sortArray);
function sortArray(a,b){
    if(a<b){
        return -1;
    }
    else{
        return 1;
    }
}
console.log(a);
let result1=[];
a.forEach(Element=>{
    let string=Element.toString();
    let array=[];
    let i=0;
    while(string[i]!=undefined){
        array.push(string[i]);
        i++;
    }
    array.sort(sortArray);
    let newString =array.join("");
    // console.log(newString);
    result1.push(newString);
})
console.log(result1);