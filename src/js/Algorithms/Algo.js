import { removeClasses } from '../helpers/helperFunctions';
export default class {
    constructor(arr) {
        this.arr = arr;
        this.liArray = this.arr.liArray;
        this.isDone = false;
    }
    selectValue(className, classNameToRemove, ...args) {
        if (this.isDone) {
            removeClasses('sorted', this.liArray);
        }

        if (classNameToRemove) this.unSelectValue(classNameToRemove);

        if (className !== 'sorted')this.unSelectValue(className);
       args.forEach(arg => {
           this.liArray[arg].classList.toggle(className);
       });
       this.isDone = false;
    }
    unSelectValue(className) {
        const els = document.querySelectorAll(`.${className}`);
        els.forEach(el => {
            el.classList.remove(className);
        })
    }


    doneSorting() {
        this.isDone = true;
        this.liArray.forEach(li => {
            li.classList.remove('selected','orange-bg');
            li.classList.add('sorted');
        })
    };


    removeClasses() {
        this.liArray.forEach(li => {
            li.classList.remove('selected','orange-bg', 'sorted');
        });
    }

    swap(minElIdx, currentPassElIdx, className) {
        this.unSelectValue('selected');

        const nodeA = this.liArray[minElIdx];
        const nodeB = this.liArray[currentPassElIdx];

        if (className) {
            nodeA.classList.add(className);
            nodeB.classList.add(className);
        }

        const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;


        // Move minNode before currentPassNode
        nodeB.parentNode.insertBefore(nodeA, nodeB);

        // Move currentPassNode before minNode
        nodeA.parentNode.insertBefore(nodeB, siblingA);

        this.liArray = document.querySelectorAll('.visualizer__item');

    }
}
