import { createStepObj } from '../helpers/helperFunctions';

export default class {
	constructor(arr) {
		this.arrObj = arr;
		this.arr = arr.array;
		this.liArray = arr.liArray;
		this.steps = [
			{
				explanation: 'Starting Bubble Sort',
				action: null,
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
		const arr = this.arr;
		let counter = arr.length - 1;
	    do {
	         swapped = false;
	        for (let i = start; i < counter; i++) {
				this.steps.push(createStepObj('Compare elements', this.liArray[i], this.liArray[i + 1], this.arrObj.compareTwoValues));
	            if (arr[i] > arr[i + 1]) {
					this.steps.push(createStepObj('Swap', this.liArray[i], this.liArray[i + 1], this.arrObj.swapTwoElements));
	                const temp = arr[i];
	                arr[i] = arr[i + 1];
					arr[i + 1] = temp;
					const tempLi = this.liArray[i];
					this.liArray[i] = this.liArray[i + 1];
					this.liArray[i + 1] = tempLi;
	                swapped = true;
				}
			}
			//this.steps[counter + 4].sorted = true;
			counter -= 1;
			this.steps.push(createStepObj('Done this pass, moving to the next one'));
		} while(swapped);
		console.log(this.steps);
		this.steps.push(createStepObj('Done sorting'));
	}
}