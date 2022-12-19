const { Product } = require("../model/productModel");
const { Category } = require("../model/categoryModel");
const getProduct = (args: any) => {
    return Product.find({})
        .populate('categoryid', 'categoryname', Category)
        .then((ProductInfo: any) => {
            return ProductInfo;
        })
}

const getproductid = (args: any) => {
    return Product.findById(args._id);
}
const getCategory = (args: any) => {
    return Category.find({})
        .then((CategoryInfo: any) => {
            return CategoryInfo;
        })
}
const addCategory = async (inputObject: any) => {
    const newCategory = new Category(inputObject.input);
    const createdCategory = await newCategory.save();
    return createdCategory;
}
const addProduct = async (inputObject: any) => {
    const newProduct = new Product(inputObject.input);
    console.log(newProduct)
    const createdProduct = await newProduct.save();
    const product = await Category.findById(createdProduct.categoryid);
    product.category.push(createdProduct._id);
    await product.save();
    return createdProduct;
}
const deletecategory = (inputObject: any) => {
    return Category.findOneAndDelete({ _id: inputObject._id }).then((deleteInfo: any) => {
        return deleteInfo;
    });
}
const deleteproduct = (inputObject: any) => {
    return Product.findOneAndDelete({ _id: inputObject._id }).then((deleteInfo: any) => {
        return deleteInfo;
    });
}
const updatecategory = (inputObject: any) => {
    return Category.findOneAndUpdate({ _id: inputObject._id }, { ...inputObject.input }, { new: true }).then(
        (updateInfo: any) => {
            return updateInfo;
        }
    );
}
const updateproduct = (inputObject: any) => {
    return Product.findOneAndUpdate({ _id: inputObject._id }, { ...inputObject.input }, { new: true }).then(
        (updateInfo: any) => {
            return updateInfo;
        }
    );
}
module.exports = {
    getProduct,
    getCategory,
    addCategory,
    addProduct,
    deletecategory,
    deleteproduct,
    getproductid,
    updatecategory,
    updateproduct
}