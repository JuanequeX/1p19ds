let n = 9;

function factorial(n){
    let temp = 1;
    for(i=1; i<=n; i++)
    {
        temp *= i;
    }
    return  temp
}

function calcular(n){
    let temp = 0;
    for( let i=0;i<=n; i++)
    {
     temp += 1/(factorial(i))
    }
    return temp
}


 console.log('Euler: '+ calcular(9))

