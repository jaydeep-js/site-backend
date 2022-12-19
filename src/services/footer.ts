const { Footer } = require("../model/footerModel");
const getFooter = (args: any) => {
  return Footer.find()
    .then((FooterInfo: any) => {
      return FooterInfo;
    });
}
const addFooter = (inputObject: any) => {
  return Footer.create(inputObject.input).then((FooterInfo: any) => {
    return FooterInfo;
  });
}
const deleteFooter = (inputObject: any) => {
  return Footer.findOneAndDelete({ _id: inputObject._id }).then((deleteInfo: any) => {
    return deleteInfo;
  });
}
const updateFooter = (inputObject: any) => {
  return Footer.findOneAndUpdate({ _id: inputObject._id }, { ...inputObject.input }, { new: true }).then(
    (updateInfo: any) => {
      return updateInfo;
    }
  );
}
module.exports = {
  getFooter,
  addFooter,
  deleteFooter,
  updateFooter
}