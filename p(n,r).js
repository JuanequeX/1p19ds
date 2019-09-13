function factor (a) {
    let r = 1

    for ( let i = 1; i <= a; i++ ) {
        r = r * i
    } 
    return r
}

function h(a, r){
    return (factor(a)) / factor((a - r))
}
console.log(h(2, 2))