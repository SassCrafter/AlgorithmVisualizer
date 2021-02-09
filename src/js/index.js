import Component from './helpers/Component';
import Array from './Array';
import VisualizerControls from './VisualiserControls';
import BubbleSort from './Algorithms/BubbleSort';
import SelectionSort from './Algorithms/SelectionSort';
import { findCheckedInput, updateELTextContentSelector } from './helpers/helperFunctions';
import '../sass/style.scss';



class App extends Component {
	static init() {
		this.topics = {
			bubbleSort: BubbleSort,
			selectionSort: SelectionSort,
		};
		this.topic = this.topics.bubbleSort;
		const visualizerSettigsForm = document.getElementById('visualizer-inputs-form');
        visualizerSettigsForm.addEventListener('submit', App.formSubmitHandler);
        App.initForms();
	}

	static initForms() {
		const mobileTopicInput = document.querySelector('#mobile-topic-form select');
		const topicForm = document.getElementById('topic-form');
		mobileTopicInput.addEventListener('change', App.pickTopicHandler.bind(this));
		topicForm.addEventListener('submit', App.pickTopicHandler.bind(this));
	}

	static pickTopicHandler(e) {
		e.preventDefault();
		const form = e.target.closest('form');
		//console.log(form.querySelector('input[type="radio"]::checked'));
		const key = form.id === 'mobile-topic-form' ? e.target.value
		: findCheckedInput('input[type="radio"]', form).dataset.topic;
		console.log(key);
		this.topic = this.topics[key];
		updateELTextContentSelector('#algorithm-name', key.split(/(?=[A-Z])/).join(' '));
		App.setup(this.topic);
	}

	static formSubmitHandler(e) {
		e.preventDefault();
		App.setup(this.topic);
	}

	static setup(topic) {
		const prevArr = document.getElementById('visualizer-list');
		const prevIndexes = document.getElementById('visualizer-indexes');
		if (prevArr) prevArr.remove();
		if (prevIndexes) prevIndexes.remove();

		const arr = new Array('visualizer-canvas');
		const controls = new VisualizerControls(new this.topic(arr));
	}

}

App.init();