const {getFooter,addFooter,deleteFooter,updateFooter} = require("../services/footer");
const footer_resolvers = {
    Query: {
        getFooter: (_: void, args: any) => {
            return getFooter(args);
        }
    },
    Mutation: {
        addFooter: (_:any,inputObject:any) => {
            return addFooter(inputObject);
        },
        deleteFooter: (_:any, inputObject:any) => {
            return deleteFooter(inputObject);
        },
        updateFooter: (_:any, inputObject:any) => {
            return updateFooter(inputObject);
        },
    }
}
export default footer_resolvers;