const mongoose = require("mongoose");
const { Schema } = mongoose;

export const CategorySchema = new Schema(
  {
    category: [{
      name: Schema.Types.String
    }],
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema, "category");
module.exports = {
  Category,
};
