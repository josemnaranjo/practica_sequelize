const UserController = require('../controllers/user.controller');


module.exports = app => {

    app.get('/getAll',UserController.findAll);
    app.get('/createNew',UserController.createNew);
    app.get('/deleteUser',UserController.deleteUser)

}
