const path = require('path');
const fs = require('fs');

// const rota = "../public/img/classificados/1592947829249ferrari.jpg";

// const image = rota.slice(rota.lastIndexOf("/")+1);

const deletarClassificados = function ( image) {
    
    fs.unlink("public/img/classificados/"+ image, (error) => {
        if(error)
        console.log(error)
        else {
            console.log("O arquivo "+image+" foi removido com sucesso.")
        }
    })
}

// const deletarUser = function ( image) {

//     fs.unlink("public/img/user/"+ image, (error) => {
//         if(error)
//             console.log(error)
//         else {
//             console.log("O arquivo "+image+" foi removido com sucesso.")
//         }
//     })
// }

module.exports = deletarClassificados;