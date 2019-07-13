//PARTE DE VALIDACAO DO FORMULARIO
function validar() {

    var nome = cadastroCliente.nome.value;
    var email = cadastroCliente.email.value;
    var cidade = cadastroCliente.cidade.value;
    var estado = cadastroCliente.estado.value;
  
    //frm.nome.value.lenght < 3
    if (cadastroCliente.nome.value == "") {
      alert('Preencha o campo com seu nome');
      cadastroCliente.nome.focus();
      return false;
    }
  
    if (email == "") {
      alert('Preencha o campo com seu email');
      cadastroCliente.email.focus();
      return false;
    }
  
    if (cidade == "") {
      alert('Preencha o campo com sua cidade');
      cadastroCliente.cidade.focus();
      return false;
    }
  
    if (estado == "") {
      alert('Preencha o campo com seu estado');
      cadastroCliente.estado.focus();
      return false;
    }
  }
  