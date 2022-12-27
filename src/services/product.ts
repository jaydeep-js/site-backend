const { Product } = require("../model/productModel");
const { Category } = require("../model/categoryModel");

const getProducts = async (args: any) => {
  const data = await Product.findOne({}).populate("categoryid", "categoryname", Category).lean();
  return data
};

const addProduct = async (inputObject: any) => {
  const newProduct = await Product.create(inputObject.input);
  return newProduct;
};

const updateProduct = async (inputObject: any) => {
  return await Product.findOneAndUpdate(
    { _id: inputObject._id },
    { ...inputObject.input },
    { new: true }
  ).lean();
};

const getCategories = async (args: any) => {
  const data = await Category.findOne({}).lean();
  return data
};

const addCategory = async (inputObject: any) => {
  const newCategory = await Category.create(inputObject.input);
  return newCategory;
};
const updateCategory = async (inputObject: any) => {
  return await Category.findOneAndUpdate(
    { _id: inputObject._id },
    { ...inputObject.input },
    { new: true }
  ).lean();
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,

  getCategories,
  addCategory,
  updateCategory,
};
