import { gql } from 'apollo-server';
import Product from '../typeModel/product';

const product_typeDefs = gql`
${Product}
type categoryid{
    _id:String!
    categoryname:String
}
input CategoryInput {
    categoryname:String!
}
type Productpage {
    _id:String
    images:String,
    thumb_img:String,
    skutext:String,
    categoryid:categoryid
    desc:String,
  }
  input ProductpageInput {
    images:String,
    thumb_img:String,
    skutext:String,
    categoryid:String!
    desc:String,
  }
  input ProductInput {
    Productpage: [ProductpageInput!]
  }
type Query{
    getProduct:[Product]
    getCategory:[categoryid]
    getproductid(_id:String): Product
}
type Mutation {
    addCategory(input:CategoryInput):categoryid!
    addProduct(input:ProductInput):Product!
    deleteproduct(_id:String!): Product
    deletecategory(_id:String!): categoryid
    updatecategory(_id:String!,input:CategoryInput):categoryid!
    updateproduct(_id:String!,input:ProductInput):Product!
}
`
export default product_typeDefs;