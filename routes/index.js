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
const classificadosController = require("../controllers/classificadosController");
const indexController = require('../controllers/indexController');



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
    res.render('index', {
        title: 'Portal do Condominio',
        emailSub: null
    });
});

router.get('/demonstration', function (req, res, next) {
    res.render('demonstration', {title: 'Portal do Condominio'});
});

router.post('/demonstration', indexController.schedule);
router.post('/subscribe', indexController.subscribe);

router.get('/login', authController.index);
router.post('/logar', authController.logar);

router.get('/home', auth, homeController.exibir);

router.get('/moradores', auth, moradoresController.exibir);
router.post('/moradores', uploadDoc.any(), moradoresController.store);
router.delete('/excluirMoradores/:id', moradoresController.destroy);
router.put('/atualizarMoradores/:id', upload.any(), moradoresController.update);


router.get('/correspondencias', auth, correspondenciaController.exibir);
router.post('/registroCorrespondencia', auth, correspondenciaController.store);



router.get('/classificados', auth, classificadosController.exibirClassificados);

router.get('/meusItens', auth, classificadosController.exibirMeusItens);
router.post('/criarClassificado', auth, upload.any(), classificadosController.store);
router.put('/updateClassificado/:id', auth, upload.any(), classificadosController.update);
router.delete('/excluirClassificado/:id', auth, classificadosController.destroy);
router.post('/buscarClassificado', auth, classificadosController.search);

// Listar solicitações
router.get('/solicitacoes', auth, solicitacoesController.solicitacoes);
router.post('/solicitacoes', solicitacoesController.store);
router.put('/updateSolicitacoesAp/:id', solicitacoesController.updateAp);
router.put('/updateSolicitacoesRep/:id', solicitacoesController.updateRep);
router.delete('/solicitacoes/:id', solicitacoesController.destroy);

router.get('/criarComunicado', auth, comunicadosController.index )
router.get('/comunicados', auth, comunicadosController.exibir);
router.put('/alterarComunicado/:id', auth, comunicadosController.update);
router.get('/updateComunicado/:id', auth, comunicadosController.exibirUpdate);

router.post('/criarComunicados', auth, comunicadosController.store);
router.delete('/excluirComunicado/:id', auth, comunicadosController.destroy);



router.get('/documentacao', auth, documentacaoController.exibir);
router.post('/documentacoes', uploadDoc.any(), documentacaoController.store);
router.delete('/excluirDocumentacao/:id', documentacaoController.destroy);



router.get('/perfil', auth, perfilController.edit);
router.put('/perfil', upload.any(), auth, perfilController.update);

router.get("/registro", userController.create);
router.post("/registro",[
check("nome").isLength({min:3}).withMessage("O nome do usuario tem que conter no mínimo 3 caracteres"),
check("email").isEmail().withMessage("Email Inválido"),
check("senha").isLength({min:6}).withMessage("A senha do usuario tem que conter no mínimo 6 caracteres"),
   ],function (req, res) {
    const errors = validationResult(req);
    console.log(req.body);

    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
   } else {
     res.send({});
   }
  }, userController.store);
//router.post('/registro', userController.store)


router.post('/logoff', authController.destroy);

router.get('/prestadoresDeServico', auth, prestadoresController.exibir);
router.post('/cadastroPrestador',upload.any(), prestadoresController.store);
router.delete('/excluirPrestador/:id', prestadoresController.destroy);
router.put('/atualizarPrestador/:id', upload.any(), prestadoresController.update);

router.get('/contatosUteis', auth, contatosUteisController.exibir);
router.post('/contatosUteis', auth, upload.any(), contatosUteisController.store);
router.delete('/excluirContatos/:id', auth, contatosUteisController.destroy);
router.put('/atualizarContatos/:id', auth, upload.any(), contatosUteisController.update);

module.exports = router;
