export function reducer (state = [], action) {
    switch (action.type) {
        case 'requestAction':
            console.log("rP");
            return state;
        case 'requestSuccess':
            return {
                ...state,
                product: action.product
            };
        case 'openFormAction':
            console.log(action);
            return {
                ...state,
                selectedProduct: true
            }
        default:
            return state
    }
}