const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(
  express.urlencoded({
    ectende: true,
  })
);

app.use(express.json());

app.get('/users', (req, res) => {
  controller.getUsers((users) => {
    res.send(users);
  });
});

app.get('/user', (req, res) => {
  const id = req.querry.id;
  controller.getUserById(id, (users) => {
    res.send(users);
  });
});

module.exports = app;
