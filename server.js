const express = require('express');

//Config
require('dotenv').config();
const PORT = process.env.PORT;
console.log("My port is:", PORT);

const app = express();
//Routes
app.get('/', (req, res) => {
  res.send("welcome to a awseome app about breads");
});
// Listen
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    });