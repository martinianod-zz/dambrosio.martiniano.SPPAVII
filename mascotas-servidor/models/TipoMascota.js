const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const tiposMascotaSchema = new Schema({
    tipo: {
        type: String,
    }
});

tiposMascotaSchema.set('toJSON', {
    transform: ((document, tipomascotaToJSON) => {
        tipomascotaToJSON.id = tipomascotaToJSON._id.toString();
        delete tipomascotaToJSON._id;
        delete tipomascotaToJSON.__v;
    })
})

module.exports = model('TipoMascota', tiposMascotaSchema);