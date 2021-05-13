/**
 * Registering the ToDo API endpoints
 */
 import express from 'express';
 import productDb from '../model/product/index.js';
 const productData = new productDb(); //Create an instance of productDb
 
 import {
    getProductById,
     getProduct,
     addProduct,
     updateProduct,
     deleteProduct
 } from '../controllers/product/productController.js';
 
 /**
  * Make a Router
  */
 const router = express.Router();
 
 /**
  * Router for customers
  */
 router.get('/products', async (req, res) => await getProduct(productData, req, res)); // get customers
 router.get('/products/:productsId', async (req, res) => await getProductById(productData, req, res)); // get customers
 router.post('/products', async (req, res) => await addProduct(productData, req, res)); //add customers
 router.put('/products/:productsId', async (req, res) => await updateProduct(productData, req, res)); // update customer
 router.delete('/products/:productsId', async (req, res) => await deleteProduct(productData, req, res)); //delete customer

 export default router;
