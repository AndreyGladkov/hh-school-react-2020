import { requestSuccess } from './catalog-action';

const middleware = ({ dispatch, getState }) => next => action => {
    if (action.type === "requestAction") {
        let url = 'http://localhost:9200/api/products';
        console.log("mid");
        fetch(url)
            .then(res => { return res.json()})
            .then(products => dispatch(requestSuccess(products)));
    }
    return next(action);
};
  
export default middleware;
