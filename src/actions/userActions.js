
export function register(info) {
    let config = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(info),
  };
  return dispatch => fetch('/users/new', config)
    .then(response => response.json())
    .then((res) => {});
}