import { scaleValue } from './helpers/helperFunctions';

export default class {
	constructor(algo) {
		this.controls = document.getElementById('visualizer-controls');
		this.controls.addEventListener('click', this.clickHandler.bind(this));
		this.speedInput = this.controls.querySelector('#play-speed');
		this.speedInput.addEventListener('change', this.changeSpeedHandler.bind(this));
		//this.speedInput.addEventListener('mousemove', this.changeSpeedHandler.bind(this));
		this.reset(algo);
	}

	reset(algorithm) {
		clearInterval(this.interval)
		this.algo = algorithm;
		this.algoLen = this.algo.steps.length - 1;
		this.counter = 0;
		this.updateUI(this.algo.steps[0]);
		this.playSpeed = 300;
	}

	showNextStep() {
		if (this.playing) return;
		this.counter += 1;
		if (this.counter > this.algoLen) {
			this.counter = this.algoLen;
			return;
		};
		const currentStep = this.algo.steps[this.counter];
		this.updateUI(currentStep);
	}

	// showPrevStep() {
	// 	this.counter -= 1;
	// 	//let currentStep;
	// 	if (this.counter <= 0) {
	// 		this.counter = 0;
	// 		return;
	// 	};
	// 	// if (this.algo.steps[this.counter].explanation === 'Swap') {
	// 	// 	currentStep = this.algo.steps[this.counter];
	// 	// }else {
	// 	// 	this.counter -= 1;
	// 	// 	currentStep = this.algo.steps[this.counter];
	// 	// }
	// 	const currentStep = this.algo.steps[this.counter];
	// 	this.updateUI(currentStep);
	// 	//this.counter -= 1;
	// }

	goToStart() {
		clearInterval(this.interval);
		this.playAlgoToStart(this.counter, 0);
		this.counter = 0;
		const currentStep = this.algo.steps[0];
		this.updateUI(currentStep);
	}

	goToEnd() {
		if (this.playing) return;
		this.playAlgoToEnd(this.counter, this.algoLen);
	}

	playAlgoToStart(start, end) {
		for (let i = start; i > end; i--) {
			const currentStep = this.algo.steps[i];
			this.updateUI(currentStep);
		}
	}

	playAlgoToEnd(start, end) {
		this.playing = true;
		let count = start;
		this.interval = setInterval(() => {
			if (count === end) {
				clearInterval(this.interval);
				this.playing = false;
			}
			const currentStep = this.algo.steps[count];
			this.updateUI(currentStep);
			count++;
			if (this.counter < this.algoLen) {
				this.counter++;
			}
		}, this.playSpeed);
	}

	updateStepsCounterUI(stepObj) {
		document.getElementById('explanation').textContent = stepObj.explanation;
		document.getElementById('steps-count').textContent = `${this.counter}/${this.algoLen}`;
	}

	updateUI(stepObj) {
		this.updateStepsCounterUI(stepObj);
		if (stepObj.action) {
			stepObj.action();
		}
	}


	changeSpeedHandler(e) {
		const value = e.target.value;
		const scaledValue = scaleValue(value, [200, 1000], [1000, 50]);
		this.playSpeed = +scaledValue;
		clearInterval(this.interval);
		this.playAlgoToEnd(this.counter, this.algoLen);
	}


	clickHandler(e) {
		const method = e.target.dataset.step;
		if (method) this[method]();
	}
}