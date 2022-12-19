const { Header } = require("../model/headerModel");

const getHeader = (args: any) => {
  return Header.find()
    .then((HeaderInfo: any) => {
      return HeaderInfo;
    });
}
const addHeader = (inputObject: any) => {
  return Header.create(inputObject.input).then((HeaderInfo: any) => {
    return HeaderInfo;
  });
}
const deleteHeader = (inputObject: any) => {
  return Header.findOneAndDelete({ _id: inputObject._id }).then((deleteInfo: any) => {
    return deleteInfo;
  });
}
const updateHeader = (inputObject: any) => {
  return Header.findOneAndUpdate({ _id: inputObject._id }, { ...inputObject.input }, { new: true }).then(
    (updateInfo: any) => {
      return updateInfo;
    }
  );
}
module.exports = {
  getHeader,
  addHeader,
  deleteHeader,
  updateHeader
}