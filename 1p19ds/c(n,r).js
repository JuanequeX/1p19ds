function factor (n){
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 
    return r
}

function P (n, r){
    return (factor(n)) / factor((n - r))
}

function combinacion  (n, r){
    return P(n, r) / factor(r)
}

console.log(combinacion(8, 2))