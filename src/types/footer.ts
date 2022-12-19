import { gql } from 'apollo-server';
import Footer from '../typeModel/footer';

const footer_typeDefs = gql`
${Footer}
type customercare {
  _id:String
  pagename:String!
  pagelink:String!
}
input customercareInput {
  _id:String
  pagename:String!
  pagelink:String!
}
type navigate {
  _id:String
  name:String!
  link:String!
}
input navigateInput {
  _id:String
  name:String!
  link:String!
}
input FooterInput {
  logo:String
  address:String!
  contact:Int
  inquiryemail:String!
  aboutinformation:String!
  customercare:[customercareInput!]!
  navigate:[navigateInput!]!
  contactforestimate:String!
  readmorelink:String!
  copyrightby:String!
}
type Query{
  getFooter:[Footer]
}
type Mutation {
  addFooter(input:FooterInput): Footer
  deleteFooter(_id:String!): Footer
  updateFooter(_id:String!,input:FooterInput): Footer
}
`
export default footer_typeDefs;