const a = 10
const b = 2
let temporal = 0
let formula


for (let i = 0; i <= a; i++) {
    temporal += Math.pow(b, i);
}


formula = (Math.pow(b, a + 1) - 1) / (b - 1)

console.log('La sumatoria es: ', temporal)
console.log('La formula es: ', formula)