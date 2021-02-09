const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const scaleValue = (value, from, to) => {
	const scale = (to[1] - to[0]) / (from[1] - from[0]);
	const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
	return ~~(capped * scale + to[0]);
}

const createStepObj = (explanation, firstVal, secondVal, action) => {
	const obj = {
		explanation,
		firstItem: firstVal,
		secondItem: secondVal,
		action
	};
	return obj;
}

const findCheckedInput = (inputSelector, form = null) => {
	let inputs;
	if (form) {
		inputs = form.querySelectorAll(inputSelector);
	} else {
		inputs = document.querySelectorAll(inputSelector);
	}
	const checked = Array.from(inputs).find(input => input.checked);
	return checked;
}

const updateELTextContent = (el, text) => {
	el.textContent = text;
}


const updateELTextContentSelector = (selector, text) => {
	const el = document.querySelector(selector);
	if (el) el.textContent = text;
}


export {getRandomNumber, scaleValue, createStepObj, findCheckedInput, updateELTextContent, updateELTextContentSelector};