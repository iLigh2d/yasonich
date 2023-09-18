const burgerBtn = document.querySelector('#nav-icon3')
const headerBody = document.querySelector('.header__body')
const header = document.querySelector('.header__items')

burgerBtn.addEventListener('click', showBurger)

function showBurger() {
    headerBody.classList.toggle('_active')
    burgerBtn.classList.toggle('_active')
    document.body.classList.toggle('_lock')
}

//============HIDE HEADER======
const intro = document.querySelector('.header')

window.addEventListener('scroll', function() {
  if(scrollY > intro.offsetHeight) {
    header.classList.add('header__fixed')
  } else {
    header.classList.remove('header__fixed')
  } 
})

//===============SCROLL===========
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if(menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLink);
	});
}
function onMenuLink(e){
  const menuLink = e.target;
  headerBody.classList.remove('_active')
  burgerBtn.classList.remove('_active')
  if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__items').offsetHeight -50
    
    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();

    document.body.classList.remove('_lock')
  }
}


//========Animation blocks==========
let animItems = document.querySelectorAll('._anim');

if(animItems.length > 0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll(start) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 5;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;

			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add("_hide");
			} else{
				if(!animItem.classList.contains('anim-no-height')){
				animItem.classList.remove("_hide");
			}
		}
	}
}
	function offset(el){
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() =>{
		animOnScroll();
	}, 300);
	
}	