const { DB_URI } = require('../utils/config')
const { connect } = require('mongoose');

const conectarBD = async () => {

    connect(DB_URI)

}

conectarBD()
    .then(result => {
        console.log("DB Conectada");
    })
    .catch(err => {
        console.error(err);
    });