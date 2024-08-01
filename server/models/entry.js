const moongose = require('mongoose');


const entrySchema = new moongose.Schema({
    headline: {
        type: String,
        required: [true, 'Headline is required']
    },
    country: {
        type: String,
        required: [true, 'Country is required']
    },
    city: {
        type: String,
        required: [true, 'City is required']
    },
    body: {
        type: String,
        required: [true, 'Category is required']
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    date:{
        type: Date,
        default: Date.now
    },

});


module.exports = moongose.model('Entry', entrySchema)