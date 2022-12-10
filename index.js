const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const path = require("path");

/****           MIDDLE WARE   ******/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

/*            ROUTES                */
app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => {
  console.log("listening on port.... " + port);
});
