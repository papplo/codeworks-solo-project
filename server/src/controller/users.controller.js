// C R /U /D : All but working example, time to commit it!
const TellusUser = require('../model/user');

// Handling new users with hashes and tokens
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const saltRd = 10;

const countUsers = async () => {
  await TellusUser.count()
    .then(c => console.log('Users in db: ' +c));
}

const createUser = async (req, res) => {

  // catch and check params
  const {username, password, email} = req.body;
  if (username && password && email) {

    // check if name exists
    const check = await TellusUser.findOne({'username': username});
    if (check) {
      console.log(req.body, ' <- Request.body. ERR USER Exists');
      res.status(400).send({ error: "User already exists!" });
      res.end()
    }

    // pseudo: create passwordHash
    let hash = '';
    await bcrypt.hash(password, saltRd).then((h) => (hash = h));

    // store as object and pass to model
    const user = new TellusUser({
      'passwordHash': hash,
      'email'       : email,
      'username'    : username,
      'tokenSeed'   : uuidv4(),
    })
    user.save()
      .then(event => res.json(event))
      .then(countUsers())
      .catch(e => console.log(e));
    }
  else {
    console.log(req.body, ' <- Request.body. Prob Somethings wrong');
    res.status(400).send({ error: "Something is missing in your post!" });
    res.end()
  }
}

const getUsers = (req, res) => {
  TellusUser.find()
    .then(users => res.json(
      users.map(user => user.username)))
    .catch((e) => (
      res.status(400).send('Somethings wrong with the world today!', { error: e })
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
