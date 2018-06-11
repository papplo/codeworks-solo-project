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
    const check = await TellusUser.findOne({'username': username})
    if (check) {
      console.log(req.body, ' <- Request.body. ERR USER Exists');
      res.status(400).send({ error: "User or E-mail already exists!" });
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
      .then(res.cookie('TellusUser', user.tokenSeed))
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

const loginUser = async (req, res) => {
  console.log(req.body, 'Accessing Basic login at /loginUser');
  const match = await TellusUser.findOne({'username': req.body.username});
    if (match) {
      console.log('UserName Exists: now authenticating');
      await bcrypt.compare(req.body.password, match.passwordHash,
        (err, result) => {
          if(result) {
            console.log('Passwords match db records');
            res.status(200);
            res.cookie('TellusUser', match.tokenSeed);
            res.send({ success: {'message' : 'You were authenticated Basic Auth' , 'username' : match.username} });
            res.end();
          } else {
            console.log('Passwords dont match');
            res.status(406);
            res.send({ message: "The password is incorrect", error: 'true'});
            res.end()
          }
      });
    }
    else {
      console.log(req.body, ' <- Request.body. Probably something is wrong');
      res.status(406);
      res.send({ message: "This username does not exist", error: 'true'});
      res.end()
    }

}

const authenticate = async (req, res, next) => {
  console.log('Accessing authenticate: /user/');

  // get cookie from Request
  console.log(req.body);
  const sessionAuthCookie = req.cookies.TellusUser;
  if (sessionAuthCookie != undefined) {
    console.log('token: ',  sessionAuthCookie);

    const user = await TellusUser.findOne({'tokenSeed': sessionAuthCookie});
    if (user) {
      res.status(206).json({ success: {'message' : 'You were authenticated with a cookie' , 'username' : user.username} });
      res.end()
    } else {
      console.log('cookie failed');
      next()
    }
  }
  else {
    console.log(req.cookies, ' <- Request.cookies. Missing Token, forwarding to loginUser');
    next()
  }
}

module.exports = {
  createUser,
  getUsers,
  loginUser,
  authenticate
}
