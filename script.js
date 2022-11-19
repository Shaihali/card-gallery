const slides = document.querySelectorAll('.slide');
const scrollBtnPrev = document.querySelector('.prev')
const scrollBtnNext = document.querySelector('.next')


scrollBtnNext.addEventListener('click', scrollNext)

function scrollNext() {
	let a = document.querySelector('.slide_activ')
	if(a) {
		clearActivClasses()
		a.nextElementSibling.classList.add('slide_activ')
	}else {
		slides[0].classList.add('slide_activ')
	}
}

scrollBtnPrev.addEventListener('click', scrollPrev)

function scrollPrev() {
	let a = document.querySelector('.slide_activ')
	if(a) {
		clearActivClasses()
		a.previousElementSibling.classList.add('slide_activ')
		console.dir(a)
	}else {
		slides[4].classList.add('slide_activ')
	}
}


for(let slide of slides) {
	slide.addEventListener('click', () => {
		clearActivClasses()

		slide.classList.add('slide_activ')
	})
}

function clearActivClasses() {
	slides.forEach((slide) => {
		slide.classList.remove('slide_activ')
	})
}

slides.forEach((slide) => {
	slide.addEventListener('dblclick', () => {
		slide.classList.remove('slide_activ')
	})
})


