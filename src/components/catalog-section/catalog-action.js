export const requestAction = {
    type: "requestAction"
}

export const requestSuccess = (product) => {
    return {
        type: "requestSuccess", 
        product: product
    }
}

export const showOrderFormAction = (productInd, sizeInd) => {
    return {
        type: "showOrderFormAction", 
        productInd: productInd,
        sizeInd: sizeInd
    }
}
