const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRouter = require('./src/routers/product.router');
let isConnectedBefore = false;

let DATABASE_URL = process.env.DATABASE_URL || "";
let PORT = process.env.PORT || 3000;
let HOST = process.env.HOST || "0.0.0.0";

DATABASE_URL = DATABASE_URL.trim();
HOST = HOST.trim();

console.log(`DATABASE_URL: ${DATABASE_URL}`)
console.log(`PORT: ${PORT}`)
console.log(`HOST: ${HOST}`)

function connect(){

    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

mongoose.connection.on('connecting', err => {
    console.log("Connecting...");
});

mongoose.connection.on('error', err => {
    
    console.log('Error...');

    console.log(err);

    if (!isConnectedBefore) {
        connect();
    }
});

mongoose.connection.on('disconnected', function(){
    
    console.log('Lost MongoDB connection...');
    
    if (!isConnectedBefore) {
        connect();
    }
});

mongoose.connection.on('open', function() {

    console.log("we're connected!");

    isConnectedBefore = true;

    const app = express();

    // this will let us get the data from a POST
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api/products', productRouter);

    app.listen(PORT, HOST, () => {
        console.log("Magic happens on PORT", PORT);
    });
});

connect();
