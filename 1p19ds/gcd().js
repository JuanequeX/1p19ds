// O(f(n))
let a = 2
let b = 5

function gcd (n, m) {
   let temp = 0
   
   while (n % m != 0) {
       temp = n % m
       n = m
       m = temp
   }
   return m
}

console.log(gcd(2, 5))