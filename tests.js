class Task {
    constructor (task, props) {

    this._task = task;
    this._props = props;
    this.createTaskElement();
    }

    createTaskElement(){
    const rootEl = document.createElement(this._props.element || 'div');
    const viewEl = document.createElement('div');
    const formEl = document.createElement('form');

    const toggleEl = document.createElement('input');
    const spanEl = document.createElement('span');
    const destroyBtn = document.createElement('button');

    const changeTextEl = document.createElement('input');
    const visualBtn = document.createElement('button');
    

        rootEl.append(viewEl, formEl);
        viewEl.append(toggleEl, spanEl, destroyBtn);
        formEl.append(changeTextEl, visualBtn);

    viewEl.classList.add('view');
    toggleEl.classList.add('toggle');
    toggleEl.type = 'checkbox';
    destroyBtn.classList.add('destroy');

    changeTextEl.classList.add('edit');
    visualBtn.classList.add('visually-hidden');
    visualBtn.type = 'submit';
    visualBtn.innerText = 'Изменить';
    
    this._changeTextEl = changeTextEl;
    this._spanEl = spanEl;
    this._toggleEl = toggleEl
    this._taskEl = rootEl;
    this._fill();
    
    }

    _fill() {
        this._toggleEl.checked = this._task.completed;
        this._spanEl.innerText = this._task.text;
        this._changeTextEl = this._task.text;
    }

    render() {
      return this._taskEl;
   }
}

console.dir(Task);