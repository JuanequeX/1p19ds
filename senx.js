function factor  (n)  {
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 

    return r
}

function tras (i){
  if (i % 2 === 0) return -1;
  else return 1;
};

function senX (x) {
  let sum = 0;
  let top = 15
  for (let i = 1, c = 1; c <= top; i += 2, c++) {
    sum += tras(c) * (Math.pow(x, i) / factor(i));
  }
  return sum;
};

console.log(senX(8));
