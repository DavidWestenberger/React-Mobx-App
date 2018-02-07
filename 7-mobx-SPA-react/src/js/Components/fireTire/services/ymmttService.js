

export const getymmttData = () => {
  const { ymmttUrl } = "/FireTire";
  return fetch(ymmttUrl)
    .then( resp => resp.json());
}
