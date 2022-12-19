const {getHome,addHome,deleteHome,updateHome} = require("../services/home");

const home_resolvers = {
    Query: {
        getHome: (_: void, args: any) => {
            return getHome(args);
        }
    },
    Mutation: {
        addHome: (_:any,inputObject:any) => {
            return addHome(inputObject);
        },
        deleteHome: (_:any, inputObject:any) => {
            return deleteHome(inputObject);
        },
        updateHome: (_:any, inputObject:any) => {
            return updateHome(inputObject);
        },
    }
}
export default home_resolvers;