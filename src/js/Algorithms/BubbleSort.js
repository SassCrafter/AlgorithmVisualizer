import Algo from './Algo';
import { createStepObj } from '../helpers/helperFunctions';

export default class extends Algo {
	constructor(arr) {
		super(arr);
		this.steps = [
			{
				explanation: 'Starting Bubble Sort',
				action: this.removeClasses.bind(this),
			},
			{
				explanation: 'For each pass, we will move left to right swapping adjacent elements as needed. Each pass moves the next largest element into its final position.',
				action: null,
			},
			{
				explanation: 'Starting pass 0',
				action: null
			},
			{
				explanation: 'For each element moving through the list',
				action: null,
			}
		];
		this.counter = 0;
		this.sort();
	}

	sort(start = 0) {
		let swapped;
		let arr = this.arr.array;
		let counter = arr.length - 1;
	    do {
	         swapped = false;
	        for (let i = start; i < counter; i++) {
				this.steps.push(createStepObj('Compare elements', i, i + 1, this.selectValue.bind(this, 'selected', 'orange-bg', i, i + 1)));
	            if (arr[i] > arr[i + 1]) {
					this.steps.push(createStepObj('Swap', i, i + 1, this.swap.bind(this, i, i + 1, 'orange-bg')));
	                const temp = arr[i];
	                arr[i] = arr[i + 1];
					arr[i + 1] = temp;
	                swapped = true;
				}
			}
			this.steps.push(createStepObj('Done this pass, moving to the next one', counter, null, this.selectValue.bind(this, 'sorted', null, counter)));
			counter -= 1;
		} while(swapped);
		this.steps.push(createStepObj('Done sorting', null, null, this.doneSorting.bind(this)));
	}
}