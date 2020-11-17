function AddTaskForm(props) {

    this._props = props;

    if(!props.selector){
        throw new Error ('!props');
    }
    this._formEl= document.querySelector(props.selector);

    if(!this._formEl) {
        throw new Error ('!_formEl');
    }

    this._completeEl =this._formEl.querySelector('.complete-all');
    this._textEl = this._formEl.querySelector('.new-todo');

    this._formEl.addEventListener('submit', this.addTask.bind(this)); 
} 


AddTaskForm.prototype.addTask = function(e){

   e.preventDefault();

   const task = {

    id: Date.now(),
    text: this._textEl.value,
    completed: this._completeEl.checked
   }
    this._textEl.value ='';

    if (this._props.addTaskHandler) {
        this._props.addTaskHandler(task);
    }
   //console.log(task);

   // console.log(this._completeEl.checked);
    //console.log(this._textEl.value);
}

console.dir(AddTaskForm);