import Component from './helpers/Component';
import Array from './Array';
import VisualizerControls from './VisualiserControls';
import BubbleSort from './Algorithms/BubbleSort';
import '../sass/style.scss';



class App extends Component {
	static init() {
		this.form = document.getElementById('visualizer-inputs-form');
        this.form.addEventListener('submit', App.formSubmitHandler);
	}

	static formSubmitHandler(e) {
		e.preventDefault();
		const prevArr = document.getElementById('visualizer-list');
		if (prevArr) prevArr.remove();
		const arr = new Array('visualizer-canvas');
		const controls = new VisualizerControls(new BubbleSort(arr));
	}

}

App.init();