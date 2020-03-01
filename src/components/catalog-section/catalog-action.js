export const requestAction = {
    type: "requestAction"
}

export const requestSuccess = (product) => {
    return {
        type: "requestSuccess", product: product
    }
}
