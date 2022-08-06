const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(

{
    images: [{type: String, unique: true, required: true}],
    name: {type: String, unique: true, required: true},
    fase: {type: String, required: true},
    date: {type: Number },
    description: {type: String, required: true},
    actors: [{ type: Schema.Types.ObjectId, ref: "actors", required: true }],
},

{
    timestamps: true
}
);

module.exports = mongoose.model('films', schema);