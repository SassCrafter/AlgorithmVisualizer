export default class {
    constructor(hookId) {
        this.hookId = hookId;
    }


    createElement(tag, classNames, attrs) {
        const rootEl = document.createElement(tag);
        if (classNames) rootEl.className = classNames;
        if (attrs) {
            attrs.forEach(attr => {
                rootEl.setAttribute(attr.name, attr.value);
            })
        }
        return rootEl;
    }

    clearRootEl(el, className) {
        if (!el) return;
        const elements = el.querySelectorAll(`${className}`);
        elements.forEach(el => el.remove());
    }

    createRootEl(tag, classNames, attrs) {
        const rootEl = this.createElement(tag, classNames, attrs);
        document.getElementById(this.hookId).appendChild(rootEl);
        return rootEl;
    }
}