import Algo from './Algo';
import { createStepObj, removeClassesFromElement } from '../helpers/helperFunctions';


export default class extends Algo {
	constructor(arr) {
		super(arr);
		this.steps = [
			{
				explanation: 'Starting Insertion Sort',
				action: null,
			},
			{
				explanation: 'Highlighted green records to the left are always sorted. We begin with the record in position 0 in the sorted portion, and we will be moving the record in position 1 (in blue) to the left until it is sorted.',
				action: this.removeClasses.bind(this),
			},
		];
		this.sort();
	}

	selectValue(idx, className) {
		const el = this.liArray[idx];
		const prevEl = this.liArray[idx - 1];
		el.classList.toggle('selected');
		prevEl.classList.toggle(className);
		// Selecting all elements already sorted and adding sorted class
		const prevEls = Array.from(this.liArray).slice(0, idx);
		prevEls.forEach(el => {
			removeClassesFromElement(el, className, 'selected');
			el.classList.toggle('sorted');
		});
	}

	swapEls(minElIdx, currentPassElIdx, className) {
		this.swap(minElIdx, currentPassElIdx, className);
	}

	sort() {
		let arr = this.arr.array;
		const len = arr.length;
	    for (let i = 1; i < len; i++) {
	    	this.steps.push(createStepObj(`Processing record in position ${i}`, null, null, this.selectValue.bind(this,i, 'sorted')));
	    	this.steps.push(createStepObj('Move the blue record to the left until it reaches the correct position.', null, null, null));
	        for (let j = i; j > 0; j--) {
	            if (arr[j] < arr[j - 1]) {
	                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
	                this.steps.push(createStepObj('Swap', null, null, this.swapEls.bind(this, j, j - 1, 'orange-bg')))
	            } else {
	                break;
	            }
	        }
	    }
	    this.steps.push(createStepObj('Done sorting', null, null, this.doneSorting.bind(this)))
	}
}