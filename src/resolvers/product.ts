const {getproductid,getProduct,getCategory,addProduct,addCategory,deletecategory,deleteproduct,updatecategory,updateproduct} = require("../services/product");
const product_resolvers = {
    Query: {
        getProduct: (_: void, args: any) => {
            return getProduct(args);
        },
        getproductid:(_: void, args: any)=>{
            return getproductid(args);
        },
        getCategory: (_: void, args: any) => {
            return getCategory(args);
        }
    },
    Mutation: {
        addProduct: (_:any,inputObject:any) => {
            return addProduct(inputObject);
        },
        addCategory: (_:any,inputObject:any) => {
            return addCategory(inputObject);
        },
        deletecategory: (_:any, inputObject:any) => {
            return deletecategory(inputObject);
        },
        deleteproduct: (_:any, inputObject:any) => {
            return deleteproduct(inputObject);
        },
        updatecategory: (_:any, inputObject:any) => {
            return updatecategory(inputObject);
        },
        updateproduct: (_:any, inputObject:any) => {
            return updateproduct(inputObject);
        }
    }
}
export default product_resolvers;