const express = require("express");
const cors = require('cors');
const productsRoutes = require("./routes/productsRoutes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoutes);

module.exports = app;
