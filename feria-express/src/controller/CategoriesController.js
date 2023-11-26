import CategoriesModel from "../model/CategoriesModel.js";
import categories from "../class/Categories.js";
import File from "../helpers/File.js";
class CategoriesController {
  constructor() {
    this.CategoriesModel = new CategoriesModel();
  }

  getAllCategoriesController = async (req, res) => {
    try {

      const data = await this.CategoriesModel.getAllCategoriesModel(req.params.idbriefcase);
      return res.success("se extragieron datos exitosamente", data);
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };
  getCategoriesController = async (req, res) => {
    try {

      const data = await this.CategoriesModel.getCategoriesModel();
      return res.success("se extragieron datos exitosamente", data);
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  createCategoriesController = async (req, res) => {
    try {
      const file = File.upFile(req.files, res);
      const category = categories.formFields(req.body);
      category.setCategories_photo(file);
      const data = await this.CategoriesModel.createtCategoriesModel(category);
      if (data) {
        return res.success("Se registro correctamente la categoria");
      }
      return res.error("Hubo un error al registrar la categoria");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  updateCategoriesController = async (req, res) => {
    try {
      const file = File.upFile(req.files, res);
      const category = categories.formFields(req.body);
      category.setCategories_photo(file);
      const data = await this.CategoriesModel.updateCategoriesModel(category);
      if (data) {
        return res.success("Se edito la categoria exitosamente");
      }
      return res.error("Hubo un error al editar la categoria");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  deleteCategoriesController = async (req, res) => {
    try {
      const data = await this.CategoriesModel.deleteCategoriesModel(
        req.params.idcategories
      );
      if (data) {
        return res.success("Se elimino correctamente la categoria");
      }
      return res.error("Hubo un error al eliminar la categoria");
    } catch (error) {
      return res.json("Ocurrrio un error " + error);
    }
  };
}

export default CategoriesController;
