const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
chai.use(chaiHttp);

const supertest = require('supertest');
const app = require('../../api/app');
const PORT = 8000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

const url = `http://localhost:${PORT}`;

const request = supertest(app);

module.exports = {
  request,
  expect,
}
