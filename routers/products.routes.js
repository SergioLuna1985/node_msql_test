import express from "express";
import {getAllProducts, getProduct ,getProductsByCategory, getProductGreaterThanPrice, 
    getProductLessThanPrice ,addProduct} from "../controllers/products.controller.js";
const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.get("/products/category/:categoryId", getProductsByCategory);
router.get("/products/price/greater/:price", getProductGreaterThanPrice);
router.get("/products/price/less/:price", getProductLessThanPrice);
router.post("/products", addProduct);

export default router;