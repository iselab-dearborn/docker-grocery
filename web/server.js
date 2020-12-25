const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const API_URL = process.env.API_URL || "";

console.log("API_URL", API_URL)
console.log("HOST", HOST)
console.log("PORT", PORT)

const app = express();
const api = axios.create({
    baseURL: API_URL
});

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'))

app.get('/', function(req, res) {

    let page = req.query.page || 1;
    let perPage = req.query.perPage || 8;

    page = parseInt(page);
    perPage = parseInt(perPage);

    api.get(`/products?page=${page}&perPage=${perPage}`).then(function (response) {

        res.render('index', {
            page: page,
            nextPage: page+1,
            previousPage: page-1,
            perPage: perPage,
            products: response.data
        });

    }).catch(function (error) {
        res.redirect('/');
    });
});

app.listen(PORT, HOST, () => {
    console.log("Magic happens on PORT", PORT);
});
