import axios from "axios";
import RouteList from "../../tools/RouteList";
import { getHeader, getHeaderMultipart } from "../../tools/SessionSettings";
export async function getProductsByCategory(idcategory) {
  const response = await axios
    .get(RouteList.api.products.by_category + idcategory, getHeader())
    .catch((e) => console.log(e));
  return response;
}
export async function getCategory() {
  const response = await axios
    .get(RouteList.api.categories.get, getHeader())
    .catch((e) => console.log(e));
  return response;
}

export const handleCategorySubmitEdit = async (datos) => {
  const form = new FormData();

  form.append("idbriefcase", datos.editbriefcase);
  form.append("categories_name", datos.editcategoryName);
  form.append("categories_photo", datos.photoedit);
  form.append("idcategories", datos.editcategory);

  const response = await axios.put(
    RouteList.api.categories.update,
    form,
    getHeaderMultipart()
  );
  return response;
};
export const handleCategorySubmit = async (datos) => {
  const form = new FormData();

  form.append("idbriefcase", datos.briefcase);
  form.append("categories_name", datos.category);
  form.append("categories_photo", datos.products_image);

  const response = await axios.post(
    RouteList.api.categories.create,
    form,
    getHeaderMultipart()
  );
  return response;
};

export const handleProductSubmit = async (datos) => {
  const form = new FormData();

  form.append("idcategories", datos.category);
  form.append("Products_price", datos.price);
  form.append("Products_reference", datos.nameProduct);
  form.append("Products_size", datos.size);
  form.append("products_photo", datos.products_image);
  form.append("Products_color", datos.color);

  const response = await axios.post(
    RouteList.api.products.create,
    form,
    getHeaderMultipart()
  );
  return response;
};

export const handleProductEditSubmit = async (datos) => {
  const form = new FormData();

  form.append("idcategories", datos.editcategory);
  form.append("Products_reference", datos.editnameProduct);
  form.append("Products_price", datos.editprice);
  form.append("Products_size", datos.editsize);
  form.append("products_photo", datos.editproducts_image);
  form.append("Products_color", datos.editcolor);
  form.append("idProducts", datos.idproduct);

  const response = await axios.put(
    RouteList.api.products.update,
    form,
    getHeaderMultipart()
  );
  return response;
};

export async function getAllProducts() {
  const response = await axios
    .get(RouteList.api.products.index, getHeader())
    .catch((e) => console.log(e));
  return response;
}
export async function DeleteMassive(data) {
  const form = new FormData();
  data.forEach((item) => form.append("items[]", item));
  const response = await axios.post(
    RouteList.api.products.delete,
    form,
    getHeaderMultipart()
  );
  return response;
  // data.forEach((item) => form.append("items[]", item));
  // const response = await axios.post(
  //   RouteList.api.products.delete,
  //   form,
  //   getHeader()
  // );
  // return response;
}
