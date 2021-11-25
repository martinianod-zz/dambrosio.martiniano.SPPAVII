const TipoMascota = require('../models/TipoMascota');
const tiposMascotasRouter = require('express').Router();

tiposMascotasRouter.get('/', (req, res, next) => {
    TipoMascota.find({}).then(tipos => {
        if (tipos) {
            res.json(tipos);
        }
        res.status(404).end()
    })
        .catch(err => {
            next(err);
        })

});

tiposMascotasRouter.post('/', (req, res, next) => {
    const { tipo } = req.body;

    const nuevoTipo = new TipoMascota({
        tipo,
    });

    nuevoTipo.save()
        .then(tipo => res.status(201).json(tipo).end())
        .catch(err => {
            next(err);
        });

});

module.exports = tiposMascotasRouter;