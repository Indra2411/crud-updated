const connection = require('../config/db');

const Category = function(category) {
  this.name = category.name;
};

// Get all categories
Category.getAllCategories = (result) => {
  connection.query('SELECT * FROM categories', (err, res) => {
    if (err) {
      console.log('Error while fetching categories', err);
      result(null, err);
    } else {
      console.log('Categories fetched successfully');
      result(null, res);
    }
  });
};

// Get a single category
Category.getCategoryById = (id, result) => {
  connection.query('SELECT * FROM categories WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('Error while fetching category', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// Create a new category
Category.createCategory = (categoryData, result) => {
  connection.query('INSERT INTO categories SET ?', categoryData, (err, res) => {
    if (err) {
      console.log('Error while creating category', err);
      result(null, err);
    } else {
      console.log('Category created successfully');
      result(null, res);
    }
  });
};

// Update a category
Category.updateCategory = (id, categoryData, result) => {
  connection.query('UPDATE categories SET ? WHERE id = ?', [categoryData, id], (err, res) => {
    if (err) {
      console.log('Error while updating category', err);
      result(null, err);
    } else {
      console.log('Category updated successfully');
      result(null, res);
    }
  });
};

// Delete a category
Category.deleteCategory = (id, result) => {
  connection.query('DELETE FROM categories WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('Error while deleting category', err);
      result(null, err);
    } else {
      console.log('Category deleted successfully');
      result(null, res);
    }
  });
};

module.exports = Category;