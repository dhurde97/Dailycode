
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
    for (let i = 2; i < number/2; i++) {
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