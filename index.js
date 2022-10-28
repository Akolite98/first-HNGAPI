const fs = require("fs/promises");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");
const port = process.env.PORT || 3000;

const app = express();

app.get("/HNG", (req, res) => {
  const slackUsername = "Precious Nnorom";
  const backend = true;
  const age = 24;
  const bio =
    "I am Precious Nnorom, a budding backend developer that is always willing and ready to learn";
  res.json({
    slackUsername,
    backend,
    age,
    bio,
  });
});
// app.listen(3000, () => console.log("API server is running..."));
app.listen(port, () => {
  console.log(`App running on port ${port}.......`);
});
