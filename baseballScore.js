function findTotalCombinations(n){
    let count=0;
    let num=n/3;
    for(i=0;i<=num;i++){
        for(j=0;j<=num;j++){
            for(k=0;k<=num;k++){
                if(i*3+j*5+k*10==n){
                    count++;
                    console.log(i*3,j*5,k*10);
                }
            }
        }
    }
    console.log("there are "+count+"  possible ways for getting the score "+n);
}

findTotalCombinations(100)