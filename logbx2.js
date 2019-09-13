let base= 92;
function log(x){
    return Math.log(x)/Math.log(base); 
}

for(let i = 1; i<=92; i++ )
{
    console.log('Log3('+i+'):' + log(i)  )
}