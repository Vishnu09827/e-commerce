const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

require("dotenv").config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB connected Successfully"))
  .catch((err) => console.error(err));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.get("/api/test", () => {
  console.log("test is successfully ");
});

app.listen(process.env.PORT || 5000, () =>
  console.log("Server is listening on port: 5000")
);
