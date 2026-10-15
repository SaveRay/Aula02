// escreva um programa que converta uma temperatura de C para F
//vice versa

var temperatura = 80
var tipoTemperatura = "F"
var temperaturaConvertida = 0

if (tipoTemperatura == "C") {
    console.log("Você escolheu Celsius!")
    temperaturaConvertida = ((temperatura * 1.8) +32)
}else {
    console.log("Você escolheu Fahrenheit!")
    temperaturaConvertida = ((temperatura - 32) * (5/9))
}


console.log("O valor convertido é : " + temperaturaConvertida)