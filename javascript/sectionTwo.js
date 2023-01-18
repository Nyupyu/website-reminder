function sectionTwo() {
	const mousePositionX = document.querySelector('.mouse-value-x');
	const mousePositionY = document.querySelector('.mouse-value-y');
	const buttonSectionTwo = document.querySelector('.section-2__button');
	let switchFlag = 0;

	function mousePositionSwitch() {
		// !switchFlag
		// 	? ((switchFlag = 1), (buttonSectionTwo.innerHTML = 'Wyłącz śledzenie'), mousePositionTracker())
		// 	: ((switchFlag = 0), (buttonSectionTwo.innerHTML = 'Włącz śledzenie'), window.removeEventListener('mousemove', mousePositionTracker));
		if (!switchFlag) {
			switchFlag = 1;
			buttonSectionTwo.innerHTML = 'Wyłącz śledzenie';
			mousePositionTracker();
		} else if (switchFlag) {
			switchFlag = 0;
			buttonSectionTwo.innerHTML = 'Włącz śledzenie';
		}
	}

	function mousePositionTracker() {
		let mouseX;
		let mouseY;
		window.addEventListener('mousemove', e => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			mousePositionValueUpdate(mouseX, mouseY);
		});
	}

	function mousePositionValueUpdate(X, Y) {
		if (switchFlag) {
			mousePositionX.textContent = X;
			mousePositionY.textContent = Y;
		} else {
			window.removeEventListener('mousemove', mousePositionTracker);
		}
	}

	buttonSectionTwo.addEventListener('click', () => mousePositionSwitch());
}

sectionTwo();
