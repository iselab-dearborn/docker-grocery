const axios = require('axios');
const { uniqueNamesGenerator, names } = require('unique-names-generator');

const API_URL = process.env.API_URL || "";

console.log("API_URL", API_URL)

const api = axios.create({
    baseURL: API_URL
});

const config = {
    dictionaries: [names]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function sendRequest() {

    api.get('/products').then(function (response) {

        const products = response.data;

        console.log("Total", products.length);

        if (products.length < 10000) {

            api.post('/products', {
                name: uniqueNamesGenerator(config),
                price: getRandomInt(100) + 1
            }).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }

    }).catch(function (error) {
        console.log(error);
    });
}

setInterval(sendRequest, 5 * 1000);
