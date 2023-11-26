class Categories {
  constructor() {
    this.idcategories = null;
    this.idbriefcase = null;
    this.categories_name = null;
    this.categories_photo = null;
  }

  setIdcategories(idcategories) {
    this.idcategories = idcategories;
  }
  setIdbriefcase(idbriefcase) {
    this.idbriefcase = idbriefcase;
  }
  setCategories_name(categories_name) {
    this.categories_name = categories_name;
  }
  setCategories_photo(categories_photo) {
    this.categories_photo = categories_photo;
  }

  getIdcategories() {
    return this.idcategories;
  }
  getIdbriefcase() {
    return this.idbriefcase;
  }
  getCategories_name() {
    return this.categories_name;
  }
  getCategories_photo() {
    return this.categories_photo;
  }

  static formFields(datos) {
    const categories = new Categories();
    categories.setIdcategories(
      [null, undefined].includes(datos.idcategories) ? null : datos.idcategories
    );
    categories.setIdbriefcase(
      [null, undefined].includes(datos.idbriefcase) ? null : datos.idbriefcase
    );
    categories.setCategories_name(
      [null, undefined].includes(datos.categories_name)
        ? null
        : datos.categories_name
    );

    categories.setCategories_photo(
      [null, undefined].includes(datos.categories_photo)
        ? null
        : datos.categories_photo
    );
    return categories;
  }
}

export default Categories;
