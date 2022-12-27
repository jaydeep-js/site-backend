const mongoose = require('mongoose')
const { Schema } = mongoose

export const ProductSchema = new Schema({
    productPage: [{
        image: Schema.Types.String,
        thumbImg: Schema.Types.String,
        categoryId: [{
            type: Schema.Types.ObjectId,
            ref: "category",
        }],
        skuText: Schema.Types.String,
        desc: Schema.Types.String,
    }]
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema, 'product')
module.exports = {
    Product
}