const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const homeController = require("../controllers/homeController");
const perfilController = require("../controllers/perfilController");

const auth = require("../middlewares/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("upload"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portal do Condominio' });
});

router.get('/login', authController.create);
router.post('/login', authController.store);

router.get('/home', auth, homeController.index);

router.get('/moradores', auth, function(req, res, next) {
  res.render('moradores', { title: 'Moradores' });
});
router.get('/prestadoresDeServico', auth, function(req, res, next) {
  res.render('prestadoresDeServico', { title: 'Prestadores de Servico' });
});
router.get('/correspondencias', auth, function(req, res, next) {
  res.render('correspondencias', { title: 'Correspondencias' });
});
router.get('/contatosUteis', auth, function(req, res, next) {
  res.render('contatosUteis', { title: 'Contatos Uteis' });
});
router.get('/classificados', auth, function(req, res, next) {
  res.render('classificados', { title: 'classificados' });
});
router.get('/meusItens', auth, function(req, res, next) {
  res.render('meusItens', { title: 'Meus Itens' });
});
router.get('/comunicados', auth, function(req, res, next) {
  res.render('comunicados', { title: 'Comunicados' });
});
router.get('/solicitacoes', auth, function(req, res, next) {
  res.render('solicitacoes', { title: 'Solicitacoes' });
});

router.get('/documentacao', auth, function(req, res, next) {
  res.render('documentacao', { title: 'Documentacao' });
});

router.get('/perfil', auth, perfilController.index);
// router.post('/perfil', upload.any(), perfilController.store);



router.get("/registro", userController.create);
router.post("/registro", userController.store);




module.exports = router;
