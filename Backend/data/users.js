import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    userType: 'admin',
    isAdmin: true,
  },
  {
    name: 'john',
    email: 'johnadmin@email.com',
    password: bcrypt.hashSync('654123', 10),
    userType: 'traveller',
    isAdmin: false,
  },
  {
    name: 'cena',
    email: 'cena@email.com',
    password: bcrypt.hashSync('123456', 10),
    userType: 'business',
    isAdmin: false,
  },
];

export default users;
