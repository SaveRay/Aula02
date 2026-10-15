//validar se o valor é negativo, zero ou positivo

var numeroUsuario = 0

if (numeroUsuario >= 0) {
    //if dentro if gera uma segunda validação
    if(numeroUsuario == 0) {
        console.log("O numero é ZERO")
    }else {
        console.log("O numero é POSITIVO!!!")
    }
    
} else {
    console.log("O numero é NEGATIVO!!")
}