const {addContact,getContact,deleteContact,updateContact} = require("../services/contact");

const contact_resolvers = {
    Query: {
        getContact: (_: void, args: any) => {
            return getContact(args);
        }
    },
    Mutation: {
        addContact: (_:any,inputObject:any) => {
            return addContact(inputObject);
        },
        deleteContact: (_:any, inputObject:any) => {
            return deleteContact(inputObject);
        },
        updateContact: (_:any, inputObject:any) => {
            return updateContact(inputObject);
        },
    }
}
export default contact_resolvers;