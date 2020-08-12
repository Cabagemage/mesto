
export default class Section {
    constructor({items, renderer}, container) {
        this.items = items;
        this.renderer = renderer;
        this.container = container;
    }

    renderAppend() {
        this.items.forEach(item => {
            this.renderer (item);    
    })
    }
    addItemPrepend(item) {
        document.querySelector(this.container).prepend(item)
    }
    addItem(item) {
        document.querySelector(this.container).append(item)
    }

}