const iconTogle = document.querySelector(".header__burger")

iconTogle.addEventListener("click", function () {
	document.documentElement.classList.toggle("menu-open")
})

// password hide

// const togglePassword = () => {
// 	const passwordInput = document.getElementById("pass")
// 	const hideSpan = document.getElementById("pass-hide")

// 	if (passwordInput.type === "password") {
// 		passwordInput.type = "text"
// 		hideSpan.style.textDecoration = "line-through"
// 		hideSpan.style.color = "#8a33fd"
// 	} else {
// 		passwordInput.type = "password"
// 		hideSpan.style.textDecoration = "none"
// 		hideSpan.style.color = "inherit"
// 	}
// }

// const hideSpan = document.getElementById("pass-hide")
// hideSpan.addEventListener("click", togglePassword)

// function changeStarColor(starNumber) {
// 	let stars = document.querySelectorAll(".feedback__star")

// 	for (let i = 0; i < stars.length; i++) {
// 		if (i < starNumber) {
// 			stars[i].classList.add("active")
// 		} else {
// 			stars[i].classList.remove("active")
// 		}
// 	}
// }

// //swiper
// const swiper = new Swiper(".feedback__grid-box", {
// 	// Optional parameters
// 	direction: "horizontal",
// 	loop: true,

// 	// If we need pagination
// 	pagination: {
// 		el: ".feedback__pagination",
// 	},

// 	// Navigation arrows
// 	// navigation: {
// 	// 	nextEl: ".swiper-button-next",
// 	// 	prevEl: ".swiper-button-prev",
// 	// },

// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: ".swiper-scrollbar",
// 	},
// })
