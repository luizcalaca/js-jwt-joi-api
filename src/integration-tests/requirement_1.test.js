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

  it('Obter pessoas usuárias em rota autenticada por token', async() => {
    var res = await request.get('/users')
    .set({ authorization: `${token}` });
    expect(res).to.have.status(200);
  });
});