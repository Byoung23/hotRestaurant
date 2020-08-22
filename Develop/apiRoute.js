// var reservationTable = require("../Develop/tables");
var waitingListArr = require("../Develop/waitingList");
var tables = require("../Develop/reservations");
const { table } = require("console");


module.exports = function(app) {
// routes 
//reservations routes
//get
app.get("/api/reservations", function(req, res){
    res.json(tables);
    console.log("reservations page  is here");
  });
// waitinglist routes
// get
   app.get("/api/waitingList", function() {
   res.json(waitingListArr);
   console.log("waiting list page  is here");
   });


   //post 
   app.post("/api/reservations", function(req, res) {
    tables.push(req.body);
    if (table.length < 3){
        res.json(true)
    }
    else {
        waitingListArr.push(req.body);
        res.json(false);
    }

   });

}
        //
