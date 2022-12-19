const mongoose = require('mongoose')
const { Schema } = mongoose

export const ProductSchema = new Schema(
    {

        Productpage: [
            {
                images: Schema.Types.String,
                thumb_img: Schema.Types.String,
                categoryid: {
                    type: Schema.Types.ObjectId,
                    ref: "category",
                },
                skutext: Schema.Types.String,
                desc: Schema.Types.String,
            },
        ],
        
        // productname: Schema.Types.String,
        // images: Schema.Types.Array,
        // bestproduct: Schema.Types.Boolean,
        // categoryid: {
        //     type: Schema.Types.ObjectId,
        //     ref: "category",
        // },
        // desc: Schema.Types.String,


    },
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema, 'product')
module.exports = {
    Product
}