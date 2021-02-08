export default class {
	constructor(arr) {
		this.arrObj = arr;
		this.arr = arr.array;
		this.liArray = arr.liArray;
		//console.log(this.liArray);
		// this.steps = [
		// 	'Starting Bubble Sort',
		// 	'For each pass, we will move left to right swapping adjacent elements as needed. Each pass moves the next largest element into its final position (these will be shown in green).',
		// 	'Starting pass 0',
		// 	'For each element moving through the list',
		// ];
		this.steps = [
			{
				explanation: 'Starting Bubble Sort',
				action: null,
			},
			{
				explanation: 'For each pass, we will move left to right swapping adjacent elements as needed. Each pass moves the next largest element into its final position (these will be shown in green).',
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
		console.log(this.steps);
	}

	sort() {
		let swapped;
	    console.log('sorting');
	    const arr = this.arr;
	    do {
	         swapped = false;
	        for (let i = 0; i < arr.length; i++) {
	            this.steps.push({
	            	explanation: 'Compare elements',
	            	firstItem: this.liArray[i],
	            	secondItem: this.liArray[i + 1],
	            	action: this.arrObj.compareTwoValues,
	            });
	            if (arr[i] > arr[i + 1]) {
	            	this.steps.push({
	            		explanation: 'Swap',
	            		firstItem: this.liArray[i],
	            		secondItem: this.liArray[i + 1],
	            		action: this.arrObj.swapTwoElements,
	            	});
	                const temp = arr[i];
	                arr[i] = arr[i + 1];
	                arr[i + 1] = temp;
	                swapped = true;
	            }
	        }
	        this.steps.push('Done this pass. The last element processed is now in its final position.');
	    } while(swapped);
	    this.steps.push('Done sorting');
	    return arr;
	}
}