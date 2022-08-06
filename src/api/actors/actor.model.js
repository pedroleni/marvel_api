const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(

{
    images: [{type: String, unique: true, required: true}],
    name: {type: String, unique: true, required: true},
    gender: {type: String, enum: ["male", "female", "other"] },
    origin: {type: String, required: true},
    age: {type: Number},
    character: {type: String, required: true},
    
},

{
    timestamps: true
}
);

module.exports = mongoose.model('actors', schema);