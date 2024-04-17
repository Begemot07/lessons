const iconTogle = document.querySelector(".icon-menu")

iconTogle.addEventListener("click", function () {
	document.documentElement.classList.toggle("menu-open")
})

// -----------------------------------
const myForm = document.getElementById("myForm")

let sum = 0
myForm.addEventListener("submit", (event) => {
	event.preventDefault()

	const formData = new FormData(myForm)
	const yourScore = formData.get("yourScore")
	const bestScore = formData.get("bestScore")
	const goal = formData.get("goal")

	let coefficient = 1 + Math.floor(Math.random() * (4))
	let res = Math.ceil(((bestScore - yourScore) / 1000) * coefficient)

	if (res < 20) res = 40
	sum += res
	if (sum >= goal) {
		alert("Вітаю! Задача на сьогодні зроблена!")
		window.location.reload()
	}

	const outputSum = document.querySelector(".output__sum")
	const outputSumSq = document.querySelector(".output__sum-sq")
	const outputYourScore = document.querySelector(".output__your-score")
	const outputBestScore = document.querySelector(".output__best-score")
	const outputKoeficient = document.querySelector(".output__koeficient")
	const outputRepley = document.querySelector(".output__repley")
	const outputRepleySq = document.querySelector(".output__repley-sq")

	outputSum.innerHTML = `Сума повторень: <strong></strong> <span>${sum}</span>`
	outputSumSq.innerHTML = `Сума присідань: <strong></strong> <span>${sum/2}</span>`
	outputYourScore.innerHTML = `Ваші очки за бій: <strong></strong> <span>${yourScore}</span>`
	outputBestScore.innerHTML = `Кращі очки за бій: <strong></strong> <span>${bestScore}</span>`
	outputKoeficient.innerHTML = `Коефіцієнт: <strong></strong> <span>${coefficient}</span>`
	outputRepley.innerHTML = `Кількість повторень: <strong></strong> <span>${res}</span>`
	outputRepleySq.innerHTML = `Кількість присідань: <strong></strong> <span>${res/2}</span>`
})
