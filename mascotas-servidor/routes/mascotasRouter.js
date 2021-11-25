const mascotasRouter = require('express').Router();
const { getMascotas, getMascota, createMascota, deleteMascota, updateMascota } = require('../src/controller');
const { verifyToken } = require('../utils/middleware');

mascotasRouter.use(verifyToken);

mascotasRouter.get('/', (req, res, next) => {

    getMascotas(req, res, next);
});

mascotasRouter.get('/:id', (req, res, next) => {

    const id = req.params.id;

    getMascota(res, id, next);

});

mascotasRouter.delete('/:id', (req, res, next) => {

    const id = req.params.id;

    deleteMascota(res, id, next);

});


mascotasRouter.post('/', (req, res, next) => {

    createMascota(req.body, res, next);

});

mascotasRouter.put('/:id', (req, res, next) => {

    const id = req.params.id;

    updateMascota(id, req.body, res, next);

});


module.exports = mascotasRouter;

