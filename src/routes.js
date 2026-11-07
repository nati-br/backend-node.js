const { Router } = require('express');
const routes = new Router();

routes.get('/', (req, res) => {
    return res.send({message: 'connected with success'});
});

module.exports = routes;
