import Algo from './Algo';
import { createStepObj } from '../helpers/helperFunctions';

export default class extends Algo {
	constructor(arr) {
		super(arr);
		this.steps = [
			{
				explanation: 'Starting Selection Sort',
				action: null,
			},
			{
				explanation: 'The idea behind selection sort is that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position.',
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
		this.sort();
	}


	sort() {
		 let arr = this.arr.array;
		 const len = arr.length;
	    for (let i = 0; i < len; i++) {
	    	this.steps.push(createStepObj('Select minimum value', this.liArray[i], null, this.selectValue.bind(this, 'orange-bg', i)));
			let min = i;
	        for (let j = i + 1; j < len; j++) {
				this.steps.push(createStepObj('Comparing', this.liArray[j], null, this.selectValue.bind(this, 'selected', j)));
	            if (arr[min] > arr[j]) {
					min = j;
					this.steps.push(createStepObj('Found new minimum value', this.liArray[min], null, this.selectValue.bind(this, 'orange-bg', min)));
	            }
	        }
	        if (min !== i) {
	            const temp = arr[min];
	            arr[min] = arr[i];
				arr[i] = temp;
				this.steps.push(createStepObj('Swap', this.liArray[min], null, this.swap.bind(this, min, i)));
	        }
		}
		this.steps.push(createStepObj('Finished sorting', null, null, this.doneSorting.bind(this)))
	    return arr;
	}
}