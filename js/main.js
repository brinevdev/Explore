const menuIcon = document.querySelector('.menu__icon');
const body = document.querySelector('body');

menuIcon.addEventListener('click',(e)=>{
    body.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        320:{
            slidesPerView: 1,
        },
        576:{
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    },
    // If we need pagination
    pagination: {
      el: '.slider__pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
  
    // And if we need scrollbar
});
  
const button_up = document.querySelector('.button-up');
button_up.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const top = getCoords(header).top;
    if (top >=80) {
        header.classList.add('_transparent-background');
    } else {
        header.classList.remove('_transparent-background');
    }
})
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 3;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}