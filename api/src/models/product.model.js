const mongosee = require('mongoose')

const schema = mongosee.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongosee.model('product', schema);
