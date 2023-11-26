import ProductsModel from "../model/ProductsModel.js";
import File from "../helpers/File.js";
import Products from "../class/Products.js";
class ProductsController {
  constructor() {
    this.ProductsModel = new ProductsModel();
  }

  getAllProductsController = async (req, res) => {
    try {
      const data = await this.ProductsModel.getAllProductsModel();
      return res.success("data exitosa", data);
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  getProductsByCategoryController = async (req, res) => {
    try {
      const data = await this.ProductsModel.getProductsByCategoryModel(
        req.params.idcategory
      );
      return res.success("data exitosa", data);
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  createProductsController = async (req, res) => {
    try {
      const file = File.upFile(req.files, res);
      const product = Products.formFields(req.body);

      product.setProducts_photo(file);

      const data = await this.ProductsModel.createProductsModel(product);

      if (data) {
        return res.success("Se registro correctamente el producto");
      }
      return res.error("Hubo un error al registrar el producto");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  updateProductsController = async (req, res) => {
    try {
      const file = File.upFile(req.files, res);
      const product = Products.formFields(req.body);
      product.setProducts_photo(file);

      const data = await this.ProductsModel.updateProductsModel(product);
      if (data) {
        return res.success("Se  actualizo el producto correctamente");
      }
      return res.error("Hubo un error al actualizar el producto");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  deleteProductsController = async (req, res) => {
    try {
      const data = await this.ProductsModel.deleteProductsModel(req.body.items);
      if (data) {
        return res.success("Se elimino correctamente el producto");
      }
      return res.error("Hubo un error al eliminar el producto");
    } catch (error) {
      return res.json("Ocurrrio un error " + error);
    }
  };
}

export default ProductsController;
