import { gql } from 'apollo-server';
import About from '../typeModel/about';

const about_typeDefs = gql`
scalar Upload

${About}
type aboutpage {
  _id:String
  title:String!
  image1:String!
  image2:String!
  desc:String!
  readmorelink:String!
  worklist:[String!]
  contactlink:String!
}
input AboutpageInput {
  title:String
  image1:String
  image2:String
  desc:String
  readmorelink:String
  worklist:[String!]
  contactlink:String
}
type achievement {
  _id:String
  title:String!
  icon:String!
  number:String!
}
input AchievementInput {
  title:String!
  icon:String!
  number:String!
}
type workplace {
  _id:String
  name:String
  desc:String
  image: String
  readmorelink:String
  contactuslink:String
  bestworkplace:Boolean
}
input workplaceInput {
  name:String
  desc:String
  image: String
  readmorelink:String
  contactuslink:String
  bestworkplace:Boolean
}
type Query{
  getAbout:[About]
}
input AboutInput {
  aboutpage: [AboutpageInput!]
  achievement: [AchievementInput!]
  workplace: [workplaceInput!]
}

type Mutation {
  addAbout(input:AboutInput): About!

  deleteAbout(_id:String!): About
  updateAbout(_id:String!,input:AboutInput): About
}
`
export default about_typeDefs;