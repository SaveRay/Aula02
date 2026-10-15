var salarioUsuario = 4000
var salariototal;

if (salarioUsuario > 1000) {

    if (salarioUsuario <= 2000)
    {
        salariototal = (salarioUsuario * 0.15) + salarioUsuario
    }else{
         salariototal = (salarioUsuario * 0.20) + salarioUsuario   
    }
}else{
    salariototal = (salarioUsuario * 0.10) + salarioUsuario
}

console.log("O valor final do salário sera: " + salariototal)