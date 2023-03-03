const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const usersRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
// app.get('/', (request, response) => {
//   response.send();
// });

app.use('/users', usersRoutes);
app.use(errorHandler);

module.exports = app;
