import { createStepObj } from '../helpers/helperFunctions';

export default class {
	constructor(arr) {
		this.arr = arr;
		this.liArray = this.arr.liArray;
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
	}


	sort() {
		 const len = arr.length;
	    for (let i = 0; i < len; i++) {
	    	this.steps.push(createStepObj('Select starting point', this.liArray[i], null, ));
	        let min = i;
	        for (let j = i + 1; j < len; j++) {
	            if (arr[min] > arr[j]) {
	                min = j;
	            }
	        }
	        if (min !== i) {
	            const temp = arr[min];
	            arr[min] = arr[i];
	            arr[i] = temp;
	        }
	    }
	    return arr;
	}
}