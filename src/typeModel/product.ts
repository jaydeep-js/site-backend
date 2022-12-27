import { gql } from 'apollo-server';

const Product = gql`
type Product{
    _id:String!
    image:String
    thumbImg:String
    skuText:String
    categoryId:[String!]
    desc:String
}
`
export default Product;