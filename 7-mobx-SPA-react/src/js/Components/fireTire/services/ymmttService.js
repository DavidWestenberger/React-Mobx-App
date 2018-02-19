// const endpoints = {
//     ymmttUrl: 'http://localhost:3001/FireTire'
// };

export const getymmttData = () => {
  const { ymmttUrl } = "http://localhost:3001/FireTire";
  return fetch(ymmttUrl)
    .then( resp => resp.json());
}
