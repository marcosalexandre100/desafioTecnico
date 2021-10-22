function mascara_cpf(){
    var cpf = document.getElementById('cpf')
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += "."
    }else if(cpf.value.length == 11){
        cpf.value += "-"
    }
}


function mascara_fixo(){
    var telefone = document.getElementById('telefone')
    if(telefone.value.length == 2 || telefone.value.length == 7){
        telefone.value += "-"
    }
}

function mascara_celular(){
    var celular = document.getElementById('celular')
    if(celular.value.length == 2 || celular.value.length == 8){
        celular.value += "-"
    }
}

function mascara_cep(){
    var cep = document.getElementById('cep')
     if(cep.value.length == 5) {
         cep.value += "-"
     }
}