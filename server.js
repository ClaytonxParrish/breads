const express = require('express');

//Config
require('dotenv').config();
const PORT = process.env.PORT;
console.log("My port is:", PORT);

const app = express();

//Routes
app.get('/', (req, res) => {
  res.send("welcome to a awesome app about breads");
});

//Breads Routes
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController);

// Listen
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    });