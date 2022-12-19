import { gql } from 'apollo-server';
import Header from '../typeModel/header';

const header_typeDefs = gql`
${Header}
type socialicon {
  _id:String
  icon:String!
  iconlink:String!
}
input socialiconInput {
  _id:String
  icon:String!
  iconlink:String!
}
type menubar {
  _id:String
  menuname:String!
  menulink:String!
}
input menubarInput {
  _id:String
  menuname:String!
  menulink:String!
}
input HeaderInput {
  time:String!
  email:String!
  location:String!
  logo:String!
  inquiryemail:String!
  contact:Int
  socialicon: [socialiconInput!]!
  menubar: [menubarInput!]!
}
type Query{
  getHeader:[Header]
}
type Mutation {
  addHeader(input:HeaderInput): Header
  deleteHeader(_id:String!): Header
  updateHeader(_id:String!,input:HeaderInput): Header
}
`
export default header_typeDefs;