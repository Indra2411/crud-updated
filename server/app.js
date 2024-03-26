const express = require("express");
const path = require("path");
const app = express();
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client")));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

module.exports = app;
