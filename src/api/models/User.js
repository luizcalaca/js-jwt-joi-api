const users = [{ name: 'name', email: 'pass@email.com', password: 'calaca', role: 'admin' }];

function omitPassword(user) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

function create({ name, email, password, role }) {
  users.push({ name, email, password, role });
  return {
    ...omitPassword({ name, email, password, role }),
};
}

function login({ email, password }) {
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) throw new Error('UnauthorizedError');

  return {
      ...omitPassword(user),
  };
}

function findByEmail(email) {
  const user = users.find((u) => u.email === email);
  return user;
}

async function listAllUsers() {
  return users.map((user) => omitPassword(user));
}

module.exports = {
  findByEmail,
  login,
  create,
  listAllUsers,
};
