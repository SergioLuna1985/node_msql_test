import express from "express";
import productsServices from "../services/products.services.js";


export const getAllProducts = async (req, res) => {
    res.status(200).json(await productsServices.getAllProducts());
}

export const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  res.status(200).json(await productsServices.getProductsByCategory(parseInt(categoryId)));
}

export const getProductGreaterThanPrice = async (req, res) => {
  const { price } = req.params;
  res.status(200).json(await productsServices.getProductGreaterThanPrice(parseFloat(price)));
}

export const getProductLessThanPrice = async (req, res) => {
  const { price } = req.params;
  res.status(200).json(await productsServices.getProductLessThanPrice(parseFloat(price)));
}

export const addProduct = async (req, res) => {
  const newProduct = req.body;
  try {
    const addedProduct = await productsServices.addProduct(newProduct);
    res.status(201).json(addedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};