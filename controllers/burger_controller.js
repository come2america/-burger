var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgermod = require("../models/burger.js");



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgermod.all(function(data) {
  console.log(data)
    res.render("index", { Burgers: data});
  });
});

router.post("/api/burgers", function(req, res) {
  burgermod.create([
    "Burgers", "Devoured"
  ], [
    req.body.Burgers, req.body.Devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    res.render("index", { Burgers: data});
  });
});

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.ID;

//   console.log("condition", condition);

//   burger.update({
//     Devoured: req.body.Devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

router.delete("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
