//estrutura de repeticao - while
function calcularWhile (valor){
    //se colocar 5, somente o do while imprime
    //se colocar 1, vai normal
    while(valor < 5){
        console.log(valor++);
    }
}

//estrutura de repeticao - do while
function calcularDoWhile (valor){
    do{
        console.log(valor++);
    }while(valor < 5)
}


//estrutura de repeticao - for
function calcularFor(){
for(var i = 0; i <= 10; i++){
    console.log(i * 2);
}
}

