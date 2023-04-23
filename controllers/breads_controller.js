const express = require('express');
const breads = express.Router();

const Bread = require('../models/breads.js')

//INDEX - Read All
breads.get('/', (req, res) => {
    res.send(Bread)  
})

module.exports = breads

//Read One
breads.get('/:arrayIndex', (req, res) => {;
    const arrayIndex = req.params.arrayIndex;
    res.send(Bread[arrayIndex]);
});

//EXPORT
module.exports = breads;