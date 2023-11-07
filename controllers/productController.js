import Product from "../models/productModel.js";

// Create Product
export const createProduct = async (req, res) => {
  try {
    const {name, description, price, quantity, quality, shipping} = req.body;

    if (!name || !description || !price || !quantity) {
      return res.status(400).send("All required fields must be provided");
    }

    const newProduct = new Product({name, description, price, quantity, quality, shipping}
    );

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Products
export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//Get Single Product
export const getSingleProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
  
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //Update Single Product
  export const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
  
      const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //Delete Single Product
  export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      const product = await Product.findByIdAndDelete(id);
  
      if (product) {
        res.status(200).json({ message: "Product deleted successfully" });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
