import { removeClasses } from '../helpers/helperFunctions';
export default class {
    constructor(arr) {
        this.arr = arr;
        this.liArray = this.arr.liArray;
        this.isDone = false;
    }
    selectValue(className, ...args) {
        if (this.isDone) {
            removeClasses('sorted', this.liArray);
        }
       this.unSelectValue(className);
       //console.log(args);
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

    swap(minElIdx, currentPassElIdx) {
        //console.log(minElIdx, currentPassElIdx);
        this.unSelectValue('selected');
        const liArrayNode = this.liArray[minElIdx].parentNode;
        // const liArrayNode = this.liArray[minElIdx].parentNode;
        // //const temp = [...this.liArray][minElIdx];
        // const minEl = this.liArray[minElIdx];
        // const currentPassEl = this.liArray[currentPassElIdx];

        // liArrayNode.insertBefore(this.liArray[minElIdx], this.liArray[currentPassElIdx]);
        // console.log(this.liArray[minElIdx], this.liArray[currentPassElIdx]);
        // liArrayNode.insertBefore(this.liArray[currentPassElIdx], this.liArray[minElIdx]);
        // console.log(liArrayNode);
        // console.log(this.liArray[currentPassElIdx]);

        // this.liArray = document.querySelectorAll('.visualizer__item');
        // console.log(this.liArray);
    }
}

//this.liArray[startElIdx].parentNode