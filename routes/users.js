var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
//const {check, validationResult, body} = require('express-validator')
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
//router.post([
 //check("nome").isLength({min:3}).withMessage("O nome do usuario tem que conter no mínimo 3 caracteres"),
 //check("email").isEmail().withMessage("Email Inválido"),
 //check("senha").isLength({min:6}).withMessage("A senha do usuario tem que conter no mínimo 6 caracteres"),
//], userController.store)
//const userController = require("../controllers/userController")

//router.post('/home', upload.any(), userController.store);

module.exports = router;
