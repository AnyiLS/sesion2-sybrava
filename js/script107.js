$(document).ready(() => {
	let valor = localStorage.getItem('status')
	let respuestas = localStorage.getItem('valor')
	let intentos = localStorage.getItem('intentos')
	if (respuestas <= '5') {
		$('.casi-logras').css('display', 'block')
        $('#cambio').text(respuestas)
		localStorage.setItem('intentos', intentos -1)
		$('.cantidad').text(parseInt(intentos -1 ) == 1 ? ` queda ${intentos - 1} intento` : ` quedan ${parseInt(intentos) - 1} intentos`)
		if(parseInt(intentos - 1) === 0){
			localStorage.setItem('bloqueo', new Date())
		}
	} else {
		$('.felcitaciones').css('display', 'block')
        $('#felici').text(respuestas)
        $('.boton-next').attr('href', './index109.html')
	}

	

	if (respuestas == '1') {
		$('.personaje').css('display', 'block')
	} else if (respuestas == '2') {
		$('.personaje1').css('display', 'block')
	} else if (respuestas == '3') {
		$('.personaje2').css('display', 'block')
	} else if (respuestas == '4') {
		$('.personaje3').css('display', 'block')
	} else if (respuestas == '5') {
		$('.personaje4').css('display', 'block')
	} else if (respuestas == '6') {
		$('.personaje5').css('display', 'block')
	} else if (respuestas == '7') {
		$('.personaje6').css('display', 'block')
	} else if (respuestas == '8') {
		$('.personaje7').css('display', 'block')
	}
})
