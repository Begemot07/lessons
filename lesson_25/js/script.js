"use strict"
/*
Задача №1
Отримати в константу елемент <body>
*/
// Розв'язок
// const bodyElement = document.body

/*

Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції,
	 також мати значення за замовченням)
---------------------------------------------------
//оголошуємо функцію у якої по дефолту параметр має кількість елеменів 1
function createList(quantityIteems = 1) {
	//створюємо елемент ul
	const listElements = document.createElement("ul")
	for (let index = 0; index < quantityIteems; index++) {
		//створюємо ел LI
		const elLi = document.createElement("li")
		// на кожній ітерації додаємо елемент elLi
		listElements.appendChild(elLi)
	}
	//додаємо список з елементами в body
	const bodyElement = document.body
	bodyElement.appendChild(listElements)
	console.log(listElements)
}
createList(3)
*/

/*
Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зедлений.
-----------------------
const bodyElement = document.body
bodyElement.classList.add("loaded")

bodyElement.closest(".loaded")
	? (bodyElement.style.color = "green")
	: (bodyElement.style.color = "red")
*/

/*
Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на 
"Елемент №(тут порядковий номер елементу починаючи з 1)".
-----------------------------------------
const activeElement = document.querySelectorAll(".item")
console.log(activeElement)
activeElement.forEach((e, i) => {
	e.textContent = `Елемент №${i + 1}`
})
*/
/*
Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
---------------------------------------*/
const buttonGet = document.querySelector(".text-box__button")
function scrollToButton(el) {
	el.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth",
	})
}
scrollToButton(buttonGet)

const clickButton = buttonGet.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	})
})

/*
Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поtім отримати значення aтрибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
const someLink = document.querySelector(".link")
someLink.dataset.speed = "100"
const getAtribute = parseFloat(someLink.dataset.speed)
console.log(getAtribute)
getAtribute < 200 ? (someLink.style.color = "red") : console.log(`>=200`)
*/
//Практика якась

//WINDOWS

// const windowWidth = window.innerWidth
// console.log(windowWidth)
// const windowHeight = window.innerHeight
// console.log(windowHeight)

// --------------

//BOM

// console.log(navigator.userAgent)

// if (navigator.userAgent.includes("Chrome")) {
// 	console.log("Браузер Google Chrome")
// } else if (navigator.userAgent.includes("Firefox")) {
// 	console.log("firefox browser")
// }

// --------------------------
// console.log(navigator.platform)

// console.log(location.href) //доступ до адресного рядка
// ----------------------------------------
// let greeting = "Hello!"
// alert(greeting)
// alert("Hello again")
// ------------------------------------------

// let greetingConfirm = confirm("Are you ok?")
// confirm(greeting)
//greetingConfirm ? console.log("yes") : console.log("no")
// ------------------------------------------

// let promptAnswer = prompt("How old are you?")
// // promptAnswer
// // 	? console.log("You are an old man")
// // 	: console.log("Do not be ashamed of your age")
// if (promptAnswer === "") {
// 	alert("Please, enter your age!")
// 	location.reload()
// } else if (promptAnswer === null || promptAnswer.length < 2) {
// 	alert("Do not be ashamed of your age")
// 	location.reload()
// } else {
// 	alert("You are an old man")
// }

// ===================DOM============================
// звернутися до тегу html
// const htmlElement = document.documentElement
// htmlElement.classList.add("show")
// -----------
// до тегу head
// const headElement = document.head
// ------------
// до тегу body
// const bodyElement = document.body

// const firstChild = bodyElement.firstElementChild
// console.log(firstChild)
// const lastChild = document.body.lastElementChild
// console.log(lastChild)
// const childNodes = document.body.children
// console.log(childNodes)
// for (let i = 0; i <= childNodes.length; ++i) {
// 	console.log(childNodes[i])
// }
// for (const childNode of childNodes) {
// 	console.log(childNode)
// }
// -----навігація до батьківських та сусідніх елементів:

// const previousSIbling = document.body.previousElementSibling
// console.log(previousSIbling)
// const nextsibling = document.head.nextElementSibling
// console.log(nextsibling)
// const parentElement = document.body.parentElement
// console.log(parentElement)
// --Пошук та отримання довільного елементу:
// const someElement = document.querySelector(".page")
// console.log(someElement)
// const allP = document.querySelectorAll("p")
// console.log(allP)
// allP.forEach((el) => {
// 	console.log(el)
// })
// -----closest — перевірка наявності батьківського об'єкта, перевіряє чи є вказаний селектор у самого об'єкту:

// const listOfParag = document.querySelector(".page__span")
// console.log(listOfParag)
// const isParagraphParent = listOfParag.closest(".page")
// const htmlElement = document.documentElement

// isParagraphParent ? htmlElement.classList.add("show") : console.log("try again")

// ------------Зміна документа:
// innerHTML — отримати те, що всередині об'єкту,
// включно з тегами; дозволяє перезаписувати контент в середині об'єкта;
// const listItems = document.querySelectorAll("p")
// console.log(listItems)
// listItems.forEach((listItem, index) => {
// 	console.log(listItem)
// 	listItem.innerHTML = `<span> hello</span>`
// })

// ----
// textContent — отримати текст всередині об'єкту;
// дозволяє перезаписувати текст в середині об'єкта,
//  але не додає теги, теги будуть як текст;
// console.log(listItems)
// listItems.forEach((listItem, index) => {
// 	console.log(listItem)
// 	listItem.textContent = `hello again`
// })
// --------------------Створення об'єктів — createElement:
// const newObject = document.createElement("div")

// newObject.innerHTML = `<span class="new-span"> доданий елемент в створениj div</span>`
// console.log(newObject)

// const wrap = document.querySelector(".wrapper")
// console.log(wrap)

// wrap.append(newObject)
// // вставка створеного об'єкта перед —`page.before(newObject);`
// // після — `page.after(newObject);`
// // всередину на початок — `page.prepend(newObject)`
// // всередину в кінець — `page.append(newObject)`
