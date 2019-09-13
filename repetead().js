const a = [1,2,5,6,9]

function repetidos (cadena) {
    for (let i = 0; i < cadena.length; i++) {
        for (let h = 0; h < i; h++) {            
            if (cadena[i]===cadena[h]){
                
               return true
            } 
        } 
    }  
     return false
}

console.log(repetidos(a))