import { connection } from "../configs/mySQL.js";

class CategoriesModel {
  getAllCategoriesModel = async (idbriefcase) => {
    const [query] = await connection.query(
      "SELECT * FROM get_categories WHERE idbriefcase = ?",
      idbriefcase
    );
    return query;
  };
  getCategoriesModel = async () => {
    const [query] = await connection.query(
      "SELECT * FROM get_categories ORDER BY idcategories DESC"
    );
    return query;
  };

  createtCategoriesModel = async (Categories) => {
    try {
      const [query] = await connection.execute(
        "CALL create_categories (?,?,?)",
        [
          Categories.idbriefcase,
          Categories.categories_name,
          Categories.categories_photo,
        ]
      );

      return query;
    } catch (error) {
      console.log(error);
    }
  };

  updateCategoriesModel = async (Categories) => {
    try {
      const [query] = await connection.execute(
        "CALL update_categories (?,?,?,?)",
        [
          Categories.idbriefcase,
          Categories.categories_name,
          Categories.categories_photo,
          Categories.idcategories,
        ]
      );

      return query;
    } catch (error) {
      console.log(error);
    }
  };

  deleteCategoriesModel = async (idcategories) => {
    const [query] = await connection.query(
      "DELETE FROM categories WHERE idcategories = ?",
      idcategories
    );
    return query;
  };
}

export default CategoriesModel;
