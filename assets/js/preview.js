/* This JS script will create a vertical preview of the survey questions */

function createPreview ( questionType, questionObject ) {
	'use strict';

	console.log(questionObject);

	const pRoot = document.getElementById('pRoot');

	if (questionType === 1 ) {
		const content1 = document.createElement('div');
		const content2 = document.createElement('div');
		const content3 = document.createElement('span');
		const content4 = document.createElement('div');
		const content5 = document.createElement('input');

		content1.classList.add('previewQuestion')
		content3.textContent = questionObject.question;
		content5.placeholder = 'And Your Answer is...';

		content2.appendChild(content3);
		content4.appendChild(content5);
		content1.appendChild(content2);
		content1.appendChild(content4);

		pRoot.appendChild(content1);

		togglePlaceholderOnClick();

	} else if (questionType === 2 ) {

	} else if (questionType === 3) {

	}

	function togglePlaceholderOnClick() {

		const Elements = Array.from(document.querySelectorAll('input'));
		let ElementText = []; // An array to store placeholders

		Elements.forEach(function (element) {
			ElementText.push(element.placeholder); // pushing placeholders into the empty array

			element.addEventListener("focusin", function (event) { // Event listener when element is in focus
				element.placeholder = ""; // setting placeholder to nothing

			});

			window.addEventListener("click", function (event) { // Event listener on when element is not in focus
				if (!element.value && event.target !== element) {
					element.placeholder = ElementText[Elements.indexOf(element)]; // retrieving old placeholder and setting it
				}

			});
		});
	}
}