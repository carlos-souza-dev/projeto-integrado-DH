const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const homeController = require("../controllers/homeController");
const perfilController = require("../controllers/perfilController");
const solicitacoesController = require("../controllers/solicitacoesController");
const comunicadosController = require("../controllers/comunicadosController");
const moradoresController = require("../controllers/moradoresController");
const correspondenciaController = require(
    "../controllers/correspondenciaController"
);
const prestadoresController = require('../controllers/prestadoresController');
const documentacaoController = require("../controllers/documentacaoController");


const auth = require("../middlewares/auth");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join("public", "img"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({storage: storage});


const storageDoc = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join("public", "docs"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const uploadDoc = multer({storage: storageDoc});


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Portal do Condominio'});
});

router.get('/login', authController.create);
router.post('/login', authController.store);

router.get('/home', auth, homeController.index);

router.get('/moradores', auth, moradoresController.exibir);

router.get('/registroCorrespondencia', correspondenciaController.create);
router.post('/registroCorrespondencia', correspondenciaController.store);

router.get('/correspondencias', auth, correspondenciaController.exibir);

router.get('/contatosUteis', auth, function (req, res, next) {
    res.render('contatosUteis', {title: 'Contatos Uteis'});
});
router.get('/classificados', auth, function (req, res, next) {
    res.render('classificados', {title: 'classificados'});
});
router.get('/meusItens', auth, function (req, res, next) {
    res.render('meusItens', {title: 'Meus Itens'});
});

// Listar solicitações
router.get('/solicitacoes', solicitacoesController.solicitacoes);
router.post('/solicitacoes', solicitacoesController.store);

router.get('/comunicados', auth, comunicadosController.exibir);

router.get('/documentacao', auth, documentacaoController.exibir);
router.post('/documentacoes', uploadDoc.any(), documentacaoController.store);
router.delete('/excluirDocumentacao/:id', documentacaoController.destroy);

router.get('/criarComunicados', comunicadosController.create);
router.post('/criarComunicados', comunicadosController.store);

router.get('/perfil', auth, perfilController.edit);
router.put('/perfil', upload.any(), perfilController.update);

router.get("/registro", userController.create);
router.post("/registro", userController.store);

router.post('/logoff', authController.destroy);

router.get('/prestadoresDeServico', prestadoresController.exibir);
router.post('/cadastroPrestador',upload.any(), prestadoresController.store);
router.delete('/excluirPrestador/:id', prestadoresController.destroy);

module.exports = router;
