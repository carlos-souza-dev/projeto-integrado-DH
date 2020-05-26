
const homeController = {
    index: (req,res) => {
        console.log(req.session)
        res.render('home', {usuario: req.session.user});

    }
}

module.exports = homeController;
