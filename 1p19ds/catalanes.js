function factor  (n)  {
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 

    return r
}
function catalan (n)  { 
    return factor(2 * n) / (factor(n+1) * factor(n))
}

let 
n = 9

for(let i = 0; i < n; i++) {
    console.log(catalan(i))
}