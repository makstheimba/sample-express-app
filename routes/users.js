// создадим express router
const router = require('express').Router();
const { users } = require('../models/users');

router.get('/', (req, res) => {
  res.send(users);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

    if (!users[id]) {
        res.send({ error: 'Такого пользователя нет' });
        return;
    }
  res.send(users[id]);
});
// экспортируем его
module.exports = router;