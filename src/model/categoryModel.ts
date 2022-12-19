const mongoose = require('mongoose')
const { Schema } = mongoose

export const CategorySchema = new Schema(
    {
        categoryname: Schema.Types.String,
        category: [
            {
              type: mongoose.Types.ObjectId,
              ref: "product"
            }
          ]
    },
    { timestamps: true }
);

const Category = mongoose.model('Category',CategorySchema,'category')
module.exports = {
    Category
}