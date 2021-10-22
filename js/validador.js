    
    function validar() {

     
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var celular = document.getElementById("celular");
    var termo = document.getElementById("termo");

    if (nome.value == "") {
        alert("É obrigatório informar o nome.");
        nome.focus();
        return false;
        
    }

    if (cpf.value == "") {
        alert("É obrigatório informar o CPF.");
        cpf.focus();
        return false;
    }

    if (endereco.value == "") {
        alert("É obrigatório informar o endereço.")
        endereco.focus();
        return false;
    }

    if (numero.value == "") {
        alert("É obrigatório informar o número de endereço.")
        numero.focus();
        return false;
    }

    if (celular.value == "") {
        alert("É obrigatório informar o telefone de celular.")
       celular.focus();
        return false;
    }

    if (!termo.checked) {
        alert("É preciso estar ciente com o Termo de Política de Privacidade e com a LGPD vigentes.")
        termo.focus();
        return false;
    }
   else{
      alert("Informações enviada com sucesso");
   }
}

