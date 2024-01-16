const express = require("express");
const app = express();
const { connection } = require("./config/connection");

const routes = require("./routes/routes");

const cors = require("cors");
const port = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/", routes);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected");
  } catch (error) {
    console.log("Not connected");
  }
  console.log(`Server is running on http://localhost:${port}`);
});
