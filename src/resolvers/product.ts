const {
  getProducts,
  getCategories,
  addProduct,
  addCategory,
  updateCategory,
  updateProduct,
} = require("../services/product");

const product_resolvers = {
  Query: {
    getProducts: (_: void, args: any) => {
      return getProducts(args);
    },
    getCategories: (_: void, args: any) => {
      return getCategories(args);
    },
  },
  Mutation: {
    addProduct: (_: any, inputObject: any) => {
      return addProduct(inputObject);
    },
    updateProduct: (_: any, inputObject: any) => {
      return updateProduct(inputObject);
    },
    addCategory: (_: any, inputObject: any) => {
      return addCategory(inputObject);
    },
    updateCategory: (_: any, inputObject: any) => {
      return updateCategory(inputObject);
    }
  },
};
export default product_resolvers;
