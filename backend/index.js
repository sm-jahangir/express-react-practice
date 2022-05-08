const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! Running my Node CRUD Server");
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
