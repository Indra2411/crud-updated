const connection = require("../config/db");

// Get all products
exports.getAllProducts = (req, res) => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    res.json({ products: results });
  });
};

// Get a single product
exports.getProductById = (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM products WHERE id = ?",
    [id],
    (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.json({ product: result[0] });
      }
    }
  );
};

// Create a new product
exports.createProduct = (req, res) => {
  const { name, category_id } = req.body;
  connection.query(
    "INSERT INTO products (name, category_id) VALUES (?, ?)",
    [name, category_id],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ message: "Product created successfully" });
    }
  );
};

// Update a product
exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, category_id } = req.body;
  connection.query(
    "UPDATE products SET name = ?, category_id = ? WHERE id = ?",
    [name, category_id, id],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.json({ message: "Product updated successfully" });
      }
    }
  );
};

// Delete a product
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json({ message: "Product deleted successfully" });
    }
  });
};
