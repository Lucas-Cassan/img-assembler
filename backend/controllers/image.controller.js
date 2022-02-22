// const fs = require("fs");
// const atob = require("atob");
// const Blob = require("node-blob");
// const { unescape } = require("querystring");

// exports.mergeImage = async (req, res, next) => {
//   const { name, data } = req.body;
//   console.log(data);

//   function dataURItoBlob(dataURI) {
//     // convert base64/URLEncoded data component to raw binary data held in a string
//     let byteString;
//     if (dataURI.split(",")[0].indexOf("base64") >= 0)
//       byteString = atob(dataURI.split(",")[1]);
//     else byteString = unescape(dataURI.split(",")[1]);

//     // separate out the mime component
//     let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

//     // write the bytes of the string to a typed array
//     let ia = new Uint8Array(byteString.length);
//     for (let i = 0; i < byteString.length; i++) {
//       ia[i] = byteString.charCodeAt(i);
//     }

//     return new Blob([ia], { type: mimeString });
//   }

//   let date = Date.now();

//   const buf = dataURItoBlob(data);
//   // fs.writeFileSync('./'+name+'_'+date+'.png', buf.buffer, { encoding: "base64" });
//   fs.writeFileSync("./" + date + ".png", buf.buffer, { encoding: "base64" });

//   if ("./" + date + ".png") {
//     return res.status(200).json("created");
//   } else {
//     return res.status(400).json("error");
//   }
// };

const multer = require("multer");

exports.mergeImage = async (req, res, next) => {
  let image = req.body;
  // image = JSON.stringify(image).replace("}", " ").split(",");
  image = JSON.stringify(image).replace("}", " ").replace("{", " ");
  console.log(image);
  // console.log(image[1]);
  // console.log(Buffer.from(image[1], "base64"));

  // let storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "public");
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, Date.now() + "-" + file.originalname);
  //   },
  // });
  // let upload = multer({ storage: storage }).single("file");
  // upload(req, res, (err) => {
  //   if (err instanceof multer.MulterError) {
  //     return res.status(500).json(err);
  //   } else if (err) {
  //     return res.status(500).json(err);
  //   }
  //   return res.status(200).send(image);
  // });
};
