/**
 * =======================
 * Basic Installation
 * ========================
 *
 * Create root folder
 * npm init
 * Create entry point: (index.js)
 * npm install express
 * https://expressjs.com/en/starter/hello-world.html //hello world section require and add this section
 * install nodemon cmd: npm install --save-dev nodemon
 * cmd start text change from package.json-> scripts->"start": "node index.js","start-dev": "nodemon index.js",
 * react a use korar jonno https://expressjs.com/en/resources/middleware/cors.html
 *      1. link a jeye npm install cors install kore 2.var cors = require('cors') 3. app.use(cors()) korte hobe
 * post api created and its not working solution: app.use(express.json()); use it to working success
 *
 *
 */
/**
 * 1. npm install mongodb --save
 * 2. mongodb account create korte hobe
 * 3. Network access dichi
 * 4. User and Password Create korchi
 * 5. Database a jeye "connect" a click korchi Then "connect your application" then full code copy kore index.js files a bosaichi, password ta replace kore diye console.log korchi
 *
 * 6.
 */

/**
 * ======================================================
 *        HardCoded insertOne() way Data Inserted
 *                    module-63
 * ======================================================
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
    const userCollection = client.db("foodExpress").collection("users");
    const user = { name: "Shahin Alam", email: "shahin@mail.com" };
    const result = await userCollection.insertOne(user);
    console.log(`User inserted with id: ${result.insertedId}`);
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


*/

/**
 * ===============================================================
 *          CRUD OPERATION
 * ===============================================================
 * 1. Node mongodb Crud > Fundamentals
 * 2. create async run function
 * -------------------------------
 * Integrate sending data from client to server
 * 1. Client side: create form
 * 2. on submit get form data and create user object
 * 3. on Server : Create user POST METHOD to reveive data on the backend
 * 4. on client side: set fetch with POST, headers, body
 * 5. Make Sure you return a json from the POST API (mane API a hit korar por backend er `res.send({ result: "User Data received" });` er je response ache seta frontend a dekhay kina ata sure hote hobe)
 * 6.
 */

// ===================================================================
// Programming Hero Documentation
// ===================================================================
/**
 * 1. Create a node server with 5 steps
 * 1.1. create folder
 * 1.2. npm init
 * 1.3. npm i express cors mongodb
 * 1.4. script-dev: nodemon index.js
 * 1.5. create index.js
 * 1.6. use 5 steps to create a node server
 *
 * -------------------
 * Create Atlas Account
 * -------------------
 * 1. sign up. google access
 * 2. create cluster
 * 3. Create user dbUser and password
 * 4. Network Access --> ip address: allow all
 * 5. database > Connect > code copy paste in index.js
 * ---------------------
 * CRUD Operation
 * -------------------
 * 1. node mongodb CRUD > Fundamentals
 * 2. create async run function
 * ---------------------------------------------
 * Integrate sending data from client to server
 * ----------------------------------------------
 * 1. Client side: create form
 * 2. on submit get form data and create user object
 * 3. on Server: Create user POST method to receive data on the backend
 * 4. on client side: set fetch with POST, headers, body
 * 5. Make sure you return a json from the POST API
 * ---------------------------
 * LOAD Data to the client side
 * -------------------------------
 * 1. create get API on the server
 * 2. create a query object
 * 3. collection.find (query)
 * 4. cursor.toArray()
 * 5. return the result
 * 6. from client useEffect and display like you have done before
 * ---------------------------
 * DELETE
 * ---------------------------
 */
