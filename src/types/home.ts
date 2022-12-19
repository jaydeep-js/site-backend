import { gql } from 'apollo-server';
import Home from '../typeModel/home';

const home_typeDefs = gql`
${Home}
type title {
    _id:String
    year:String!
    maintitle:String!
    desc:String!
    readmorelink:String!
    discoverlink:String!
}
input titleInput {
    year:String!
    maintitle:String!
    desc:String!
    readmorelink:String!
    discoverlink:String!
}
type functionality {
    _id:String
    image:String!
    maintitle:String!
    desc:String!
    readmorelink:String!
}
input functionalityInput {
    image:String!
    maintitle:String!
    desc:String!
    readmorelink:String!
}
type testimonials {
    _id:String
    icon:String!
    name:String!
    desc:String!
    category:String!
}
input testimonialsInput {
    icon:String!
    name:String!
    desc:String!
    category:String!
}
type Query{
    getHome:[Home]
}
input HomeInput {
    title: [titleInput!]!
    functionality: [functionalityInput!]!
    testimonials: [testimonialsInput!]!
  }
type Mutation {
    addHome(input:HomeInput): Home
    deleteHome(_id:String!): Home
    updateHome(_id:String!,input:HomeInput): Home
}
`
export default home_typeDefs;