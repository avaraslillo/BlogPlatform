const moongose = require('mongoose');


const entrySchema = new moongose.Schema({
    headline: {
        type: String,
        required: [true, 'Headline is required']
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    body: {
        type: String,
        required: [true, 'Category is required']
    },
    date:{
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    }
});


module.exports = moongose.model('Entry', entrySchema)