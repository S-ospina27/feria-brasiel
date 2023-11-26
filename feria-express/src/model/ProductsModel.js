import { connection } from "../configs/mySQL.js";

class ProductsModel {
  getAllProductsModel = async () => {
    const [query] = await connection.query("SELECT * FROM get_products");
    return query;
  };

  getProductsByCategoryModel = async (idcategory) => {
    const [query] = await connection.query(
      "SELECT * FROM get_products WHERE idcategories = ?",
      idcategory
    );
    return query;
  };

  createProductsModel = async (Products) => {
    try {
      const [query] = await connection.execute(
        "CALL create_products (?,?,?,?,?,?)",
        [
          Products.idcategories,
          Products.Products_price,
          Products.Products_reference,
          Products.Products_size,
          Products.Products_color,
          Products.Products_photo,
        ]
      );

      return query;
    } catch (error) {
      console.log(error);
    }
  };

  updateProductsModel = async (Products) => {
    try {
      const [query] = await connection.execute(
        "CALL update_product (?,?,?,?,?,?,?)",
        [
          Products.idcategories,
          Products.Products_price,
          Products.Products_reference,
          Products.Products_size,
          Products.Products_color,
          Products.Products_photo,
          Products.idProducts,
        ]
      );

      return query;
    } catch (error) {
      console.log(error);
    }
  };

  deleteProductsModel = async (idProducts) => {
    const place = idProducts.map(() => "?").join(",");
    const [query] = await connection.query(
      `DELETE FROM products WHERE idProducts IN (${place})`,
      idProducts
    );
    return query;
  };
}

export default ProductsModel;
