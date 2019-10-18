function factor  (n) {
    let r = 1
    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 
    return r
}

function cambio(i) {
  if (i % 2 === 0) return -1;
  else return 1;
};
function coseno  (x){
  let sum = 1
  let top = 15

  for (let i = 2, c = 2; c <= top; i += 2, c++) {
    sum += cambio(c) * (Math.pow(x, i) / factor(i));
  }
  return sum;
};

console.log(coseno(90));