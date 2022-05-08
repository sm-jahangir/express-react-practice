const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://samraatjahangir:hul7XloBQzgqs2p7@cluster0.92306.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const users = client.db("foodExpress").collection("user");
    // create a document to insert
    const user = {
      name: "Jahangir Alam",
      email: "admin@email.com",
    };
    const result = await users.insertOne(user);
    console.log(`A User inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World! Running my Node CRUD Server");
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
