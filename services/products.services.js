import express from "express";
import {insert, select, selectByCategory, selectGreaterThanPrice, 
  selectLessThanPrice} from "../models/products.model.js";


const getAllProducts =  async () => {
    return await select();
};

const getProductsByCategory = async (categoryId) => {
  return await selectByCategory(categoryId);
}

const getProductGreaterThanPrice = async (price) => {
  const products = await selectGreaterThanPrice(price);
  return products;
}

const getProductLessThanPrice = async (price) => {
  const products = await selectLessThanPrice(price);
  return products;
}

const addProduct = async (newProduct) => {

    if (!newProduct.name || !newProduct.price || !newProduct.categoryId) {
        throw new Error("Faltan datos del producto");
    }

    const isInserted = await insert(newProduct);
    if (isInserted) {
        return newProduct;
    }
    throw new Error("Error al agregar el producto");
};


export default { getAllProducts, getProductsByCategory, getProductGreaterThanPrice, getProductLessThanPrice, addProduct };