
export default class {
	constructor(algo) {
		// this.algo = algo;
		// this.algoLen = this.algo.steps.length - 1;
		this.controls = document.getElementById('visualizer-controls');
		this.controls.addEventListener('click', this.clickHandler.bind(this));
		// this.counter = 0;
		// this.updateUI(this.algo.steps[0]);
		this.reset(algo);
	}

	reset(algorithm) {
		clearInterval(this.interval)
		this.algo = algorithm;
		this.algoLen = this.algo.steps.length - 1;
		this.counter = 0;
		this.updateUI(this.algo.steps[0]);
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
		let currentStep;
		if (this.counter < 0) {
			this.counter = 0;
			return;
		};
		if (this.algo.steps[this.counter].explanation === 'Swap') {
			currentStep = this.algo.steps[this.counter];
		}else {
			this.counter -= 1;
			currentStep = this.algo.steps[this.counter];
		}
		
		this.updateUI(currentStep);
		this.counter -= 1;
	}

	goToStart() {
		this.playAlgoToStart(this.counter, 0);
		this.counter = 0;
		const currentStep = this.algo.steps[0];
		this.updateUI(currentStep);
	}

	goToEnd() {
		this.playAlgoToEnd(this.counter, this.algoLen);
	}

	playAlgoToStart(start, end) {
		for (let i = start; i > end; i--) {
			const currentStep = this.algo.steps[i];
			this.updateUI(currentStep);
		}
	}

	playAlgoToEnd(start, end) {
		let count = start;
		this.interval = setInterval(() => {
			if (count === end) {
				clearInterval(this.interval);
			}
			const currentStep = this.algo.steps[count];
			this.updateUI(currentStep);
			count++;
			if (this.counter < this.algoLen) {
				this.counter++;
			}
			console.log(count);
		}, 300);
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


	clickHandler(e) {
		const method = e.target.dataset.step;
		this[method]();
	}
}