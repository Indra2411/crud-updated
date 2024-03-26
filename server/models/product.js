const connection = require("../config/db");

const Product = function (product) {
  this.name = product.name;
  this.category_id = product.category_id;
};

// Get all products
Product.getAllProducts = (result) => {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("Error while fetching products", err);
      result(null, err);
    } else {
      console.log("Products fetched successfully");
      result(null, res);
    }
  });
};

// Get a single product
Product.getProductById = (id, result) => {
  connection.query("SELECT * FROM products WHERE id = ?", [id], (err, res) => {
    if (err) {
      console.log("Error while fetching product", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// Create a new product
Product.createProduct = (productData, result) => {
  connection.query("INSERT INTO products SET ?", productData, (err, res) => {
    if (err) {
      console.log("Error while creating product", err);
      result(null, err);
    } else {
      console.log("Product created successfully");
      result(null, res);
    }
  });
};

// Update a product
Product.updateProduct = (id, productData, result) => {
  connection.query(
    "UPDATE products SET ? WHERE id = ?",
    [productData, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating product", err);
        result(null, err);
      } else {
        console.log("Product updated successfully");
        result(null, res);
      }
    }
  );
};

// Delete a product
Product.deleteProduct = (id, result) => {
  connection.query("DELETE FROM products WHERE id = ?", [id], (err, res) => {
    if (err) {
      console.log("Error while deleting product", err);
      result(null, err);
    } else {
      console.log("Product deleted successfully");
      result(null, res);
    }
  });
};
// get all product with category name
Product.getAllProductsWithCategories = (result) => {
  connection.query(
    "SELECT p.id, p.name, c.name AS name FROM products p JOIN categories c ON p.category_id = c.id",
    (err, res) => {
      if (err) {
        console.log("Error while fetching products", err);
        result(null, err);
      } else {
        console.log("Products fetched successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Product;
