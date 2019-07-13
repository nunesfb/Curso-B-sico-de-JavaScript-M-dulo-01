//PARTE DE VALIDACAO DO FORMULARIO
function validar() {
  
    //frm.nome.value.lenght < 3
    if (cadastroCliente.nome.value == "") {
      alert('Preencha o campo com seu nome');
      cadastroCliente.nome.focus();
      return false;
    }
  
    if (cadastroCliente.idade.value == "") {
        alert('Preencha o campo com sua idade');
        cadastroCliente.idade.focus();
        return false;
      }

      if (cadastroCliente.salario.value == "") {
        alert('Preencha o campo com seu salário');
        cadastroCliente.salario.focus();
        return false;
      }
  }
  