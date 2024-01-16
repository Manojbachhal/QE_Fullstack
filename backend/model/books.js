const moongoose = require("mongoose");
const booksScehema = moongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
});
const Books = moongoose.model("Books", booksScehema);
module.exports = Books;
