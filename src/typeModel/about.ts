import { gql } from 'apollo-server';

const About = gql`
type About{
  _id:String!
  aboutpage: [aboutpage!]!
  achievement: [achievement!]!
  workplace: [workplace!]
}
`
export default About;