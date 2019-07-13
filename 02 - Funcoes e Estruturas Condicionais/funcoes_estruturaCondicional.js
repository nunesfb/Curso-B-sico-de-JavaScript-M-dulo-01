//alert("Funcionou!");

//funcoes

//sem parametro
function imprime (){
    return "Aloww";
}

//com parametro
function soma (valorA, valorB){
    return valorA * valorB;
}

//estruturas condicionais - IF/ELSE
function verificaIdade (idade){
    if(idade < 18){
        return "Menor de Idade";
    }else if(idade >= 65){
        return "Idoso";
    }
    else{
        return "Adulto";
    }
}

function verificaValor (valorA, valorB){
    // == verifica o valor
    // === verifica o valor e o tipo
    if(valorA == valorB){
        return "Valores iguais";
    }else{
        return "Valores diferentes";
    }
}

function verificaNome (nome){
    if(nome != "Felipe"){
        return "Não te conheço!";
    }
}

function login (login, senha){
    /*if(login == "felipe" && senha == "closed"){
        return "Autenticacao realizada com sucesso!";
    }else{
        return "Login e/ou Senha incorretos";
    }*/

    if(login == "felipe" || senha == "closed"){
        return "Autenticacao realizada com sucesso!";
    }else{
        return "Login e/ou Senha incorretos";
    }
}


//estruturas condicionais - Switch
function diaSemana (dia){
    switch(dia){
        case "segunda":
            console.log("dia útil");
            break;
        case "segunda":
                console.log("dia útil");
                break;
        case "sexta":
                console.log("dia útil");
                break;
        case "domingo":
                console.log("dia de descansar");
                break;
        default:
                console.log("nao sei");
                break;                                               
    }
}
