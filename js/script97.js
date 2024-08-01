$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		const selectors = ['slide97-2', 'slide97-3', 'slide97-4', 'slide97-5']

		$('.modal').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide97-1', 'true')

		$('.cursor').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		const selectors = ['slide97-1', 'slide97-3', 'slide97-4', 'slide97-5']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal1').css('display', 'block')

		localStorage.setItem('slide97-2', 'true')

		$('.cursor1').hide()
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 3
	$('.openModal2').on('click', () => {
		const selectors = ['slide97-1', 'slide97-2', 'slide97-4', 'slide97-5']

		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal2').css('display', 'block')

		localStorage.setItem('slide97-3', 'true')

		$('.cursor2').hide()
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	// modal 3
	$('.openModal3').on('click', () => {
		const selectors = ['slide97-1', 'slide97-2', 'slide97-3', 'slide97-5']
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal3').css('display', 'block')

		localStorage.setItem('slide97-4', 'true')

		$('.cursor3').hide()
	})
	// cerra modal
	$('.closeModal3').on('click', () => {
		$('.modal3').css('display', 'none')
	})

	// modal 4
	$('.openModal4').on('click', () => {
		const selectors = ['slide97-1', 'slide97-2', 'slide97-3', 'slide97-4']
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		$('.modal4').css('display', 'block')

		localStorage.setItem('slide97-5', 'true')

		$('.cursor4').hide()
	})
	// cerra modal
	$('.closeModal4').on('click', () => {
		$('.modal4').css('display', 'none')
	})
})
