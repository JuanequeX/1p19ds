let a = 20

function primo (a) {
    let numero = 2
    let primo = 1

    while (a > 0) {
        primo = 1
        for ( let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = 0
                break 
            }
        }

        if (primo) {
            console.log(numero)
            a--
    }

    numero++
  }
}
primo(a)
