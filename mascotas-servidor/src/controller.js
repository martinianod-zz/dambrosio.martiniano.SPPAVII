const Mascota = require('../models/Mascota');

const getMascotas = (req, res) => {

    Mascota.find({}).then(mascotas => {
        if (mascotas) {
            res.json(mascotas);
        }
        res.status(404).end()
    })
        .catch(err => {
            next(err);
        })

}


const getMascota = (res, id, next) => {

    Mascota.findById(id).then(mascota => {
        if (mascota) {
            res.json(mascota);
        }
        res.status(404).end()
    })
        .catch(err => {
            next(err);
        })

}

const deleteMascota = (res, id, next) => {

    Mascota.findByIdAndRemove(id)
        .then(result => {
            if (result) {
                res.status(204).end()
            }
            res.status(404).end();
        })
        .catch(err => {
            //res.status(400).end();
            next(err);
        })

}

const createMascota = (body, res, next) => {

    const { nombre, edad, tipo, vacunado, observaciones } = body;

    const nuevaMascota = new Mascota({
        nombre,
        edad,
        tipo,
        vacunado,
        observaciones,
    });

    nuevaMascota.save()
        .then(mascota => res.status(201).json(mascota).end())
        .catch(err => {
            next(err);
        });

}


const updateMascota = (id, body, res, next) => {

    const { nombre, edad, tipo, vacunado, observaciones } = body;

    const infoMascota = {};

    if (nombre) {
        infoMascota.nombre = nombre
    }

    if (edad) {
        infoMascota.edad = edad
    }

    if (tipo) {
        infoMascota.tipo = tipo
    }

    if (vacunado) {
        infoMascota.vacunado = vacunado
    }

    if (tipo) {
        infoMascota.observaciones = observaciones
    }

    Mascota.findByIdAndUpdate(id, infoMascota, { new: true })
        .then(mascota => {
            if (mascota) {
                res.status(201).json(mascota).end()
            }
            res.status(404).end()
        })
        .catch(err => {
            next(err);
        });
}

module.exports = {
    getMascota,
    getMascotas,
    deleteMascota,
    updateMascota,
    createMascota
}
