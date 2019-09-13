let x =7
let y = 21;

function MCD(x,y){
let resto = 0;
 while(x % y != 0 ){
     resto = x%y;
     x=y;
     y= resto;
 }
 return console.log('The MCD is: ' + y);
}

MCD(x,y)