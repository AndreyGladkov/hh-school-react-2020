const axios = require("axios");

export const showSlider = "showSlider";
export function showActiveSlide(index) {
    return {
        type: showSlider,
        index
    };
}

export const fetchDataRequest = "fetchDataRequest";
export const fetchRequest = () => {
    return {
        type: fetchDataRequest,
        appStatus: "not ready"
    };
};

export const fetchDataSuccess = "fetchDataSuccess";
export const fetchSuccess = response => {
    return {
        type: fetchDataSuccess,
        dataFromServer: response.data,
        appStatus: "ready"
    };
};

export const fetchDataFail = "fetchDataFail";
export const fetchFail = error => {
    return {
        type: fetchDataFail,
        appStatus: "fail",
        error
    };
};

export const fetchData = apiLink => dispatch => {
    dispatch(fetchRequest());
    axios
        .get(apiLink)
        .then(response => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(response), 1000);
            });
        })
        .then(response => {
            dispatch(fetchSuccess(response));
        })
        .catch(error => {
            console.log(error);
            dispatch(fetchFail(error));
        });
};