import { autorun, computed, observable, action } from "mobx"
import Todo from "./Todo"
import { getTodos } from "./TodoServices"

export class TodoStore {
  @observable todos = [];
  @observable filter ="";
  @observable state = "pending" //pending / done / error
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i")
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }
  createTodo(value) {
    this.todos.push(new Todo(value))
  }

  clearComplete = () => {
    //how does filter get just one todo from the todos? 
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    //observables cant be erased, have to use
    this.todos.replace(incompleteTodos)
  }

  @action("Starting to fetch the Todos from the server")
  fetchTodos() {
    this.state = "pending"
    getTodos().then(
      // inline created action
      action("fetch Success", todoData => {
          this.todos.replace(todoData)
          this.state = "done"
      }),
      // inline created action
      action("fetchError", error => {
          this.state = "error"
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