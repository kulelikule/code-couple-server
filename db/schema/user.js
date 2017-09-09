var mongoose = require('../connect');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('user', UserSchema);;