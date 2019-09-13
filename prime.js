let x = 10;
let y = 2;
let prime = [];

for (; y < x; y++) {

  if (primo(y)) {
    prime.push(y);
  }
  
}

console.log(prime);

function primo(numero) {

  for (let i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

