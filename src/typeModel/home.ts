import { gql } from 'apollo-server';

const Home = gql`
type Home{
    _id: ID!
    title: [title!]!
    functionality: [functionality!]!
    testimonials: [testimonials!]!
}
`
export default Home;
