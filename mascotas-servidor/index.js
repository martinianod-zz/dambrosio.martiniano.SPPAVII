require('./db/mongo');
const express = require('express');
const cors = require('cors');
const { getMascotas, getMascota, createMascota, deleteMascota, updateMascota } = require('./src/controller');
const { handlerNotFound, handlerError, logger } = require('./utils/middleware');
const { PORT } = require('./utils/config');
const mascotasRouter = require('./routes/mascotasRouter');
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const tiposMascotasRouter = require('./routes/tiposMascotasRouter');

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
    res.send("<h1>Servidor Mascotas</h1>");
});

app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/mascotas', mascotasRouter);
app.use('/api/tipos-mascotas', tiposMascotasRouter);

app.use(handlerNotFound);

app.use(handlerError);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});