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
    const userCollection = client.db("foodExpress").collection("user");

    app.get("/user", async (request, response) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      response.send(users);
    });
    app.post("/user", async (request, response) => {
      const newUser = request.body;
      console.log(newUser);
      const result = await userCollection.insertOne(newUser);
      response.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World! Running my Node CRUD Server");
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
