const connection = require("../config/db");

// Get all categories
exports.getAllCategories = (req, res) => {
  connection.query("SELECT * FROM categories", (err, results) => {
    if (err) throw err;
    res.json({ categories: results });
  });
};

// Get a single category
exports.getCategoryById = (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM categories WHERE id = ?",
    [id],
    (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({ message: "Category not found" });
      } else {
        res.json({ category: result[0] });
      }
    }
  );
};

// Create a new category
exports.createCategory = (req, res) => {
  const { name } = req.body;
  connection.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ message: "Category created successfully" });
    }
  );
};

// Update a category
exports.updateCategory = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  connection.query(
    "UPDATE categories SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Category not found" });
      } else {
        res.json({ message: "Category updated successfully" });
      }
    }
  );
};

// Delete a category
exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  connection.query(
    "DELETE FROM categories WHERE id = ?",
    [id],
    (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Category not found" });
      } else {
        res.json({ message: "Category deleted successfully" });
      }
    }
  );
};
