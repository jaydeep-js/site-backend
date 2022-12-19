import { gql } from 'apollo-server';
import Contact from '../typeModel/contact';

const contcat_typeDefs = gql`
${Contact}
type ContactInfo{
    _id:String
    title:String!
    text:String!
    icon:String!
    link:String!   
}
input ContactInfoInput {
    title:String!
    text:String!
    icon:String!
    link:String!   
}
type Info{
  _id:String
  Infotype:String!
  name:String!
  Infoclassname:String! 
}
input InfoInput {
  Infotype:String!
  name:String!
  Infoclassname:String!
}
input ContactInput {
  title:String!
  subtitle:String!
  address:String!
  lat:Float!
  lng:Float!
  infotitle:String!
  desc:String!
  Info:[InfoInput]
  ContactInfo:[ContactInfoInput]
}
type Query{
    getContact:[Contact]
  }
type Mutation {
  addContact(input:ContactInput): Contact
  deleteContact(_id:String!): Contact
  updateContact(_id:String!,input:ContactInput): Contact
}
`
export default contcat_typeDefs;