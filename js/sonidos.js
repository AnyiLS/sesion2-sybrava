function sonidoexitoso() {
	let audio = new Audio('imagenes/sonido/buena.mp3')
	audio.play()
}

function sonidoerroneo() {
	let audio = new Audio('imagenes/sonido/mala.mp3')
	audio.play()
}

function sonidobuttom() {
	let audio = new Audio('imagenes/sonido/botones.mp3')
	audio.play()
}

const iamgeneserror = [
	{
		id: 2,
		Image: 'imagenes/mala-2.webp',
	},
	{
		id: 3,
		Image: 'imagenes/mala-3.webp',
	},
	{
		id: 4,
		Image: 'imagenes/mala-4.webp',
	},
	{
		id: 5,
		Image: 'imagenes/mala-5.webp',
	},
	{
		id: 6,
		Image: 'imagenes/mala-6.webp',
	},
	{
		id: 7,
		Image: 'imagenes/mala-7.webp',
	},
	{
		id: 8,
		Image: 'imagenes/mala-8.webp',
	},
]

function abrirModalError(number) {
	if (number) {
		$('.modalerror  img').attr(
			'src',
			iamgeneserror.find((item) => item.id === number).Image
		)
	}
	$('.puntaje').css('display', 'none')
	$('.preguntas').css('display', 'none')
	$('.pesonajes').css('display', 'none')
	$('.modalerror').css('display', 'block')
}

const respuestas = [
	'#jose1',
	'#jose2',
	'#jose3',
	'#jose4',
	'#jose5',
	'#jose6',
	'#jose7',
	'#jose8',
]

function aparecerjose(responses) {
	console.log(responses)
	$(`${respuestas[responses - 1]} img `).css('display', 'block')
	if (responses - 2 < 0) {
		$(`#jose img `).css('display', 'none')
	} else {
		$(`${respuestas[responses - 2]} img `).css('display', 'none')
	}
}

const textosExitoso = [
	{ id: 1, idText: 'text-1', message: 'Niveles óptimos de LDL' },
	{ id: 2, idText: 'text-2', message: 'Sin consumo de tabaco' },
	{
		id: 3,
		idText: 'text-3',
		class: 'cls-14-mapa',
		message: 'Niveles normales de glucosa en sangre',
	},
	{ id: 4, idText: 'text-4', message: 'Peso normal' },
	{
		id: 5,
		idText: 'text-5',
		message: 'Niveles normales  de presión arterial',
	},
	{ id: 6, idText: 'text-6', message: 'Actividad física' },
	{ id: 7, idText: 'text-7', message: 'Endotelio sano' },
	{
		id: 8,
		idText: 'text-8',
		message: 'Factores psicosociales saludables',
	},
]

function cambiarTexto(selector, responses, isTotal) {
	console.log(selector)
	const value = textosExitoso.find((item) => item.id === selector)
	if (value.id === 3 || value.id === 5) {
		const append = `<tspan class="${
			value.class
		}" x="0" y="-20">${value.message
			.split(' ')
			.splice(0, 3)
			.join(' ')}</tspan><tspan class="${
			value.class
		}" x="0" y="20">${value.message
			.split(' ')
			.splice(3, 5)
			.join(' ')}</tspan>`
		$(`#${value.idText}`).html(append)
	} else if(value.id === 8) {
		console.log(value.message.split(' ').slice(1, 2))
		const append = `<tspan class="${
			value.class
		}" x="0" y="-20">${value.message
			.split(' ')
			.splice(0, 2)
			.join(' ')}</tspan><tspan class="${
			value.class
		}" x="0" y="20">${value.message
			.split(' ')
			.splice(2,3)
			.join(' ')}</tspan>`
		$(`#${value.idText}`).html(append)
	} else {
		$(`#${value.idText} tspan`).html(value.message)
	}
	console.log(value)
	if (isTotal && responses.length >= 6) {
		;+setTimeout(() => {
			localStorage.setItem('valor', responses.length)
			window.location.href = './index107.html'
		}, 3000)
	} else if (isTotal && responses.length <= 5) {
		setTimeout(() => {
			localStorage.setItem('valor', responses.length)
			localStorage.setItem('status', 'lost')
			window.location.href = './index107.html'
		}, 3000)
	}
}

function validarespuetas(responses, isTotal) {
	if (isTotal && responses.length >= 6) {
		setTimeout(() => {
			localStorage.setItem('valor', responses.length)
			window.location.href = './index107.html'
		}, 3000)
	} else if (isTotal && responses.length <= 5) {
		setTimeout(() => {
			localStorage.setItem('valor', responses.length)
			localStorage.setItem('status', 'lost')
			window.location.href = './index107.html'
		}, 3000)
	}
}
