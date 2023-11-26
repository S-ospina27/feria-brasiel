import { connection } from "../configs/mySQL.js";

class BriefcaseModel {
  getAllBriefcaseModel = async () => {
    const [query] = await connection.query("SELECT * FROM get_briefcase");
    return query;
  };

  createBriefcaseModel = async (Briefcase) => {
    try {
      const [query] = await connection.execute(
        "CALL create_briefcase (?,?,?)",
        [
          Briefcase.briefcase_name,
          Briefcase.briefcase_photo,
          Briefcase.briefcasecol_description,
        ]
      );

      return query;
    } catch (error) {
      console.log(error);
    }
  };

  updateBriefcaseModel = async (Briefcase) => {
    try {
      const [query] = await connection.execute(
        "CALL update_briefcase (?,?,?,?)",
        [
          Briefcase.idbriefcase,
          Briefcase.briefcase_name,
          Briefcase.briefcase_photo,
          Briefcase.briefcasecol_description,
        ]
      );

      return query;
    } catch (error) {
      console.log(error);
    }
  };
}

export default BriefcaseModel;
