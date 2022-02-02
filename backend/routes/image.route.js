const router = require("express").Router();

const imgCtrl = require("../controllers/image.controller");

router.post("/merge", imgCtrl.mergeImage);

module.exports = router;
