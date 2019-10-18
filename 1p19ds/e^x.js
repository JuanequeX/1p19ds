
const a = 1
let b = 1

function Factorial(b){
    let temp = 1
    for( let i = 1; i <= b; i++ ) {
        temp= temp* i
    } 
    return temp
}


function calcular(a, b){

    if(b <= 0) {
        return 1
    }

    return (Math.pow(a, b)) / (Factorial(b)) + calcular( a , b - 1 )
} 

console.log(calcular(1, 1))
