// const iconTogle = document.querySelector(".icon-burger")

// iconTogle.addEventListener("click", function () {
// 	document.documentElement.classList.toggle("menu-open")
// })

// password hide

const togglePassword = () => {
	const passwordInput = document.getElementById("pass")
	const hideSpan = document.getElementById("pass-hide")

	if (passwordInput.type === "password") {
		passwordInput.type = "text"
		hideSpan.style.textDecoration = "line-through"
		hideSpan.style.color = "#8a33fd"
	} else {
		passwordInput.type = "password"
		hideSpan.style.textDecoration = "none"
		hideSpan.style.color = "inherit"
	}
}

const hideSpan = document.getElementById("pass-hide")
hideSpan.addEventListener("click", togglePassword)
