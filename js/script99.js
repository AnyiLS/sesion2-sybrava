$(document).ready(function () {
	$('.boton-1').on('click', () => {
		$('.abrir3').css('display', 'none');
		$('.abrir4').css('display', 'none');
		$('.abrir5').css('display', 'none');
		$('.abrir6').css('display', 'none');
		$('.menu2').css('display', 'block');
		$('.aproli').css('display', 'block');
	})

	$('.aproli').on('click', () => {
		$('.abrir3').css('display', 'block');
		$('.abrir4').css('display', 'block');
		$('.abrir5').css('display', 'block');
		$('.abrir6').css('display', 'block');
		$('.menu2').css('display', 'none');
		$('.aproli').css('display', 'none');
	})

	/**------------ */
	$('.boton-3').on('click', () => {
		$('.abrir2').css('display', 'none');
		$('.abrir4').css('display', 'none');
		$('.abrir6').css('display', 'none');
		$('.abrir5').css('display', 'none');
		$('.menu3').css('display', 'block');
		$('.aproli3').css('display', 'block');
	})

	$('.aproli3').on('click', () => {
		$('.abrir2').css('display', 'block');
		$('.abrir4').css('display', 'block');
		$('.abrir5').css('display', 'block');
		$('.abrir6').css('display', 'block');
		$('.menu3').css('display', 'none');
		$('.aproli3').css('display', 'none');
	})

	/**------------ */
	$('.boton-4').on('click', () => {
		$('.abrir2').css('display', 'none');
		$('.abrir3').css('display', 'none');
		$('.abrir5').css('display', 'none');
		$('.abrir6').css('display', 'none');
		$('.menu4').css('display', 'block');
		$('.aproli4').css('display', 'block');
	})

	$('.aproli4').on('click', () => {
		$('.abrir2').css('display', 'block');
		$('.abrir3').css('display', 'block');
		$('.abrir5').css('display', 'block');
		$('.abrir6').css('display', 'block');
		$('.menu4').css('display', 'none');
		$('.aproli4').css('display', 'none');
	})

	/**------------ */
	$('.boton-5').on('click', () => {
		$('.abrir2').css('display', 'none');
		$('.abrir4').css('display', 'none');
		$('.abrir3').css('display', 'none');
		$('.abrir4').css('display', 'none');
		$('.abrir6').css('display', 'none');
		$('.menu5').css('display', 'block');
		$('.aproli5').css('display', 'block');
	})

	$('.aproli5').on('click', () => {
		$('.abrir2').css('display', 'block');
		$('.abrir4').css('display', 'block');
		$('.abrir3').css('display', 'block');
		$('.abrir4').css('display', 'block');
		$('.abrir6').css('display', 'block');
		$('.menu5').css('display', 'none');
		$('.aproli5').css('display', 'none');
	})

	/**------------ */
	$('.boton-6').on('click', () => {
		$('.abrir2').css('display', 'none');
		$('.abrir4').css('display', 'none');
		$('.abrir3').css('display', 'none');
		$('.abrir4').css('display', 'none');
		$('.menu6').css('display', 'block');
		$('.aproli6').css('display', 'block');
	})

	$('.aproli6').on('click', () => {
		$('.abrir2').css('display', 'block');
		$('.abrir4').css('display', 'block');
		$('.abrir3').css('display', 'block');
		$('.abrir4').css('display', 'block');
		$('.menu6').css('display', 'none');
		$('.aproli6').css('display', 'none');
	})

	// modal 1
	$('.openModal').on('click', () => {
		const selectors = ['slide99-2', 'slide99-3', 'slide99-4']

		$('.modal').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide99-1', 'true')

		$('.cursor').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		const selectors = ['slide99-1', 'slide99-3', 'slide99-4']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal1').css('display', 'block')

		localStorage.setItem('slide99-2', 'true')

		$('.cursor1').hide()
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 3
	$('.openModal2').on('click', () => {
		const selectors = ['slide99-1', 'slide99-2', 'slide99-4']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal2').css('display', 'block')

		localStorage.setItem('slide99-3', 'true')

		$('.cursor2').hide()
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	// modal 3
	$('.openModal3').on('click', () => {
		const selectors = ['slide99-1', 'slide99-2', 'slide99-3']
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal3').css('display', 'block')

		localStorage.setItem('slide99-4', 'true')

		$('.cursor3').hide()
	})
	// cerra modal
	$('.closeModal3').on('click', () => {
		$('.modal3').css('display', 'none')
	})

	$('.play-boton-10').on('click', () => {
		$('.play-boton-10').hide()
		localStorage.setItem('slide21', 'true')

		$('.boton-next').show()
		$('.vutom-col').hide()

		$('.cursor').hide()
		$('.reproduc').show()
	})
})
