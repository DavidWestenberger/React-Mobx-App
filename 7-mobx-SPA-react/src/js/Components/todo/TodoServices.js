const endpoints = {
    todosUrl: 'http://localhost:8080/todos/'
};

const postHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

/*
* get all Todos
*/
export const getTodos = () => {
  const { todosUrl } = endpoints;
  return fetch(todosUrl)
    .then( resp => resp.json());
}
/*
* delete Todo
*/
export const deleteTodo = (id) => {
  const { todosUrl } = endpoints;
  return fetch(todosUrl  + id,
    {
      method: 'DELETE',
      headers: postHeaders,
    }
  )
}
/*
create Todo
 */
export function createTodo(todoName) {
  console.log('creating todo => ', todoName);
  const { todosUrl } = endpoints;
  return fetch(
    todosUrl,
    {
      method: 'POST',
      headers: postHeaders,
      // create new todo with
      // initial defaults
      body: JSON.stringify({
        value: todoName,
        Complete: false,
        id:Date.now()
      })
    }
  )
  .then( resp => resp.json());
}  

