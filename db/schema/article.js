var mongoose = require('../connect');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: { type: String },
    author: {type: String},
    date: {type: Date},
    content: {type: String},
    keywords: {type: String},
});

module.exports = mongoose.model('article', ArticleSchema);;