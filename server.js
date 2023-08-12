const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Oleksii:27HYAYmfX2qr45hw@cluster0.5rdcghc.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
    console.log("Database connect successfull");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
