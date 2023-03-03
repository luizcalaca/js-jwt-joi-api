const { generateToken } = require('../api/utils/tokenHandler');
const { request, expect } = require('./configuration/include');

describe('End-point /users', function () {
  it('Cadastro com email duplicado', async function () {
    const input = {
      name: 'zezinho',
      email: 'zezinho@email.com',
      password: 'passwd',
      role: 'admin'
    }
    let res = await request.post('/users')
    .send(input)
    .then(() => request.post('/users')
    .send(input));

    expect(res).to.have.status(500);
    expect(res).to.have.property('body');
    const { body } = res;
    expect(body).to.have.property('message');
    expect(body.message).to.equal('ValidationError');
  });
});