import { autorun, computed, observable, action } from "mobx"
import Todo from "./Todo"
import { getTodos, createTodo, deleteTodo } from "./TodoServices"

export class TodoStore {
  @observable todos = [];
  @observable filter ="";
  @observable state = "PENDING" //PENDING / DONE / ERROR
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i")
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }
/*  createTodo(value) {
    this.todos.push(new Todo(value))
  }*/

  clearComplete = () => {
    //how does filter get just one todo from the todos? 
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    //observables cant be erased, have to use
    this.todos.replace(incompleteTodos)
  }

  /**
  * A todo was somehow deleted, clean it from the client memory
  */
  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }



  @action("CREATE TODO")
  fetchNewTodo(todoName){
  this.state = "PENDING"
  createTodo(todoName)
    .then(
      action("CREATE TODO SUCCESS", todoData =>{
        this.todos.push(todoData)
        this.state = "DONE"
      }),
      action("CREATE TODO ERROR", error =>{
        this.state = "ERROR"
      })
    )
  }

  @action("DELETE TODO FROM SERVER")
  fetchDeleteTodo(todo){
    this.state = "PENDING"
    deleteTodo(todo.id).then(
      action("DELETE TODO SUCCESS", response => {
        this.removeTodo(todo)
        this.state = "DONE"
      }),
      action("DELETE TODO ERROR", response =>{
        this.state = "ERROR"
      })
    )
  }

  @action("FETCHING TODOS FROM SERVER")
  fetchTodos() {
    this.state = "PENDING"
    getTodos().then(
      // inline created action
      action("FETCH TODO SUCCESS", todoData => {
          this.todos.replace(todoData)
          this.state = "DONE"
      }),
      // inline created action
      action("FETCH TODO ERROR", error => {
          this.state = "ERROR"
      })
    )
  }
}


export default new TodoStore

/*autorun(() => {
  console.log("running autoRun");
  console.log(store.filter);
  console.log(store.todos[0]);
})*/