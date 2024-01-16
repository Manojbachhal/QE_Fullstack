const moongose = require("mongoose");

const connection = moongose.connect(
  "mongodb+srv://manoj:kvno1chm@ikea.mkadg2e.mongodb.net/QEbookstore"
);

module.exports = { connection };
