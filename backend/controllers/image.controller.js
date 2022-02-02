exports.mergeImage = async (req, res, next) => {
  const file = req.file;
  const test = req.body;
  console.log("file : " + file);
  console.log("body : " + test);
  res.status(200).json("ok");
};
