const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// to get pagination
router.get("/", productController.index);

// Get all products
router.get("/getall", productController.getAllProducts);

// Get a single product
router.get("/:id", productController.getProductById);

// Create a new product
router.post("/create", productController.createProduct);

// Update a product
router.put("/update/:id", productController.updateProduct);

// Delete a product
router.delete("/delete/:id", productController.deleteProduct);

// to get all products with category name
// router.get("/allproducts", productController.getAllProductsWithCategories);

module.exports = router;
