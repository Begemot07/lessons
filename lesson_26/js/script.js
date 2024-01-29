"use strict"
/*
Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас  */
// const items = document.querySelectorAll(".item")
// items.forEach((item) => {
// 	console.log(item)
// 	item.addEventListener("click", () => {
// 		item.classList.toggle("active")
// 		if (item.classList.contains("active")) {
// 			item.style.color = "red"
// 		} else {
// 			item.style.color = ""
// 		}
// 	})
// })
const itemsList = document.querySelectorAll(".item")
itemsList.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("active")
	})
})
/*
Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/

const bodyElement = document.body
window.addEventListener("load", () => {
	bodyElement.classList.add("opacityNormal")
	if (bodyElement.classList.contains("opacityNormal")) {
		bodyElement.style.opacity = "1"
	}
})
/*
Задача №3
Дано в html: header main footer
При наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/
const headerElement = document.querySelector("header")
const footerElement = document.querySelector("footer")

headerElement.addEventListener("mouseover", () => {
	footerElement.classList.add("bg-green")
})

headerElement.addEventListener("mouseout", () => {
	footerElement.classList.remove("bg-green")
})
/*
Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запускатись коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/

const item = document.querySelector(".text-box__item")

let startTimeGet = parseInt(item.getAttribute("data-start")) || 1
let endTimeGet = parseInt(item.getAttribute("data-end")) || 10
let intervalItem = parseInt(item.getAttribute("data-interval")) || 600

let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshhold: 0.3,
}

let callback = (entries, observer) => {
	entries.forEach((entry) => {
		const targetElement = entry.target
		if (entry.isIntersecting) {
			targetElement.classList.add("show")

			let timer = setInterval(() => {
				item.textContent = startTimeGet
				startTimeGet >= endTimeGet ? clearInterval(timer) : null
				++startTimeGet
			}, intervalItem)

			// console.log("елемент видно")
			observer.disconnect() //вимикаємо щоб не повторювалося слідкування
		} else {
			targetElement.classList.remove("show")
			console.log("елемент не видно")
		}
	})
}

let observer = new IntersectionObserver(callback, options)

let target = document.querySelector(".text-box__item")
observer.observe(target)
