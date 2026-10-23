import express from "express";

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" }
];

const getAllCategories = () => {
  return categories;
};

const addCategory = (newCategory) => {
  categories.push({ id: categories.length + 1, ...newCategory });
  return newCategory;
};

export default { getAllCategories, addCategory };