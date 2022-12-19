const { Home } = require("../model/homeModel");
const getHome = (args: any) => {
  return Home.find()
    .then((HomeInfo: any) => {
      return HomeInfo;
    });
}
const addHome = (inputObject: any) => {
  return Home.create(inputObject.input).then((HomeInfo: any) => {
    return HomeInfo;
  });
}
const deleteHome = (inputObject: any) => {
  return Home.findOneAndDelete({ _id: inputObject._id }).then((deleteInfo: any) => {
    return deleteInfo;
  });
}
const updateHome = (inputObject: any) => {
  return Home.findOneAndUpdate({ _id: inputObject._id }, { ...inputObject.input }, { new: true }).then(
    (updateInfo: any) => {
    console.log("----------------------",updateInfo)

      return updateInfo;
    }
  ).catch((e:any)=>{
    console.log("----------------------",e)

  });
}
module.exports = {
  getHome,
  addHome,
  deleteHome,
  updateHome
}

