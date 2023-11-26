import BriefcaseModel from "../model/BriefcaseModel.js";
import briefcase from "../class/Briefcase.js";
import File from "../helpers/File.js";
class BriefcaseController {
  constructor() {
    this.BriefcaseModel = new BriefcaseModel();
  }

  getAllBriefcaseController = async (req, res) => {
    try {
      const data = await this.BriefcaseModel.getAllBriefcaseModel();
      return res.success("Se encontraron datos", data);
    } catch (error) {
      return res.error("Ocurrrio un error ");
    }
  };

  createBriefcaseController = async (req, res) => {
    try {
      const file = File.upFile(req.files, res);
      const briefcase_data = briefcase.formFields(req.body);
      briefcase_data.setBriefcase_photo(file);
      const data = await this.BriefcaseModel.createBriefcaseModel(
        briefcase_data
      );
      if (data) {
        return res.success("Se registro con exito el portafolio");
      }
      return res.error("Fallo el registro del portafolio");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };

  updateBriefcaseController = async (req, res) => {
    try {
      const file = File.upFile(req.files, res);
      const briefcase_data = briefcase.formFields(req.body);
      briefcase_data.setBriefcase_photo(file);
      const data = await this.BriefcaseModel.updateBriefcaseModel(
        briefcase_data
      );
      if (data) {
        return res.success("Se edito con exito el portafolio");
      }
      return res.error("Fallo la edición del portafolio");
    } catch (error) {
      return res.error("Ocurrrio un error " + error);
    }
  };
}

export default BriefcaseController;
