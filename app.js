// JavaScript source code
'use strict';
/*Para combater essas defici�ncias, voc� pode ativar o modo estrito,que reduz erros silenciosos,
melhora o desempenho, fornece mais avisos e menos recursos n�o seguros.*/

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
	document.body.classList.toggle('dark-theme');

	/*abaixo, c�digo para atualizar o r�tulo do bot�o*/
	var className = document.body.className;
	if(className == "light-theme") {
		this.textContent = "Dark";
	}
	else {
		this.textContent = "Light";
	}

	console.log('current class name: ' + className);
});