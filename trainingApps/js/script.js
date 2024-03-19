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

	let coefficient = 1 + Math.floor(Math.random() * (3 - 1 + 1))
	let res = Math.ceil(((bestScore - yourScore) / 1000) * coefficient)

	if (res < 5) res = 7
	sum += res
	if (sum >= goal) {
		alert("Вітаю! Задача на сьогодні зроблена!")
		window.location.reload()
	}

	const outputSum = document.querySelector(".output__sum")
	const outputYourScore = document.querySelector(".output__your-score")
	const outputBestScore = document.querySelector(".output__best-score")
	const outputKoeficient = document.querySelector(".output__koeficient")
	const outputRepley = document.querySelector(".output__repley")

	// outputSum.innerText = "Сума повторень: " + sum
	outputSum.innerHTML = `Сума повторень: <span>${sum}</span>`
	outputYourScore.innerHTML = `Сума повторень: <span>${yourScore}</span>`
	outputBestScore.innerHTML = `Сума повторень: <span>${bestScore}</span>`
	outputKoeficient.innerHTML = `Сума повторень: <span>${coefficient}</span>`
	outputRepley.innerHTML = `Сума повторень: <span>${res}</span>`
})
