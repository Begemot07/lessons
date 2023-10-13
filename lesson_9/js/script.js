const circle = document.querySelector(".circle")
const scoreElement = document.getElementById("score")
let score = 0

circle.addEventListener("mouseover", () => {
	score++
	updateScore()
	moveCircle()
})

function updateScore() {
	scoreElement.textContent = score
}

function moveCircle() {
	const maxX = window.innerWidth - 50
	const maxY = window.innerHeight - 50

	const randomX = Math.floor(Math.random() * maxX)
	const randomY = Math.floor(Math.random() * maxY)

	circle.style.left = `${randomX}px`
	circle.style.top = `${randomY}px`
}
