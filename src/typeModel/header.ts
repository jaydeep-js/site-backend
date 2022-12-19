import { gql } from 'apollo-server';

const Header = gql`
type Header{
  _id:String!
  time:String!
  email:String!
  location:String!
  logo:String!
  inquiryemail:String!
  contact:Int
  socialicon: [socialicon!]!
  menubar: [menubar!]!
}
`
export default Header;
