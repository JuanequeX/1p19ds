let x = 6
let y = 7

// Maximo Comun Divisor
function gcd (n, m) {
    let temporal = 0
    
    while (n % m != 0) {
        temporal = n % m
        n = m
        m = temporal
    }
    return m
 }

function lcm (n, m) {
    return ( n * m / gcd(n, m))
} 

console.log("El Minimo Comun Multiplo es: ", lcm(x, y))