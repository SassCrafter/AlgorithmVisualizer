
export default class {
	constructor(algo) {
		this.algo = algo;
		this.algoLen = this.algo.steps.length - 1;
		this.controls = document.getElementById('visualizer-controls');
		this.controls.addEventListener('click', this.clickHandler.bind(this));
		this.counter = 0;
		this.updateUI(this.algo.steps[0]);
	}

	reset(algorithm) {
		this.algo = algorithm;
		this.algoLen = this.algo.steps.length - 1;
		this.updateUI(this.algo.steps[0]);
		this.counter = 0;
	}

	showNextStep() {
		this.counter += 1;
		if (this.counter > this.algoLen) {
			this.counter = this.algoLen;
			return;
		};
		const currentStep = this.algo.steps[this.counter];
		// if (currentStep.action) {
		// 	currentStep.action()
		// }
		//this.updateStepsCounterUI(currentStep);
		//this.updateUI(currentStep, 'forward');
		this.updateUI(currentStep);
	}

	showPrevStep() {
		let currentStep;
		if (this.counter > 0) {
			const expl = this.algo.steps[this.counter].explanation;
			currentStep = this.algo.steps[this.counter];
			if (currentStep.action) {
				currentStep.action();
			}
		} else {
			this.counter = 0;
		}
		this.counter -= 1;
		this.updateStepsCounterUI(currentStep);
		// if (this.counter < 0) {
		// 	this.counter = 0;
		// };
		// if (expl === 'Swap') {
		// 	currentStep = this.algo.steps[this.counter + 1];
		// } else {
		// 	currentStep = this.algo.steps[this.counter + 1];
		// };
		//this.updateUI(currentStep, 'backwards');
	}

	goToStart() {
		this.playAlgoToStart(this.counter, 0);
		this.counter = 0;
		const currentStep = this.algo.steps[0];
		this.updateUI(currentStep);
	}

	goToEnd() {
		this.playAlgoToEnd(this.counter, this.algo.steps.length);
		this.counter = this.algoLen;
		const currentStep = this.algo.steps[this.counter];
		this.updateUI(currentStep);
	}

	playAlgoToStart(start, end) {
		for (let i = start; i > end; i--) {
			const currentStep = this.algo.steps[i];
			this.updateUI(currentStep);
		}
	}

	playAlgoToEnd(start, end) {
		for (let i = start; i < end - 1; i++) {
			const currentStep = this.algo.steps[i];
			//console.log(currentStep);
			this.updateUI(currentStep);
		}
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

	// updateUI(stepsObj, direction) {
	// 	document.getElementById('explanation').textContent = stepsObj.explanation;
	// 	document.getElementById('steps-count').textContent = `${this.counter}/${this.algoLen}`;
	// 	if (stepsObj.sorted) {
	// 		stepsObj.firstItem.classList.add('sorted');
	// 	}
	// 	if (stepsObj.action) {
	// 		if (direction === 'forward') {
	// 			stepsObj.action(stepsObj.firstItem, stepsObj.secondItem);
	// 		} else if (direction === 'backwards') {
	// 			stepsObj.action(stepsObj.secondItem, stepsObj.firstItem)
	// 		}
	// 	}
	// }


	clickHandler(e) {
		const method = e.target.dataset.step;
		this[method]();
	}
}