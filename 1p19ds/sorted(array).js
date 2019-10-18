function  seleccion(arreglo, comparacion){
  function selecta(a,b){
    return a - b;
  }
    let x = 0;
    let y = 0;
    let z = 0; 

     comparacion = comparacion || selecta

      for(let i = 0; i < arreglo.length; i += 1){ 
         y = i;
         x = arreglo[i];

          for(let h = i+1; h < arreglo.length; h += 1){
            if(comparacion(x, arreglo[h]) > 0){
            x = arreglo[h]
            y=h;
            }
          }
          z = arreglo[i];
          arreglo[i] = x;
          arreglo[y] = z; 
        }
        return arreglo;
}
console.log(seleccion([20,22,680,414,9]), function(a, b){ return a - b })
