class Section{
constructor({items, renderer}, container){
    this._renderer = renderer;
    this.items = items;
    this._container = document.querySelector(container);
}

renderAppend(){
this.items.forEach(item => {
this._renderer(item); // вызываем renderer, передав item
 });
this._container.append(items);
}

addItem(element){
this._container.prepend(element);

}

}