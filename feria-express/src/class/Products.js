class Products {
  constructor() {
    this.idProducts = null;
    this.idcategories = null;
    this.Products_price = null;
    this.Products_reference = null;
    this.Products_size = null;  // Corregido: Eliminé el "this" adicional
    this.Products_color = null;
    this.Products_photo = null;
  }

  setIdProducts(idProducts) {
    this.idProducts = idProducts;
  }

  setProducts_photo(Products_photo) {
    this.Products_photo = Products_photo;
  }

  setIdcategories(idcategories) {
    this.idcategories = idcategories;
  }

  setProducts_price(Products_price) {
    this.Products_price = Products_price;
  }

  setProducts_reference(Products_reference) {
    this.Products_reference = Products_reference;
  }

  setProducts_size(Products_size) {
    this.Products_size = Products_size;
  }

  setProducts_color(Products_color) {
    this.Products_color = Products_color;
  }

  getIdProducts() {
    return this.idProducts;
  }

  getProducts_photo() {
    return this.Products_photo;
  }

  getIdcategories() {
    return this.idcategories;
  }

  getProducts_price() {
    return this.Products_price;
  }

  getProducts_reference() {
    return this.Products_reference;
  }

  getProducts_size() {
    return this.Products_size;
  }

  getProducts_color() {
    return this.Products_color;
  }

  static formFields(datos) {
    const product = new Products();

    product.setIdProducts(
      [null, undefined].includes(datos.idProducts) ? null : datos.idProducts
    );
    product.setProducts_photo(
      [null, undefined].includes(datos.Products_photo)
        ? null
        : datos.Products_photo
    );
    product.setIdcategories(
      [null, undefined].includes(datos.idcategories) ? null : datos.idcategories
    );
    product.setProducts_price(
      [null, undefined].includes(datos.Products_price)
        ? null
        : datos.Products_price
    );
    product.setProducts_reference(
      [null, undefined].includes(datos.Products_reference)
        ? null
        : datos.Products_reference
    );
    product.setProducts_size(
      [null, undefined].includes(datos.Products_size)
        ? null
        : datos.Products_size
    );
    product.setProducts_color(
      [null, undefined].includes(datos.Products_color)
        ? null
        : datos.Products_color
    );

    return product;
  }
}

export default Products;
