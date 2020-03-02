export function reducer (state = [], action) {
    switch (action.type) {
        case 'requestAction':
            return state;
        case 'requestSuccess':
            return {
                ...state,
                product: action.product
            };
        case 'showOrderFormAction':
            return {
                ...state,
                showOrderForm: true,
                selectedProduct: action.productInd,
                selectedSize: action.sizeInd
            }
        case 'closeOrderFormAction':
            return {
                ...state,
                showOrderForm: false
            }
        default:
            return state
    }
}