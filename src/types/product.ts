import { gql } from 'apollo-server';
import Product from '../typeModel/product';


const product_typeDefs = gql`
${Product}

input ProductIn{
  _id:String
  image:String
  thumbImg:String
  skuText:String
  categoryId:[String!]
  desc:String
}

type Category {
  _id:String!
  name:String
}
input CategoryIn {
  _id:String
  name:String
}
type Categories {
  _id:String,
  category:[Category]
}

type Products {
  _id:String!,
  productPage:[Product]
}

type Query {
  getProducts:Products
  getCategories:Categories
}

type Mutation {
  addProduct(input:ProductInput):Products!
  updateProduct(_id:String!,input:ProductInput):Products!
  addCategory(input:CategoryInput):Categories!
  updateCategory(_id:String!,input:CategoryInput):Categories!
}

input ProductInput {
  productPage:[ProductIn]
}
input CategoryInput {
  category:[CategoryIn]
}
`

export default product_typeDefs;
