const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/openaiRoutes"));

app.get("/", (req, res) => {
  res.send("open ai index page");
});

app.listen(port, () => {
  console.log("listening on port.... " + port);
});
