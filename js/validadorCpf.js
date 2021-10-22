

function validaCpf(cpf = 0){

    var cpf = document.getElementById("cpf").value;
    cpf = cpf.replace(/\.|-/g,"");
    console.log(cpf);
    validaPrimeiroDigito(cpf);
    validaSegundoDigito(cpf);

    if (validaPrimeiroDigito(cpf) == false || validaSegundoDigito(cpf) == false){
        alert('CPF Invalido, favor nos informar corretamente')
		document.getElementById('cpf').value = '';

    } else{
        alert('Cpf valido')
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