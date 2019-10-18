const a = [1,2,1,5,6,2,9]

function repetidos (cadena) {
    let temporal = []
    for (let i = 0; i < cadena.length; i++) {
        for (let j = 0; j < i; j++) {            
            if (cadena[i]===cadena[j]){  
               temporal.push(cadena[i])
            } 
        } 
    } 

    return temporal
}

console.log("Los repetidos son: ", repetidos(a))