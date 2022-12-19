import { gql } from 'apollo-server';

const Product = gql`
type Product{
    _id:String!
    Productpage: [Productpage!]!
}
`
export default Product;