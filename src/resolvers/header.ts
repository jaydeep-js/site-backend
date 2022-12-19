const {getHeader,addHeader,deleteHeader,updateHeader} = require("../services/header");

const header_resolvers = {
    Query: {
        getHeader: (_: void, args: any) => {
            return getHeader(args);
        }
    },
    Mutation: {
        addHeader: (_:any,inputObject:any) => {
            return addHeader(inputObject);
        },
        deleteHeader: (_:any, inputObject:any) => {
            return deleteHeader(inputObject);
        },
        updateHeader: (_:any, inputObject:any) => {
            return updateHeader(inputObject);
        },
    }
}
export default header_resolvers;