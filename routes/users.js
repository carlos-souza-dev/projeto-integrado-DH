var express = require('express');
var router = express.Router();
//const multer = require('multer');
//const path = require('path');
 
//var storage = multer.diskStorage({
  //destination: function(req,file, cb) {
    //cb(null, path.join('uploads'))
  //},
  //filename: function (req, file, cb){
    //cb(null, file.originalname)
  //}
//})

//var upload = multer({ storage: storage })//

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//const userController = require("../controllers/userController")

//router.post('/home', upload.any(), userController.store);

module.exports = router;
