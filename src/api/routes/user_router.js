const express = require('express');
const router = express.Router(); 
const userController = require('../controllers/user_controller');
const { checkToken } = require("../auth/token_validation");

router
    .get('/',checkToken, userController.get )
    .get('/:id', userController.getById )
    .get('/email/:email', userController.getByEmail )
    .post('/', userController.create )
    .post('/login', userController.login )
    .put('/:id', userController.update )
    .delete('/:id', userController._delete );

module.exports = router;
