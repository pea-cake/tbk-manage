const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    customer_id:{
        type: String
    },
    customer_name:{
        type: String
    },
    order_id: {
        type: String
    },
    parentId:{
        type: String
    },
    is_bind: {
        type: String
    },
    order_detail: {
        type: Object
    },
    goods_name:{
        type: String,
    },
    goods_num:{
        type: String,
    },
    create_time: {
        type: String,
    },
    platform: {
        type: String
    },
    real: {
        type: String
    },
    orderTime: {
        type: String
    },
    finishTime: {
        type: String
    },
    modifyTime: {
        type: String
    },
    settleTime:{
        type: String
    },
    actualFee: {
        type: String
    },
    subsidyFee: {
        type: String
    },
    estimateCosPrice: {
        type: String
    },
    estimateFee: {
        type: String
    },
    estimateCustomerFee:{
        type: String
    },
    isSendFee:{
        type: String
    }
}, {
    timestamps: true  // 时间戳
})

module.exports = mongoose.model('Order', schema)