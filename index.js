const express = require("express");
const app = express();
const config = require("./knexfile");
const db = require("knex")(config.development);

app.get("/", (req, res) => {
  db("cities")
    .select("*")
    .then((response) => {
      res.json({ data: response });
    })
    .catch((error) => {
      console.log(error);
      res.json({ eeror: "" });
    });
});

app.listen(4000, () => {
  console.log("server running...");
});
