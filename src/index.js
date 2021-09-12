const express = require("express");
const app = express();

// Setting up the port
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("Hello, world!!!");
});

app.listen(port, () => {
  console.log(`Server up and runnin at http://localhost:${PORT}`);
});
