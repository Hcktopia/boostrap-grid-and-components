$(document).ready(() => {
	const $container = $('.container')
	const $skillsList = $('.list-group-item')

	$container.on('click', '.card', (event) => {
		const cardTitle = $(event.currentTarget).find('.card-title').text()

		$skillsList.empty().append(`<li>${cardTitle}</li>`)
	})
})
