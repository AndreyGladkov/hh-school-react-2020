const fetch = require('node-fetch');

function request(url) {
    return fetch(url)
        .then(res => { return res.json()})
}

function getProducts() {
    let url = 'http://localhost:9200/api/products';
    return request(url)
        .then(products => products);
}