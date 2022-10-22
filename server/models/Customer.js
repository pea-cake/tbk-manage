const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    open_id: {
        type: String
    },
    wx_id: {
        type: String
    },
    type: {
        type: String
    },
    name: {
        type: String
    },
    new_name: {
        type: String
    },
    alias: {
        type: String
    },
    new_alias: {
        type: String
    },
    avatar: {
        type: String
    },
    phone: {
        type: Array
    },
    new_phone: {
        type: Array
    },
    create_time: {
        type: String,
    },
    last_time: {
        type: String,
    },
    province: {
        type: String,
    },
    is_friend: {
        type: String
    },
    gender: {
        type: String
    },
    city: {
        type: String
    },
    remark:{
        type: String
    }
})


module.exports = mongoose.model('Customer', schema)