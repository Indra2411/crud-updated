const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Get all products
router.get("/", productController.getAllProducts);

// Get a single product
router.get("/:id", productController.getProductById);

// Create a new product
router.post("/create", productController.createProduct);

// Update a product
router.post("/update/:id", productController.updateProduct);

// Delete a product
router.get("/delete/:id", productController.deleteProduct);

module.exports = router;
