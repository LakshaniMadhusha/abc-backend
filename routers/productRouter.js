import express from 'express';
import { createProduct, getProductInfo, getProducts, updateProduct } from '../controller/productController.js';
import { deleteProduct } from '../controller/userController.js';

const productRouter=express.Router();
productRouter.post("/",createProduct)
productRouter.get("/",getProducts)
productRouter.get("/:productId",getProductInfo)
productRouter.delete("/:productId",deleteProduct)
productRouter.put("/:productId",updateProduct)

export default productRouter;