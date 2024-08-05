$(document).ready(function () {
	// Coloca el valor 0
	$('#sumarpuntaje').text(0)

	let pregunta1 = false
	let pregunta2 = false
	let pregunta3 = false
	let pregunta4 = false
	let pregunta5 = false
	let pregunta6 = false
	let pregunta7 = false
	let pregunta8 = false
	let responses = []

	let preguntasabiertas = []

	// modal 1
	$('.openModal').on('click', () => {
		if (!pregunta1) {
			sonidobuttom()
			$('.modal').css('display', 'block')
			pregunta1 = !pregunta1
			preguntasabiertas.push(1)
		}
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 1
	$('.openModal1').on('click', () => {
		if (!pregunta2) {
			sonidobuttom()
			$('.modal1').css('display', 'block')
			pregunta2 = !pregunta2
			preguntasabiertas.push(1)
		}
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 2
	$('.openModal2').on('click', () => {
		if (!pregunta3) {
			sonidobuttom()
			$('.modal2').css('display', 'block')
			pregunta3 = !pregunta3
			preguntasabiertas.push(1)
		}
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	// modal 3
	$('.openModal3').on('click', () => {
		if (!pregunta4) {
			sonidobuttom()
			$('.modal3').css('display', 'block')
			pregunta4 = !pregunta4
			preguntasabiertas.push(1)
		}
	})
	// cerra modal
	$('.closeModal3').on('click', () => {
		$('.modal3').css('display', 'none')
	})

	// modal 4
	$('.openModal4').on('click', () => {
		if (!pregunta5) {
			sonidobuttom()
			$('.modal4').css('display', 'block')
			pregunta5 = !pregunta5
			preguntasabiertas.push(1)
		}
	})
	// cerra modal
	$('.closeModal4').on('click', () => {
		$('.modal4').css('display', 'none')
	})

	// modal 5
	$('.openModal5').on('click', () => {
		if (!pregunta6) {
			sonidobuttom()
			$('.modal5').css('display', 'block')
			pregunta6 = !pregunta6
			preguntasabiertas.push(1)
		}
	})
	// cerra modal
	$('.closeModal5').on('click', () => {
		$('.modal5').css('display', 'none')
	})

	// modal 6
	$('.openModal6').on('click', () => {
		if (!pregunta7) {
			sonidobuttom()
			$('.modal6').css('display', 'block')
			pregunta7 = !pregunta7
			preguntasabiertas.push(1)
		}
	})
	// cerra modal
	$('.closeModal6').on('click', () => {
		$('.modal6').css('display', 'none')
	})

	// modal 7
	$('.openModal7').on('click', () => {
		if (!pregunta8) {
			sonidobuttom()
			$('.modal7').css('display', 'block')
			pregunta8 = !pregunta8
			preguntasabiertas.push(1)
		}
	})
	// cerra modal
	$('.closeModal7').on('click', () => {
		$('.modal7').css('display', 'none')
	})

	/////////////////////////
	$('.openModal').on('mouseover', function () {
		$('#opcion1').css('fill', '#DDDDDD')
	})

	$('.openModal').on('mouseleave', function () {
		$('#opcion1').css('fill', '#f2f2f4')
	})

	$('.openModal1').on('mouseover', function () {
		$('#opcion2').css('fill', '#DDDDDD')
	})

	$('.openModal1').on('mouseleave', function () {
		$('#opcion2').css('fill', '#f2f2f4')
	})

	$('.openModal2').on('mouseover', function () {
		$('#opcion3').css('fill', '#DDDDDD')
	})

	$('.openModal2').on('mouseleave', function () {
		$('#opcion3').css('fill', '#f2f2f4')
	})

	$('.openModal3').on('mouseover', function () {
		$('#opcion4').css('fill', '#DDDDDD')
	})

	$('.openModal3').on('mouseleave', function () {
		$('#opcion4').css('fill', '#f2f2f4')
	})

	$('.openModal4').on('mouseover', function () {
		$('#opcion5').css('fill', '#DDDDDD')
	})

	$('.openModal4').on('mouseleave', function () {
		$('#opcion5').css('fill', '#f2f2f4')
	})

	$('.openModal5').on('mouseover', function () {
		$('#opcion6').css('fill', '#DDDDDD')
	})

	$('.openModal5').on('mouseleave', function () {
		$('#opcion6').css('fill', '#f2f2f4')
	})

	$('.openModal6').on('mouseover', function () {
		$('#opcion7').css('fill', '#DDDDDD')
	})

	$('.openModal6').on('mouseleave', function () {
		$('#opcion7').css('fill', '#f2f2f4')
	})

	$('.openModal7').on('mouseover', function () {
		$('#opcion8').css('fill', '#DDDDDD')
	})

	$('.openModal7').on('mouseleave', function () {
		$('#opcion8').css('fill', '#f2f2f4')
	})
	/////////////////////////
	$('.closeModalerror').on('click', function () {
		$('.pesonajes').css('display', 'block')
		$('.preguntas').css('display', 'block')
		$('.puntaje').css('display', 'block')
		$('.modalerror').css('display', 'none')
	})

	//color de input correcta y no correcta
	$('#verd1').on('click', function () {
		sonidoexitoso()
		$('#verde1').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.modal').fadeOut(1000)
		$('.cls-22-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(1, responses, preguntasabiertas.length === 8)
	})
	$('#verd1-1').on('click', function () {
		sonidoexitoso()
		$('#verde1').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-22-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(1, responses, preguntasabiertas.length === 8)
	})
	$('#verd1-2').on('click', function () {
		sonidoexitoso()
		$('#verde1').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-22-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(1, responses, preguntasabiertas.length === 8)
	})

	$('#verd2').on('click', function () {
		sonidoerroneo()
		$('#verde2').css('stroke', '#fc5c5c')
		$('.modal').fadeOut(1000)
		abrirModalError()
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-1').on('click', function () {
		sonidoerroneo()
		$('#verde2').css('stroke', '#fc5c5c')
		$('.modal').fadeOut(1000)
		abrirModalError()
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-2').on('click', function () {
		sonidoerroneo()
		$('#verde2').css('stroke', '#fc5c5c')
		$('.modal').fadeOut(1000)
		abrirModalError()
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd3').on('click', function () {
		sonidoerroneo()
		$('#verde3').css('stroke', '#fc5c5c')
		$('.modal').fadeOut(1000)
		abrirModalError()
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-1').on('click', function () {
		sonidoerroneo()
		$('#verde3').css('stroke', '#fc5c5c')
		$('.modal').fadeOut(1000)
		abrirModalError()
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-2').on('click', function () {
		sonidoerroneo()
		$('#verde3').css('stroke', '#fc5c5c')
		$('.modal').fadeOut(1000)
		abrirModalError()
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd4').on('click', function () {
		sonidoerroneo()
		$('#verde4').css('stroke', '#fc5c5c')
		$('.modal').fadeOut(1000)
		abrirModalError()
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-1').on('click', function () {
		sonidoerroneo()
		$('#verde4').css('stroke', '#fc5c5c')
		$('.modal').fadeOut(1000)
		abrirModalError()
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-2').on('click', function () {
		sonidoerroneo()
		$('#verde4').css('stroke', '#fc5c5c')
		$('.modal').fadeOut(1000)
		abrirModalError()
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	// pregunta 1

	// pregunta 2
	$('#verd1-preg').on('click', function () {
		sonidoexitoso()
		$('#verde1-preg').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-15-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(2, responses, preguntasabiertas.length === 8)
	})

	$('#verd1-preg-1').on('click', function () {
		sonidoexitoso()
		$('#verde1-preg').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-15-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(2, responses, preguntasabiertas.length === 8)
	})

	$('#verd1-preg-2').on('click', function () {
		sonidoexitoso()
		$('#verde1-preg').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-15-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(2, responses, preguntasabiertas.length === 8)
	})

	$('#verd2-preg').on('click', function () {
		sonidoerroneo()
		$('#verde2-preg').css('stroke', '#fc5c5c')
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(2)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-preg-1').on('click', function () {
		sonidoerroneo()
		$('#verde2-preg').css('stroke', '#fc5c5c')
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(2)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-preg-2').on('click', function () {
		sonidoerroneo()
		$('#verde2-preg').css('stroke', '#fc5c5c')
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(2)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd3-preg').on('click', function () {
		sonidoerroneo()
		$('#verde3-preg').css('stroke', '#fc5c5c')
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(2)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-preg-1').on('click', function () {
		sonidoerroneo()
		$('#verde3-preg').css('stroke', '#fc5c5c')
		$('.closeModalerror').css('right', '9%')
		$('.modal1').fadeOut(1000)
		abrirModalError(2)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-preg-2').on('click', function () {
		sonidoerroneo()
		$('#verde3-preg').css('stroke', '#fc5c5c')
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(2)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd4-preg').on('click', function () {
		sonidoerroneo()
		$('#verde4-preg').css('stroke', '#fc5c5c')
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(2)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-preg-1').on('click', function () {
		sonidoerroneo()
		$('#verde4-preg').css('stroke', '#fc5c5c')
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(2)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-preg-2').on('click', function () {
		sonidoerroneo()
		$('#verde4-preg').css('stroke', '#fc5c5c')
		$('.modal1').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(2)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	// pregunta 2

	// pregunta 3
	$('#verd1-row').on('click', function () {
		sonidoexitoso()
		$('#verde1-row').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-21-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(3, responses, preguntasabiertas.length === 8)
	})
	$('#verd1-row-1').on('click', function () {
		sonidoexitoso()
		$('#verde1-row').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-21-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(3, responses, preguntasabiertas.length === 8)
	})
	$('#verd1-row-2').on('click', function () {
		sonidoexitoso()
		$('#verde1-row').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-21-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(3, responses, preguntasabiertas.length === 8)
	})

	$('#verd2-row').on('click', function () {
		sonidoerroneo()
		$('#verde2-row').css('stroke', '#fc5c5c')
		$('.closeModalerror').css('right', '9%')
		$('.modal2').fadeOut(1000)
		abrirModalError(3)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-row-1').on('click', function () {
		sonidoerroneo()
		$('#verde2-row').css('stroke', '#fc5c5c')
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(3)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-row-2').on('click', function () {
		sonidoerroneo()
		$('#verde2-row').css('stroke', '#fc5c5c')
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(3)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd3-row').on('click', function () {
		sonidoerroneo()
		$('#verde3-row').css('stroke', '#fc5c5c')
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(3)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-row-1').on('click', function () {
		sonidoerroneo()
		$('#verde3-row').css('stroke', '#fc5c5c')
		$('.closeModalerror').css('right', '9%')
		$('.modal2').fadeOut(1000)
		abrirModalError(3)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-row-2').on('click', function () {
		sonidoerroneo()
		$('#verde3-row').css('stroke', '#fc5c5c')
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(3)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd4-row').on('click', function () {
		sonidoerroneo()
		$('#verde4-row').css('stroke', '#fc5c5c')
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(3)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd4-row-1').on('click', function () {
		sonidoerroneo()
		$('#verde4-row').css('stroke', '#fc5c5c')
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(3)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-row-2').on('click', function () {
		sonidoerroneo()
		$('#verde4-row').css('stroke', '#fc5c5c')
		$('.modal2').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		abrirModalError(3)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	// pregunta 3

	// pregunta 4
	$('#verd1-cor').on('click', function () {
		sonidoerroneo()
		$('#verde1-cor').css('stroke', '#fc5c5c')
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '7%')
		$('.closeModalerror').css('top', '10%')
		abrirModalError(4)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd1-cor-1').on('click', function () {
		sonidoerroneo()
		$('#verde1-cor').css('stroke', '#fc5c5c')
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '7%')
		$('.closeModalerror').css('top', '10%')
		abrirModalError(4)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd1-cor-2').on('click', function () {
		sonidoerroneo()
		$('#verde1-cor').css('stroke', '#fc5c5c')
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '7%')
		$('.closeModalerror').css('top', '10%')
		abrirModalError(4)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd2-cor').on('click', function () {
		sonidoerroneo()
		$('#verde2-cor').css('stroke', '#fc5c5c')
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '7%')
		$('.closeModalerror').css('top', '10%')
		abrirModalError(4)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-cor-1').on('click', function () {
		sonidoerroneo()
		$('#verde2-cor').css('stroke', '#fc5c5c')
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '7%')
		$('.closeModalerror').css('top', '10%')
		abrirModalError(4)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-cor-2').on('click', function () {
		sonidoerroneo()
		$('#verde2-cor').css('stroke', '#fc5c5c')
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '7%')
		$('.closeModalerror').css('top', '10%')
		abrirModalError(4)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd3-cor').on('click', function () {
		sonidoerroneo()
		$('#verde3-cor').css('stroke', '#fc5c5c')
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '7%')
		$('.closeModalerror').css('top', '10%')
		abrirModalError(4)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-cor-1').on('click', function () {
		sonidoerroneo()
		$('#verde3-cor').css('stroke', '#fc5c5c')
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '7%')
		$('.closeModalerror').css('top', '10%')
		abrirModalError(4)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-cor-2').on('click', function () {
		sonidoerroneo()
		$('#verde3-cor').css('stroke', '#fc5c5c')
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '7%')
		$('.closeModalerror').css('top', '10%')
		abrirModalError(4)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd4-cor').on('click', function () {
		sonidoexitoso()
		$('#verde4-cor').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-19-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(4, responses, preguntasabiertas.length === 8)
	})
	$('#verd4-cor-1').on('click', function () {
		sonidoexitoso()
		$('#verde4-cor').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-19-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(4, responses, preguntasabiertas.length === 8)
	})
	$('#verd4-cor-2').on('click', function () {
		sonidoexitoso()
		$('#verde4-cor').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal3').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-19-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(4, responses, preguntasabiertas.length === 8)
	})
	// pregunta 4

	// pregunta 5
	$('#verd1-enfe').on('click', function () {
		sonidoexitoso()
		$('#verde1-enfe').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-20-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(5, responses, preguntasabiertas.length === 8)
	})
	$('#verd1-enfe-1').on('click', function () {
		sonidoexitoso()
		$('#verde1-enfe').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-20-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(5, responses, preguntasabiertas.length === 8)
	})
	$('#verd1-enfe-2').on('click', function () {
		sonidoexitoso()
		$('#verde1-enfe').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-20-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(5, responses, preguntasabiertas.length === 8)
	})

	$('#verd2-enfe').on('click', function () {
		sonidoerroneo()
		$('#verde2-enfe').css('stroke', '#fc5c5c')
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(5)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-enfe-1').on('click', function () {
		sonidoerroneo()
		$('#verde2-enfe').css('stroke', '#fc5c5c')
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(5)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-enfe-2').on('click', function () {
		sonidoerroneo()
		$('#verde2-enfe').css('stroke', '#fc5c5c')
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(5)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd3-enfe').on('click', function () {
		sonidoerroneo()
		$('#verde3-enfe').css('stroke', '#fc5c5c')
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(5)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-enfe-1').on('click', function () {
		sonidoerroneo()
		$('#verde3-enfe').css('stroke', '#fc5c5c')
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(5)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-enfe-2').on('click', function () {
		sonidoerroneo()
		$('#verde3-enfe').css('stroke', '#fc5c5c')
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(5)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd4-enfe').on('click', function () {
		sonidoerroneo()
		$('#verde4-enfe').css('stroke', '#fc5c5c')
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(5)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-enfe-1').on('click', function () {
		sonidoerroneo()
		$('#verde4-enfe').css('stroke', '#fc5c5c')
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(5)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-enfe-2').on('click', function () {
		sonidoerroneo()
		$('#verde4-enfe').css('stroke', '#fc5c5c')
		$('.modal4').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(5)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	// pregunta 5

	// pregunta 6
	$('#verd1-ldl').on('click', function () {
		sonidoexitoso()
		$('#verde1-ldl').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-16-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(6, responses, preguntasabiertas.length === 8)
	})
	$('#verd1-ldl-1').on('click', function () {
		sonidoexitoso()
		$('#verde1-ldl').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-16-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(6, responses, preguntasabiertas.length === 8)
	})
	$('#verd1-ldl-2').on('click', function () {
		sonidoexitoso()
		$('#verde1-ldl').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-16-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(6, responses, preguntasabiertas.length === 8)
	})

	$('#verd2-ldl').on('click', function () {
		sonidoerroneo()
		$('#verde2-ldl').css('stroke', '#fc5c5c')
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(6)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-ldl-1').on('click', function () {
		sonidoerroneo()
		$('#verde2-ldl').css('stroke', '#fc5c5c')
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(6)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-ldl-2').on('click', function () {
		sonidoerroneo()
		$('#verde2-ldl').css('stroke', '#fc5c5c')
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(6)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd3-ldl').on('click', function () {
		sonidoerroneo()
		$('#verde3-ldl').css('stroke', '#fc5c5c')
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(6)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-ldl-1').on('click', function () {
		sonidoerroneo()
		$('#verde3-ldl').css('stroke', '#fc5c5c')
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(6)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-ldl-2').on('click', function () {
		sonidoerroneo()
		$('#verde3-ldl').css('stroke', '#fc5c5c')
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(6)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd4-ldl').on('click', function () {
		sonidoerroneo()
		$('#verde4-ldl').css('stroke', '#fc5c5c')
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(6)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-ldl-1').on('click', function () {
		sonidoerroneo()
		$('#verde4-ldl').css('stroke', '#fc5c5c')
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(6)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-ldl-2').on('click', function () {
		sonidoerroneo()
		$('#verde4-ldl').css('stroke', '#fc5c5c')
		$('.modal5').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(6)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	// pregunta 6

	// pregunta 7
	$('#verd1-plas').on('click', function () {
		sonidoerroneo()
		$('#verde1-plas').css('stroke', '#fc5c5c')
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(7)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd1-plas-1').on('click', function () {
		sonidoerroneo()
		$('#verde1-plas').css('stroke', '#fc5c5c')
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(7)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd1-plas-2').on('click', function () {
		sonidoerroneo()
		$('#verde1-plas').css('stroke', '#fc5c5c')
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(7)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd2-plas').on('click', function () {
		sonidoerroneo()
		$('#verde2-plas').css('stroke', '#fc5c5c')
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(7)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-plas-1').on('click', function () {
		sonidoerroneo()
		$('#verde2-plas').css('stroke', '#fc5c5c')
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(7)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-plas-2').on('click', function () {
		sonidoerroneo()
		$('#verde2-plas').css('stroke', '#fc5c5c')
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(7)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd3-plas').on('click', function () {
		sonidoerroneo()
		$('#verde3-plas').css('stroke', '#fc5c5c')
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(7)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-plas-1').on('click', function () {
		sonidoerroneo()
		$('#verde3-plas').css('stroke', '#fc5c5c')
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(7)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd3-plas-2').on('click', function () {
		sonidoerroneo()
		$('#verde3-plas').css('stroke', '#fc5c5c')
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(7)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd4-plas').on('click', function () {
		sonidoexitoso()
		$('#verde4-plas').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-17-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(7, responses, preguntasabiertas.length === 8)
	})
	$('#verd4-plas-1').on('click', function () {
		sonidoexitoso()
		$('#verde4-plas').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-17-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(7, responses, preguntasabiertas.length === 8)
	})
	$('#verd4-plas-2').on('click', function () {
		sonidoexitoso()
		$('#verde4-plas').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal6').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-17-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(7, responses, preguntasabiertas.length === 8)
	})
	// pregunta 7

	// pregunta 8
	$('#verd1-fin').on('click', function () {
		sonidoerroneo()
		$('#verde1-fin').css('stroke', '#fc5c5c')
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(8)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd1-fin-1').on('click', function () {
		sonidoerroneo()
		$('#verde1-fin').css('stroke', '#fc5c5c')
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(8)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd1-fin-2').on('click', function () {
		sonidoerroneo()
		$('#verde1-fin').css('stroke', '#fc5c5c')
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(8)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd2-fin').on('click', function () {
		sonidoerroneo()
		$('#verde2-fin').css('stroke', '#fc5c5c')
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(8)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-fin-1').on('click', function () {
		sonidoerroneo()
		$('#verde2-fin').css('stroke', '#fc5c5c')
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(8)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd2-fin-2').on('click', function () {
		sonidoerroneo()
		$('#verde2-fin').css('stroke', '#fc5c5c')
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(8)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})

	$('#verd3-fin').on('click', function () {
		sonidoexitoso()
		$('#verde3-fin').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-18-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(8, responses, preguntasabiertas.length === 8)
	})
	$('#verd3-fin-1').on('click', function () {
		sonidoexitoso()
		$('#verde3-fin').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-18-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(8, responses, preguntasabiertas.length === 8)
	})
	$('#verd3-fin-2').on('click', function () {
		sonidoexitoso()
		$('#verde3-fin').css('stroke', '#3cc0c6')
		$('.modalerror img').attr('src', './imagenes/respuesta-correcta.webp')
		responses.push(1)
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '18%')
		abrirModalError()
		$('.cls-18-mapa').css('fill', 'url(#Degradado_sin_nombre_8-exitoso)')
		$('#sumarpuntaje').text(responses.length)
		aparecerjose(responses.length)
		cambiarTexto(8, responses, preguntasabiertas.length === 8)
	})

	$('#verd4-fin').on('click', function () {
		sonidoerroneo()
		$('#verde4-fin').css('stroke', '#fc5c5c')
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(8)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-fin-1').on('click', function () {
		sonidoerroneo()
		$('#verde4-fin').css('stroke', '#fc5c5c')
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(8)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	$('#verd4-fin-2').on('click', function () {
		sonidoerroneo()
		$('#verde4-fin').css('stroke', '#fc5c5c')
		$('.modal7').fadeOut(1000)
		$('.closeModalerror').css('right', '9%')
		$('.closeModalerror').css('top', '19%')
		abrirModalError(8)
		validarespuetas(responses, preguntasabiertas.length === 8)
	})
	// pregunta 8
})
