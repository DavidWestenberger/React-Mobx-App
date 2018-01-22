const endpoints = {
    todosUrl: 'http://localhost:8080/todos/'
};

const postHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

/*
* get all todos
*/
export const getTodos = () => {
  const { todosUrl } = endpoints;
  return fetch(todosUrl)
    .then( resp => resp.json());
}

  