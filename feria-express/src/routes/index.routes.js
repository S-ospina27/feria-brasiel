import { Router } from "express";
import BriefcaseController from "../controller/BriefcaseController.js";
import CategoriesController from "../controller/CategoriesController.js";
import ProductsController from "../controller/ProductsController.js";
import AuthController from "../controller/AuthController.js";
import JWT from "../helpers/Jwt.js";
const router = Router();
const briefcaseController = new BriefcaseController();
const categoriesController = new CategoriesController();
const productsController = new ProductsController();
const authController = new AuthController();

router.post("/auth", authController.AuthController);
// router.use(JWT.verifyAuthJWT);
router.post("/briefcase", briefcaseController.createBriefcaseController);
router.get("/briefcase-getAll", briefcaseController.getAllBriefcaseController);
router.put("/briefcase-update", briefcaseController.updateBriefcaseController);
router.post("/categories", categoriesController.createCategoriesController);
router.get(
  "/categories-getAll/:idbriefcase",
  categoriesController.getAllCategoriesController
);
router.get(
  "/categories-get",
  categoriesController.getCategoriesController
);
router.put(
  "/categories-update",
  categoriesController.updateCategoriesController
);
router.delete(
  "/categories-delete/:idcategories",
  categoriesController.deleteCategoriesController
);

router.get("/products-getAll", productsController.getAllProductsController);
router.get("/products-get-by-category/:idcategory", productsController.getProductsByCategoryController);
router.post("/products", productsController.createProductsController);
router.put("/products-update", productsController.updateProductsController);
router.post(
  "/products-delete",
  productsController.deleteProductsController
);

export default router;
