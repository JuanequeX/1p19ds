const n =10;
let sumador = 0;
let formula

for(let i =1; i <= n; i++)
{
  sumador += i*i;
}

formula = n*(n+1)*(n+n+1)/6;

console.log('La sumatoria es: '+ sumador);
console.log('La formulación es: '+formula);