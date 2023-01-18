function sectionOne() {
	const buttonSectionOne = document.querySelector('.section-1__button');
	const div = document.querySelector('.section-1__pop-up');

	function clickFunction() {
		if (div.classList.contains('section-1__pop-up--close')) {
			div.classList.remove('section-1__pop-up--close');
			div.classList.add('section-1__pop-up--open');
		} else {
			div.classList.remove('section-1__pop-up--open');
			div.classList.add('section-1__pop-up--close');
		}
	}

	buttonSectionOne.addEventListener('click', () => clickFunction());
}

sectionOne();
