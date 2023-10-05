const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: { type: String },
},
    { timestamps: true }
)

const Author = mongoose.model('Author', authorSchema);
module.exports = Author