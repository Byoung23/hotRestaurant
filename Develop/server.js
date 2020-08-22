const express = require('express');
const tables = require('./reservations');
const waitingListArr = require('./waitingList');


const app = express();

const PORT = 3000;




app.listen(PORT, function () {

    console.log("Restuarant app listening on PORT " + PORT);

  });
  
