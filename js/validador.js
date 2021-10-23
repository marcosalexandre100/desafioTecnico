
    
    function validar() {

     
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var celular = document.getElementById("celular");
    var termo = document.getElementById("termo");

    if (nome.value == "") {
        alert("Por favor, informe o nome.");
        nome.focus();
        return false;
        
    }

    if (cpf.value == "") {
        alert("Por favor, informe o CPF.");
        cpf.focus();
        return false;
    }

    if (endereco.value == "") {
        alert("Por favor, informe o endereço.")
        endereco.focus();
        return false;
    }

    if (numero.value == "") {
        alert("Por favor, informe o número de endereço.")
        numero.focus();
        return false;
    }

    if (celular.value == "") {
        alert("Por favor, informe o telefone de celular.")
       celular.focus();
        return false;
    }

    if (!termo.checked) {
        alert("É preciso estar ciente com o Termo de Política de Privacidade do iti.")
        termo.focus();
        return false;
    }
   else{
      alert("Informações enviadas com sucesso");
   }
}

