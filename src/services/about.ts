const { About } = require("../model/aboutModel");
// const fs = require('fs');


// const storeFS = ({ stream, filename }:any) => {
//   const uploadDir = '__dirname, `../Upload';
//   const path = `${uploadDir}/${filename}`;
//   return new Promise((resolve, reject) =>
//       stream
//           .on('error', (error:any) => {
//               if (stream.truncated)
//                   fs.unlinkSync(path);
//               reject(error);
//           })
//           .pipe(fs.createWriteStream(path))
//           .on('error', (error:any) => reject(error))
//           .on('finish', () => resolve({ path }))
//   );
// }


const getAbout = (args: any) => {
  return About.find()
    .then((AboutInfo: any) => {
      return AboutInfo;
    });
}
const addAbout =  async (inputObject: any) => {

  // const { name ,desc } = inputObject.input.workplace[0];

  // const { filename, mimetype, createReadStream } = await inputObject.input.workplace[0].file;

  // const stream = createReadStream();
  // const pathObj = await storeFS({ stream, filename });

  // const fileLocation = pathObj;

//   const {image ,name ,desc,readmorelink,contactuslink,bestworkplace } = inputObject.input.workplace[0]

//   var obj = {
//     name: name,
//     desc: desc,
//     image:image,
//     readmorelink:readmorelink,
//     contactuslink:contactuslink,
//     bestworkplace:bestworkplace
// }

//   // console.log(obj,'image')
//   return About.create(obj).then((aboutInfo: any) => {
//     // return aboutInfo;
//     console.log(aboutInfo,'aboutinfi')
//   });

return About.create(inputObject.input).then((aboutInfo: any) => {
  return aboutInfo;
});

}
const deleteAbout = (inputObject: any) => {
  return About.findOneAndDelete({ _id: inputObject._id }).then((deleteInfo: any) => {
    return deleteInfo;
  });
}
const updateAbout = (inputObject: any) => {
  return About.findOneAndUpdate({ _id: inputObject._id }, { ...inputObject.input }, { new: true }).then(
    (updateInfo: any) => {
      return updateInfo;
    }
  );
}

module.exports = {
  getAbout,
  addAbout,
  deleteAbout,
  updateAbout
}