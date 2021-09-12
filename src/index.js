const express = require("express");
const app = express();

// Setting up the port
const PORT = process.env.PORT || 3000;

// Setting up the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server up and runnin at http://localhost:${PORT}`);
});
