const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    customer_id:{
        type: String
    },
    origin_url: {
        type: String
    },
    create_time: {
        type: String,
    },
    platform: {
        type: String
    },
    from: {
        type: String
    },
    turn_content:{
        type: String
    }
}, {
    timestamps: true  // 时间戳
})

module.exports = mongoose.model('Turnlink', schema)
