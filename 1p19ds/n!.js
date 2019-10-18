function factor(n){
    let await  = 1

    for ( let i = 1; i <= n; i++ ) {
        await  = await  * i
    } 
    return await 
}


console.log(factor(3))

module.exports = factor