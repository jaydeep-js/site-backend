import { gql } from 'apollo-server';

const Footer = gql`
type Footer{
    _id:String!
    logo:String
    address:String!
    contact:Int
    inquiryemail:String!
    aboutinformation:String!
    customercare:[customercare!]!
    navigate:[navigate!]!
    contactforestimate:String!
    readmorelink:String!
    copyrightby:String!
}
`
export default Footer;