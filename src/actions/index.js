const axios = require("axios");

/* Показать активный слайд */
export const SHOW_ACTIVE_SLIDE = "SHOW_ACTIVE_SLIDE";
export function showActiveSlide(index) {
  return {
    type: SHOW_ACTIVE_SLIDE,
    index
  };
}

/* Работа с сервером */
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
    appStatus: "not ready"
  };
};

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const fetchDataSuccess = response => {
  return {
    type: FETCH_DATA_SUCCESS,
    dataFromServer: response.data,
    appStatus: "ready"
  };
};

export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    appStatus: "fail",
    error
  };
};

/* Асинхронный генератора action */
export const fetchData = apiLink => dispatch => {
  dispatch(fetchDataRequest());

  axios
    .get(apiLink)
    .then(response => {
      /* Имитация долгой загрузки с сервера (показать лоадер) */
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(response), 1500);
      });
    })
    .then(response => {
      /* Данные получены, приложение готово */
      dispatch(fetchDataSuccess(response));
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchDataFailure(error));
    });
};
