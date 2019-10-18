const a =10;
const b = 2
let temporal = 0;
let formula

for(let i =1; i <= a; i++)
{
  temporal += Math.pow(i,b);
}
let x = b + 1;

formula = ((1/x)*(Math.pow(10,3)))

console.log('La sumatoria es: '+ temporal);
console.log('La formulación es: '+formula);