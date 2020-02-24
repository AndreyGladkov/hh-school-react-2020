const PUT_DATA = "PUT_DATA";

export function putData(dataFromServer) {
  return {
    type: PUT_DATA,
    payload: dataFromServer
  };
}

const apiURL = "http://localhost:9200/api/feelinglucky";
export const fetchData = () => (dispatch) => {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      dispatch(putData(data));
    })
    .catch(error => console.error(error));
};

export default function dataFromServer(state = {}, { type, payload }) {
  switch (type) {
    case PUT_DATA:
      return payload;
    default:
      return state;
  }
}
