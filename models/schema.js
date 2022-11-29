const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data = new Schema({
    username:{
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    }
},{timestamps: true});

const ldata = mongoose.model("ldata",data);
module.exports = ldata;