var data = 17
var mes = 10
var ano = 2006


if (data < 1) {
    console.log("Data inválida! tente novamente")
}else {
    if (data > 31) {
        console.log("Data inválida! tente novamente")
    }else {
        if (ano < 1) {
            console.log("Ano inválida! tente novamente")
        }else{
            if ( mes > 12) {
                console.log("Mês inválido! tente novamente")
            }else {
                if (mes == 2) {
                    if (data > 29) {
                         console.log("Data inválida devido ao mês informado! tente novamente")
                    }else {
                    console.log(data + "/" + mes + "/" + ano)
                    }
                        
                }
            }
        }
    }
}
