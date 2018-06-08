
// C R /U /D : All but working example, time to commit it!
const TellusUser = require('../model/user');

const createUser = (req, res) => {

  if (req.body.email && req.body.passwordHash && req.body.username) {
    const user = new TellusUser({
      'passwordHash': req.body.passwordHash,
      'email'       : req.body.email,
      'username'    : req.body.username,
      'tokenSeed'   : req.body.tokenSeed,
    })
    user.save()
      .then(event => res.json(event))
      .catch(e => console.log(e))
    }
  else {
    console.log('Prob Somethings wrong');
    res.sendStatus(404)
    res.end()

  }
}

const getUsers = (req, res) => {
  TellusUser.find()
    .then(users => res.json(
      users.map(user => user.username)))
    .catch((e) => (
      res.status(500).send('Somethings wrong with the world today!', { error: e })
    ));
}

const getOneUser = (req, res) => {
  TellusUser.findOne({'tokenSeed': req.params.id})
    .then(user => res.json(user))
    .catch((e) => (
      res.status(500).send(body)
    ));
}


module.exports = {
  createUser,
  getUsers,
  getOneUser
}
