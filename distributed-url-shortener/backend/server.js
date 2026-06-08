require("dotenv").config();

const app = require("./src/app");

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
}); 