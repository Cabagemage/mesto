
export default class Section {
    constructor({ items, renderer }, container) {
        this.items = items;
        this.renderer = renderer;
        this.container = document.querySelector(container);
    }

    renderAppend() {
        this.items.forEach(item => {
            this.renderer(item);
        })
    }

    addItemPrepend(item) {
        this.container.prepend(item)
    }
    addItemAppend(item) {
        this.container.append(item)
    }

}