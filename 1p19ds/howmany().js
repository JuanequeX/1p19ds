const a = [1,2,1,5,6,2,9]

function repetidos (cadena)  {
    let contador = 0
    for (let i = 0; i < cadena.length; i++) {
        for (let h = 0; h < i; h++) {            
            if (cadena[i]===cadena[h]){  
               contador++
            } 
        } 
    } 

    return contador
}

console.log('Numeros repetidos:',repetidos(a))