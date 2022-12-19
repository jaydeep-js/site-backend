import { gql } from 'apollo-server';

const Contact = gql`
type Contact{
  _id:String!
  title:String!
  subtitle:String!
  address:String!
  lat:Float!
  lng:Float!
  infotitle:String!
  desc:String!
  Info:[Info]
  ContactInfo:[ContactInfo]
}
`
export default Contact;