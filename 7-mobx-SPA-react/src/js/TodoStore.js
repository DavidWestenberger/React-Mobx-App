import { autorun, computed, observable } from "mobx"
import Todo from "./Todo"

export class TodoStore {
  @observable todos = [];
  @observable filter ="";
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
}


export default new TodoStore

/*autorun(() => {
  console.log("running autoRun");
  console.log(store.filter);
  console.log(store.todos[0]);
})*/