import { gql } from 'apollo-server';

const Home = gql`
type Home{
    _id:String!
    title: [title!]!
    functionality: [functionality!]!
    testimonials: [testimonials!]!
}
`
export default Home;
