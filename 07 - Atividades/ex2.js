function IMC (peso, altura){
    var resultado = peso/(altura*altura);

    if(resultado < 18.5){
        return "Abaixo do peso";
    } else if(resultado >= 18.5 && resultado < 25){
        return "Peso normal";
    } else if(resultado >= 25 && resultado < 29.9){
        return "Sobrepeso";
    } else if(resultado >= 30 && resultado < 34.9){
        return "Obesidade grau 1";
    } else if(resultado >= 35 && resultado < 39.9){
        return "Obesidade grau 2";
    } else if(resultado >= 40){
        return "Obesidade grau 3";
    }
    
}