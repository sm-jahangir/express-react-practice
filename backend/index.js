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
    const emajohnproductsCollection = client
      .db("mobileShop")
      .collection("jmajohnproducts");

    app.get("/products", async (request, response) => {
      console.log("query", request.query);
      const page = parseInt(request.query.page);
      const size = parseInt(request.query.size);
      const query = {};
      const cursor = emajohnproductsCollection.find(query);
      let products;
      if (page || size) {
        // 0 --> skip : 0 get: 0-10(10)
        // 1 --> skip : 1*10 get: 11-20(10)
        // 2 --> skip : 2*10 get: 21-30(10)
        // 3 --> skip : 3*10 get: 31-40(10)
        products = await cursor
          .skip(page * size)
          .limit(size)
          .toArray();
      } else {
        products = await cursor.toArray();
      }
      response.send(products);
    });
    app.get("/product/:id", async (request, response) => {
      const id = request.params.id;
      const query = { _id: ObjectId(id) };
      const product = await emajohnproductsCollection.findOne(query);
      response.send(product);
    });
    app.post("/product", async (request, response) => {
      // create a document to insert
      const newProduct = request.body;
      const result = await emajohnproductsCollection.insertOne(newProduct);
      response.send(result);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    });
    app.delete("/product/:id", async (request, response) => {
      const id = request.params.id;
      const query = { _id: ObjectId(id) };
      const result = await emajohnproductsCollection.deleteOne(query);
      if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
      response.send(result);
    });

    // Module 67 work Start Here
    app.get("/productCount", async (request, response) => {
      // const query = {};
      // const cursor = emajohnproductsCollection.find(query);
      const count = await emajohnproductsCollection.estimatedDocumentCount();
      // response.json(count) //ba nicher ta
      response.send({ count });
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
