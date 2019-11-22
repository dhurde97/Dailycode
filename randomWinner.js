/*Suppose 10 persons are sitting in a circle starting from position 1 to position
10. A pillow with some random number written on it is given to the person at position 1.
Now Person at position 1 has to add that particular number written on pillow with his 
position number i.e 1. And pass that pillow to the person at position 2 and he also has to add
its position  number with number written on pillow and pass the pillow to the person at position 
3 and so on to the person 10. The Winner of that round are those people who are having a Prime
number (the number after addition). And now you have to calculate the amount distributed as Prize.
So the amount will be the total of all the winners Prime number which we just calculated.
*/
function randomWinner(){
    let randomNumber=Math.ceil(Math.random()*10);
let arr=[1,2,3,4,5,6,7,8,9,10];
let playerScore=[];
let winner=[];
arr.forEach(element=>{
    playerScore.push(element+randomNumber);
})
console.log(playerScore);
playerScore.forEach((number) => {
    for (let i = 2; i < number; i++) {
        if(number % i === 0) {
            return ;
        }
    }
    winner.push(number);  
}
)
console.log(`winners are with scores ${winner}`);
console.log(`the price amount is: ${
    winner.reduce((a, b) => a + b, 0)
}`)
}

randomWinner();