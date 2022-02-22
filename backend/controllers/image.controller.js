const fs = require("fs");
const atob = require("atob");
const Blob = require("node-blob");
const { unescape } = require("querystring");

exports.mergeImage = async (req, res, next) => {
  const { image } = req.body;

  function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0)
      byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);

    // separate out the mime component
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // write the bytes of the string to a typed array
    let ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

  let date = Date.now();

  const buf = dataURItoBlob(image);
  // fs.writeFileSync('./'+name+'_'+date+'.png', buf.buffer, { encoding: "base64" });
  fs.writeFileSync("./public/" + date + ".png", buf.buffer, {
    encoding: "base64",
  });

  if ("./public/" + date + ".png") {
    return res.status(200).json("created");
  } else {
    return res.status(400).json("error");
  }
};
