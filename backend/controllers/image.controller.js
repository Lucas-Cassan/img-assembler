const multer = require("multer");

exports.mergeImage = async (req, res, next) => {
  let image = req.body;
  // image = JSON.stringify(image).replace("}", " ").split(",");
  image = JSON.stringify(image).replace("}", " ").replace("{", " ");
  console.log(image);
  // console.log(image[1]);
  // console.log(Buffer.from(image[1], "base64"));
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  let upload = multer({ storage: storage }).single("file");

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(image);
  });
};
