

function isArmstrong (n){
    const number = n+'';
    console.log(number.length)
    let sum = 0
    for(let i =0 ;i <number.length;i++){
        const currentNumber = number[i];
        const poweNumber = currentNumber * currentNumber * currentNumber;
         sum = sum+poweNumber;     
    }
    console.log(sum)

    if((n === sum)){
        return `${n} is Armstrong`
    }

    return `${n} is not Armstrong`
}

console.log(isArmstrong(15))