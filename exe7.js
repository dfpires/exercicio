
chefe()

function chefe(){
    exe7()
}

function exe7(){

    var soma = 0
    var conta = 0
    var numero = Number(prompt("Informe um numero"))
    do {

        conta++ // soma 1
        soma = soma + numero // acumulador
        numero = Number(prompt("Informe outro numero. Digite número negativo para encerrar"))
    
    }
    while(numero >= 0)

    console.log(`A média dos numeros informados é ${soma /conta}`)

}