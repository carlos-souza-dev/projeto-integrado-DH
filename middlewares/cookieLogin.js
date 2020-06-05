const Sequelize = require("sequelize");
const config = require("../config/database");

const cookieLogin = async (req, res, next) => {
    
    if(req.cookies.logado != undefined && req.session.user == undefined) {
        let email = req.cookies.logado;
        const con = new Sequelize(config);

        const [user] = await con.query(
            "select * from moradores where email=:email limit 1",
            {
                replacements: {
                    email
                },
                type: Sequelize.QueryTypes.SELECT
            }
        );

        
        usuario = {
            id: user.id,
            nome: user.nome,
            email: user.email,
            foto: user.foto,
            sobre: user.sobre,
            admin: user.admin? true : false,
            dataNascimento: user.dataNascimento,
            id_apartamento: user.id_apartamento,
        };

        if (user.email == email){
            req.session.user = usuario;
        }

    }

    next();
}

module.exports = cookieLogin;