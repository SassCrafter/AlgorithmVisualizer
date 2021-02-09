import Component from './helpers/Component';
import Array from './Array';
import VisualizerControls from './VisualiserControls';
import BubbleSort from './Algorithms/BubbleSort';
import '../sass/style.scss';



class App extends Component {
	static init() {
		const visualizerSettigsForm = document.getElementById('visualizer-inputs-form');
        visualizerSettigsForm.addEventListener('submit', App.formSubmitHandler);
        App.initForms();
	}

	static initForms() {
		const mobileTopicInput = document.querySelector('#mobile-topic select');
		const topicForm = document.getElementById('topic-form');
		mobileTopicInput.addEventListener('change', App.pickTopicHandler);
	}

	static pickTopicHandler(e) {
		e.preventDefault();
		if (e.target.closest('form').id === 'mobile-topic') {
			this.topic = e.target.value;
		}
	}

	static formSubmitHandler(e) {
		e.preventDefault();
		App.setup();
	}

	static setup() {
		const prevArr = document.getElementById('visualizer-list');
		const prevIndexes = document.getElementById('visualizer-indexes');
		if (prevArr) prevArr.remove();
		if (prevIndexes) prevIndexes.remove();

		const arr = new Array('visualizer-canvas');
		const controls = new VisualizerControls(new BubbleSort(arr));
	}

}

App.init();