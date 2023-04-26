const productService = require("../services/productsService");

module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.json({success: true, data: products});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
