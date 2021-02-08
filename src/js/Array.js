import Component from './helpers/Component';
import VisualizerControls from './VisualiserControls.js';
import { getRandomNumber, scaleValue } from './helpers/helperFunctions';

export default class extends Component {
    constructor(hookId) {
        super(hookId);
        this.list = this.createRootEl('ul', 'visualizer__list', [{name: 'id', value: 'visualizer-list'}]);
        this.array = [];
        this.liArray = [];
        this.form = document.getElementById('visualizer-inputs-form');
        this.init();
        // this.form = document.getElementById('visualizer-inputs-form');
        // this.form.addEventListener('submit', this.formSubmitHandler.bind(this));
    }


    formSubmitHandler(e) {
        e.preventDefault();
        // const size = this.form.querySelector('#array-size').value;
        // const layout = this.form.querySelector('#array-layout').value;
        // this.populate(+size);
        // this.render();
    }

    init() {
        const size = this.form.querySelector('#array-size').value;
        const layout = this.form.querySelector('#array-layout').value;
        this.populate(+size);
        this.render();
    }

    populate(len) {
        this.array = [];
        for (let i = 0; i < len; i++) {
            this.array.push(getRandomNumber(1, 999));
        }
        console.log(this.array);
    }

    renderArrayItems(parent) {
        this.array.forEach((item, idx) => {
            const li = this.createElement('li', 'visualizer__item');
            li.style.height = `${scaleValue(item, [1, 999], [1, 100])}%`
            const container = this.createElement('div', 'visualizer__item-container');
            const liNumber = this.createElement('p');
            liNumber.textContent = item;
            const indexCount = this.createElement('h4');
            indexCount.textContent = idx;
            container.appendChild(liNumber);
            li.appendChild(container);
            li.appendChild(indexCount);
            this.liArray.push(li);
            parent.appendChild(li);
        })
    }

    compareTwoValues(firstValue, secondValue) {
        console.log(firstValue, secondValue);
        // First remove already compared values classes;
        const elementsToClear = Array.from(firstValue.parentElement.children);
        elementsToClear.forEach(el => el.classList.remove('comparing'));
        firstValue.classList.add('comparing');
        secondValue.classList.add('comparing');
    }

    swapTwoElements(firstEl, secondEl) {
        firstEl.classList.add('swap', 'swap--left');
        secondEl.classList.add('swap', 'swap--right');
        setTimeout(() => {
            firstEl.classList.remove('swap', 'swap--left', 'comparing');
            secondEl.classList.remove('swap', 'swap--right', 'comparing');
            firstEl.parentElement.insertBefore(secondEl, firstEl);
        }, 300);
    }

    render() {
        this.clearRootEl(this.list, 'visualizer__item');
        this.renderArrayItems(this.list);
    }
}