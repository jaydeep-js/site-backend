const {getAbout,addAbout,deleteAbout,updateAbout} = require("../services/about");
const about_resolvers = {
    Query: {
        getAbout: (_: void, args: any) => {
            return getAbout(args);
        }
    },
    Mutation: {
        addAbout: (_:any,inputObject:any) => {
            return addAbout(inputObject);
        },
        deleteAbout: (_:any, inputObject:any) => {
            return deleteAbout(inputObject);
        },
        updateAbout: (_:any, inputObject:any) => {
            return updateAbout(inputObject);
        },
    }
}
export default about_resolvers;