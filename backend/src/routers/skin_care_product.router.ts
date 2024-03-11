import { Router } from "express";
import { SKin_CareModel } from "../models/skin_care.model";
import asyncHandler from 'express-async-handler';

const router = Router();


router.get("/", async (req, res) => {
  try {
    const skinProducts = await SKin_CareModel.find();
    res.json(skinProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.delete("/:Id", (async (req, res) => {
  const productId = req.params.Id;
  console.log("id",productId);

  try {
      const deletedProduct = await SKin_CareModel.findByIdAndDelete(productId);

      if (!deletedProduct) {
          return res.status(404).json({ error: 'Product not found' });
      }

      res.json({ message: 'Product deleted successfully' });
  } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
}));



router.post("/", asyncHandler(async (req, res) => {
  const productData = req.body;

  try {
    const newProduct = await SKin_CareModel.create(productData);
    res.status(201).json(newProduct);  // 201 status for successful creation
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}));


export default router;