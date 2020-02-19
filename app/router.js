const express = require('express');
const controler= require('./controler');

const Router = express.Router();

Router.get('/', controler.index)
      .get('/chat',controler.chat);

module.exports= Router;