import { Contact } from "../model/contactModel";

const getContact = (args: any) => {
    return Contact.find()
      .then((ContactInfo: any) => {
        return ContactInfo;
      });
}

const addContact = (inputObject: any) => {
  return Contact.create(inputObject.input).then((ContactInfo: any) => {
    return ContactInfo;
  });
}
const deleteContact = (inputObject: any) => {
    return Contact.findOneAndDelete({ _id: inputObject._id }).then((deleteInfo: any) => {
      return deleteInfo;
    });
}
const updateContact = (inputObject: any) => {
    return Contact.findOneAndUpdate({ _id: inputObject._id }, { ...inputObject.input }, { new: true }).then(
      (updateInfo: any) => {
        return updateInfo;
      }
    );
  }
module.exports = {
  addContact,
  getContact,
  deleteContact,
  updateContact
}