var frase     = document.getElementById('frase');
var resultado = document.getElementById('resultado');

frase.addEventListener('keyup', function(){
	resultado.textContent = frase.value.split(" ").reverse().join(" ");
});