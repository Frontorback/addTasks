const app = {
   state: {
      tasks: []
   },
   addTaskForm: new AddTaskForm ({
    selector:'.header',
    addTaskHandler: addTask    
   }),

   List: new List({
      selector: '.todo-list',
      
   }),
   setState(newState) {
      this.state = {
         ...this.state,
         ...newState
      }

   }
   
}
console.log(app);

   function addTask (task) {

   
   const taskObj = new Task(task, {
   element: 'li'

});
  
const {tasks} = app.state;



tasks.push(taskObj);

app.setState({tasks});
app.List.changeProps({ items: tasks});

   }