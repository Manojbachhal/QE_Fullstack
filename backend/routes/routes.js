const express = require("express");
const router = express.Router();
const Books = require("../model/books.js");
router.get("/", (request, response) => {
  response.send("temsfdkj");
});
router.get("/books", async (request, response) => {
  let data = await Books.find({});
  response.send(data);
});
module.exports = router;
