

export const SHOW_ACTIVE_SLIDE = "SHOW_ACTIVE_SLIDE";
export function showActiveSlide(index) {
    return {
        type: SHOW_ACTIVE_SLIDE,
        index
    };
}

export const GET_POPULAR_PRODUCTS_SUCCESS = "GET_POPULAR_PRODUCTS_SUCCESS";
export const getPopularProductsSuccess = data => {
    return {
        type: GET_POPULAR_PRODUCTS_SUCCESS,
        popularProducts: data
    }
};


export const getPopularProducts = link => dispatch => {
    fetch(link)
        .then(response => response.json())
        .then(data => {
            dispatch(getPopularProductsSuccess(data));
        })
        .catch(err => console.log(err));
};