// JavaScript source code
'use strict';
/*Para combater essas deficiências, você pode ativar o modo estrito,que reduz erros silenciosos,
melhora o desempenho, fornece mais avisos e menos recursos não seguros.*/

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
	document.body.classList.toggle('dark-theme');

	/*abaixo, código para atualizar o rótulo do botão*/
	var className = document.body.className;
	if(className == "light-theme") {
		this.textContent = "Dark";
	}
	else {
		this.textContent = "Light";
	}

	console.log('current class name: ' + className);
});