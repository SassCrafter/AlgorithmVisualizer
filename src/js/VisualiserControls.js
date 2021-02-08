export default class {
	constructor(algo) {
		this.algo = algo;
		this.algoLen = this.algo.steps.length - 1;
		this.controls = document.getElementById('visualizer-controls');
		this.controls.addEventListener('click', this.clickHandler.bind(this));
		this.counter = 0;
	}

	showNextStep() {
		this.counter += 1;
		if (this.counter > this.algoLen) {
			this.counter = this.algoLen;
			return;
		};
		const currentStep = this.algo.steps[this.counter];
		this.updateUI(currentStep);
	}

	showPrevStep() {
		this.counter -= 1;
		if (this.counter < 0) {
			this.counter = 0;
		};
		const currentStep = this.algo.steps[this.counter];
		this.updateUI(currentStep);
	}

	goToStart() {
		this.counter = 0;
		const currentStep = this.algo.steps[0];
		this.updateUI(currentStep);
	}

	goToEnd() {
		this.counter = this.algoLen;
		const currentStep = this.algo.steps[this.counter];
		this.updateUI(currentStep);
	}

	updateUI(stepsObj) {
		document.getElementById('explanation').textContent = stepsObj.explanation;
		document.getElementById('steps-count').textContent = `${this.counter}/${this.algoLen}`;
		if (stepsObj.action) {
			stepsObj.action(stepsObj.firstItem, stepsObj.secondItem);
		}
	}


	clickHandler(e) {
		const method = e.target.dataset.step;
		this[method]();
	}
}