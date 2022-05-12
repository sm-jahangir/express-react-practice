const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.92306.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const productsCollection = client.db("mobileShop").collection("products");

    app.get("/products", async (request, response) => {
      const query = {};
      const cursor = productsCollection.find(query);
      const products = await cursor.toArray();
      response.send(products);
    });
    app.get("/product/:id", async (request, response) => {
      const id = request.params.id;
      const query = { _id: ObjectId(id) };
      const product = await productsCollection.findOne(query);
      response.send(product);
    });
    app.post("/product", async (request, response) => {
      // create a document to insert
      const newProduct = request.body;
      const result = await productsCollection.insertOne(newProduct);
      response.send(result);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    });
    app.delete("/product/:id", async (request, response) => {
      const id = request.params.id;
      const query = { _id: ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
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
