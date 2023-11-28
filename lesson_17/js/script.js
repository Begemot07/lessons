//Показати пароль
function togglePassword() {
	const passwordInput = document.querySelector(".password-eye")
	const eyeOuter = document.getElementById("eyeOuter")
	const eyeInner = document.getElementById("eyeInner")

	if (passwordInput.type === "password") {
		passwordInput.type = "text" // Показати пароль
		eyeOuter.setAttribute("stroke", "#7f1eff") // Змінити колір ліній на зелений
		eyeInner.setAttribute("stroke", "#7f1eff") // Змінити колір ліній на зелений
		eyeOuter.setAttribute("stroke-width", "2.5")
		eyeInner.setAttribute("stroke-width", "2.5")
	} else {
		passwordInput.type = "password" // Приховати пароль
		eyeOuter.setAttribute("stroke", "#807D7E") // Повернути колір ліній на початковий
		eyeInner.setAttribute("stroke", "#807D7E") // Повернути колір ліній на початковий
		eyeOuter.setAttribute("stroke-width", "1.5")
		eyeInner.setAttribute("stroke-width", "1.5")
	}
}
