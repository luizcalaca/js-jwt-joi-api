const { generateToken } = require('../api/utils/tokenHandler');
const { request, expect } = require('./configuration/include');

let token;
const userMock = {
  name: 'rubens',
  email: "rubens@gmail.com", 
  password: "123",
  role: 'admin'
}

describe('End-point /users', function () {

  beforeEach( async () => {
    token = generateToken(userMock)
  });

  it('Cadastro incompleto', async function () {
    var res = await request.post('/users')
    .send({name: 'zezinho'})
    expect(res).to.have.status(500);
    expect(res).to.have.property('body');
    const { body } = res;
    expect(body).to.have.property('message');
    expect(body.message).to.equal('ValidationError');
  });
});