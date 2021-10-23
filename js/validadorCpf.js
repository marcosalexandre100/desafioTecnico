// CPF ficticio 529.982.247-25  Validamos os ultimos numeros
// Validação do primeiro dígito( 5 * 10 + 2 * 9 + 9 * 8 + 9 * 7 + 8 * 6 + 2 * 5 + 2 * 4 + 4 * 3 + 7 * 2)
// (295*10) % 11 / resto da divisão 2
/// Validação do segundo dígito(5 * 11 + 2 * 10 + 9 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 2 * 5 + 4 * 4 + 7 * 3 + 2 * 2)
//(347*10) % 11 / resto da divisão 5

function validaCpf(cpf = 0){

    var cpf = document.getElementById("cpf").value;
    cpf = cpf.replace(/\.|-/g,"");
    console.log(cpf);
    validaPrimeiroDigito(cpf);
    validaSegundoDigito(cpf);

    if (validaPrimeiroDigito(cpf) == false || validaSegundoDigito(cpf) == false){
        alert('CPF Invalido, favor nos informar corretamente.')
		document.getElementById('cpf').value = '';

    } else{
        alert('CPF valido.')
    }
}

function validaPrimeiroDigito(cpf){
	let soma = 0;
	for (var i = 0; i < cpf.length-2 ; i++) {
		soma += cpf[i] * ((cpf.length-1)-i);
	}
	soma = (soma * 10) % 11;
	if(soma == 10 || soma == 11)
		soma = 0;
	console.log("pd : "+soma)
	if(soma != cpf[9])
	   return false
	return true;
}

function validaSegundoDigito(cpf){
	let soma = 0;
	for (var i = 0; i < cpf.length-1 ; i++) {
		soma += cpf[i] * ((cpf.length)-i);
	}
	soma = (soma * 10) % 11;
	if(soma == 10 || soma == 11)
		soma = 0;
	console.log("sd : "+soma)
	if(soma != cpf[10])
        return false
	return true;
}