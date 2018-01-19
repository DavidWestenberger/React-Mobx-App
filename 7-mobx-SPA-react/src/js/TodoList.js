import React from "react"
import { observer } from "mobx-react"

@observer
export default class TodoList extends React.Component{
  filter(e){
    this.props.store.filter = e.target.value
  }

  createNew(e){
    if(e.which === 13){
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete    
  }

  render(){
      console.log(this.props.store)
      const { filter, filteredTodos, todos, clearComplete } = this.props.store

      const todoList = filteredTodos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={this.toggleComplete.bind(this, todo)}/>
            {todo.value}
        </li>
      ))

    return(
      <div>
        <h1> Todos:</h1>
        <input className="create" onKeyPress={this.createNew.bind(this)}/>
        <input className="filter" value={filter} onChange={this.filter.bind(this)} />
        <ul>{todoList}</ul>        
        <a href="#" onClick={clearComplete}> Clear Complete</a>
      </div>
    )
  }
}

/*      console.log("todolist todo then filteredTodos")
      console.log(todos) //has original observable todo elements
      console.log(filteredTodos) // has computed filtered todo elements*/