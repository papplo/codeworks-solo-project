'use strict'

const express = require('express');
const router  = express.Router();
const usersController = require('../controller/users.controller');
const nodesController = require('../controller/nodes.controller');

const { createUser, getUsers, loginUser, authenticate } = usersController;
const { createNode, getNodes, getOneNode } = nodesController;

// paths for router
router
  .post('/users/',    (req, res) => createUser(req, res))
  .post('/user/',     (req, res, next) => authenticate(req, res, next),
                      (req, res) => loginUser(req, res))

  .get('/users/',     (req, res) => getUsers(req, res))
  .get('/user/:id',   (req, res) => getOneUser(req, res))

  .post('/nodes/',    (req, res) => createNode(req, res))

  .get('/nodes/',     (req, res) => getNodes(req, res))
  .get('/nodes/:limit.:skip',     (req, res) => getNodes(req, res))

  .get('/node/:id',  (req, res) => getOneNode(req, res))
  .all('/',           (req, res) => {
    console.log('Echo 404 on catch-all');
    return res.sendStatus(404);});

  module.exports = router
