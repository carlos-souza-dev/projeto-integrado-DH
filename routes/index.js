const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const {check, validationResult, body} = require('express-validator')
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
const contatosUteisController = require("../controllers/contatosUteisController");
const classificadosController = require("../controllers/classificadosController")



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

router.get('/login', authController.index);
router.post('/logar', authController.logar);

router.get('/home',  homeController.exibir);

router.get('/moradores',  moradoresController.exibir);
router.post('/moradores', uploadDoc.any(), moradoresController.store);
router.delete('/excluirMoradores/:id', moradoresController.destroy);
router.put('/atualizarMoradores/:id', upload.any(), moradoresController.update);


router.get('/correspondencias',  correspondenciaController.exibir);
router.post('/registroCorrespondencia',  correspondenciaController.store);



router.get('/classificados',  classificadosController.exibirClassificados);

router.get('/meusItens',  classificadosController.exibirMeusItens);
router.post('/criarClassificado',  upload.any(), classificadosController.store);
router.put('/updateClassificado/:id',  upload.any(), classificadosController.update);
router.delete('/excluirClassificado/:id',  classificadosController.destroy);
router.post('/buscarClassificado',  classificadosController.search);

// Listar solicitações
router.get('/solicitacoes',  solicitacoesController.solicitacoes);
router.post('/solicitacoes', solicitacoesController.store);
router.put('/updateSolicitacoesAp/:id', solicitacoesController.updateAp);
router.put('/updateSolicitacoesRep/:id', solicitacoesController.updateRep);
router.delete('/solicitacoes/:id', solicitacoesController.destroy);

router.get('/criarComunicado',  comunicadosController.index )
router.get('/comunicados',  comunicadosController.exibir);
router.put('/alterarComunicado/:id',  comunicadosController.update);
router.get('/updateComunicado/:id',  comunicadosController.exibirUpdate);

router.post('/criarComunicados',  comunicadosController.store);
router.delete('/excluirComunicado/:id',  comunicadosController.destroy);



router.get('/documentacao',  documentacaoController.exibir);
router.post('/documentacoes', uploadDoc.any(), documentacaoController.store);
router.delete('/excluirDocumentacao/:id', documentacaoController.destroy);



router.get('/perfil',  perfilController.edit);
router.put('/perfil', upload.any(),  perfilController.update);

router.get("/registro", userController.create);
//router.post("/registro",[
//check("nome").isLength({min:3}).withMessage("O nome do usuario tem que conter no mínimo 3 caracteres"),
//check("email").isEmail().withMessage("Email Inválido"),
//check("senha").isLength({min:6}).withMessage("A senha do usuario tem que conter no mínimo 6 caracteres"),
//], userController.store);
router.post('/registro', userController.store)


router.post('/logoff', authController.destroy);

router.get('/prestadoresDeServico',  prestadoresController.exibir);
router.post('/cadastroPrestador',upload.any(), prestadoresController.store);
router.delete('/excluirPrestador/:id', prestadoresController.destroy);
router.put('/atualizarPrestador/:id', upload.any(), prestadoresController.update);

router.get('/contatosUteis',  contatosUteisController.exibir);
router.post('/contatosUteis',  upload.any(), contatosUteisController.store);
router.delete('/excluirContatos/:id',  contatosUteisController.destroy);
router.put('/atualizarContatos/:id',  upload.any(), contatosUteisController.update);

module.exports = router;
