'use strict'

const express = require('express');
const router  = express.Router();
const usersController = require('../controller/users.controller');
const nodesController = require('../controller/nodes.controller');

const { createUser, getUsers, getOneUser } = usersController;
const { createNode, getNodes, getOneNode } = nodesController;

// paths for router
router
  .post('/users/',    (req, res) => createUser(req, res))
  .get('/users/',     (req, res) => getUsers(req, res))
  .get('/users/:id',  (req, res) => getOneUser(req, res))
  .post('/nodes/',    (req, res) => createUser(req, res))
  .get('/nodes/',     (req, res) => getUsers(req, res))
  .get('/nodes/:id',  (req, res) => getOneUser(req, res))
  .all('/',           (req, res) => {
    console.log('Echo 404 on catch-all');
    return res.sendStatus(404);});

  module.exports = router
