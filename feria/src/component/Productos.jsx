import { useEffect, useState } from "react";
import { getAllBriefcase, getAllCategories } from "./data/briefcase";
import {
  DeleteMassive,
  getAllProducts,
  getCategory,
  handleCategorySubmitEdit,
  handleProductEditSubmit,
  handleProductSubmit,
} from "./data/Products";
import DialogM from "./common/DialogM";
import { Button, Grid, TextField, Typography } from "@mui/material";
import TextFieldFile from "./common/TextFieldFile";
import ColumnsTable from "../tools/ColumnsTable";
import DataTableCheckbox from "./common/DataTableCheckbox";
import SelectedCategory from "./common/SelectedCategory";
const Productos = ({ alert }) => {
  const [category, setCategory] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [price, setprice] = useState(0);
  const [products_image, setProducts_image] = useState([]);
  const [items, setItems] = useState([]);
  const [productsAll, setProductsAll] = useState([]);
  const [categoriesAll, setCategoriesAll] = useState([]);

  const [idproduct, setidproduct] = useState("");
  const [editcategory, setEditCategory] = useState("");
  const [editnameProduct, setEditNameProduct] = useState("");
  const [editcolor, setEditColor] = useState("");
  const [editsize, setEditSize] = useState("");
  const [editprice, setEditprice] = useState(0);
  const [editproducts_image, setEditProducts_image] = useState([]);

  const [open, setOpen] = useState(false);
  const handleMassiveDelete = () => {
    if (items.length > 0) {
      DeleteMassive(items).then((res) => {
        if (res.data.status === "success") {
          alert({
            open: true,
            message: "Se eliminaron los productos correctamente",
            severity: "success",
          });
          handleGetAllProducts();
          setItems([]);
        } else {
          alert({
            open: true,
            message: "Ocurrio un error al eliminar los productos",
            severity: "error",
          });
        }
      });
    } else {
    }
  };
  const getCategories = () => {
    getCategory().then((res) => {
      setCategoriesAll(res.data.data);
    });
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    if (products_image.length === 0) {
      alert({
        open: true,
        message: "La imagen es requerida",
        severity: "error",
      });
      return;
    }

    handleProductSubmit({
      nameProduct,
      size,
      category,
      products_image,
      price,
      color,
    }).then((res) => {
      if (res.data.status === "success") {
        alert({
          open: true,
          message: "Se registro correctamente el producto",
          severity: "success",
        });
        setNameProduct("");
        setSize("");
        setCategory("");
        setProducts_image("");
        setprice(0);
        setColor("");
        handleGetAllProducts();
      } else {
        alert({
          open: true,
          message: "Ocurrio un error al registrar el producto",
          severity: "error",
        });
      }
    });
  };

  const handleGetAllProducts = () => {
    getAllProducts().then((res) => {
      setProductsAll(res.data.data);
    });
  };

  const setFields = (
    row = {
      idProducts: "",
      idcategories: "",
      Products_price: "",
      Products_reference: "",
      Products_size: "",
      products_photo: "",
      Products_color: "",
    }
  ) => {
    setidproduct(row.idProducts);
    setEditCategory(row.idcategories);
    setEditprice(row.Products_price);
    setEditNameProduct(row.Products_reference);
    setEditSize(row.Products_size);
    setEditProducts_image(row.products_photo);
    setEditColor(row.Products_color);
  };

  const handlesubmitEdit = (e) => {
    e.preventDefault();
    if (!(editproducts_image instanceof File)) {
      alert({
        open: true,
        message: "La imagen es requerida",
        severity: "error",
      });
      return;
    }
    handleProductEditSubmit({
      idproduct,
      editcategory,
      editnameProduct,
      editcolor,
      editsize,
      editprice,
      editproducts_image,
    }).then((res) => {
      if (res.data.status === "success") {
        alert({
          open: true,
          message: "Se actualizo el producto correctamente",
          severity: "success",
        });
        handleGetAllProducts();
        setidproduct("");
        setEditCategory("");
        setEditprice("");
        setEditNameProduct("");
        setEditSize("");
        setEditProducts_image("");
        setEditColor("");
        setOpen(false);
      } else {
        alert({
          open: true,
          message: "Ocurrio un error al actualizar el producto",
          severity: "error",
        });
      }
    });
  };

  useEffect(() => {
    handleGetAllProducts();
    getCategories();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mr: 1, ml: 1, mt: 1 }}>
        <Typography
          textAlign={"center"}
          variant="h5"
          gutterBottom
          sx={{ color: " #252b59" }}
        >
          Registrar producto
        </Typography>
        <form onSubmit={handleSubmite}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <SelectedCategory
                value={category}
                setValue={setCategory}
                label={"Categorias"}
                opciones={categoriesAll}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <TextField
                label="Nombre producto"
                variant="outlined"
                fullWidth
                value={nameProduct}
                onChange={(e) => setNameProduct(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <TextField
                label="Talla"
                type="text"
                variant="outlined"
                fullWidth
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <TextField
                label="Precio"
                type="number"
                variant="outlined"
                fullWidth
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <TextFieldFile
                type={"text"}
                label={"Subir Archivo"}
                value={products_image}
                setValue={setProducts_image}
                required
                accept={[".jpg", ".png", ".jpeg"]}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <TextField
                label="Color"
                type="color"
                variant="outlined"
                fullWidth
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#252b59", color: "#FFFFFF" }}
              >
                Registrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Grid item xs={12} sx={{ mr: 1, ml: 1 }}>
        <Grid item xs={6} md={12} sm={12} lg={12}>
          <DataTableCheckbox
            setValue={setItems}
            reload={handleGetAllProducts}
            rows={productsAll}
            columns={ColumnsTable.products}
            getRowId={"idProducts"}
            onRowClick={{
              open: setOpen,
              set: setFields,
            }}
            sx={{
              height: "400px",
            }}
            toolbar={
              <Button
                type="button"
                disabled={items.length > 0 ? false : true}
                onClick={handleMassiveDelete}
                sx={{ color: " #252b59" }}
                // startIcon={<PriceCheckIcon />}
              >
                {"Eliminar"}
              </Button>
            }
          />
        </Grid>
        <DialogM open={open} setOpen={setOpen} title={"Editar Producto"}>
          <form onSubmit={handlesubmitEdit}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={12} sm={12} lg={12}>
                <TextField
                  label="ID"
                  variant="outlined"
                  fullWidth
                  value={idproduct}
                  onChange={(e) => setidproduct(e.target.value)}
                  disabled
                />
              </Grid>
              <Grid item xs={6} md={6} sm={6} lg={6}>
                <SelectedCategory
                  value={editcategory}
                  setValue={setEditCategory}
                  label={"Categorias"}
                  opciones={categoriesAll}
                />
              </Grid>
              <Grid item xs={6} md={6} sm={6} lg={6}>
                <TextField
                  label="Nombre producto"
                  variant="outlined"
                  fullWidth
                  value={editnameProduct}
                  onChange={(e) => setEditNameProduct(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} md={6} sm={6} lg={6}>
                <TextField
                  label="Talla"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={editsize}
                  onChange={(e) => setEditSize(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} md={6} sm={6} lg={6}>
                <TextField
                  label="Precio"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={editprice}
                  onChange={(e) => setEditprice(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} md={6} sm={6} lg={6}>
                <TextFieldFile
                  type={"text"}
                  label={"Subir Archivo"}
                  value={editproducts_image}
                  setValue={setEditProducts_image}
                  required
                  accept={[".jpg", ".png", ".jpeg"]}
                />
              </Grid>
              <Grid item xs={6} md={6} sm={6} lg={6}>
                <TextField
                  label="Color"
                  type="color"
                  variant="outlined"
                  fullWidth
                  value={editcolor}
                  onChange={(e) => setEditColor(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: " #252b59", color: "#FFFFFF" }}
                >
                  Editar
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogM>
      </Grid>
    </Grid>
  );
};

export default Productos;
