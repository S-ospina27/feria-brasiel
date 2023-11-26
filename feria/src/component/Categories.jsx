import styled from "../css/Products.module.css";
import { useEffect, useState } from "react";
import { getAllBriefcase, getAllCategories } from "./data/briefcase";
import {
  getCategory,
  handleCategorySubmit,
  handleCategorySubmitEdit,
} from "./data/Products";
import DialogM from "./common/DialogM";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import SelectedBriefcase from "./common/SelectedBriefcase";
import TextFieldFile from "./common/TextFieldFile";
import DataTableM from "./common/DataTableM";
import ColumnsTable from "../tools/ColumnsTable";
const Categories = ({ alert }) => {
  const [briefcase, setBriefcase] = useState("");
  const [briefcaseAll, setBriefcaseAll] = useState([]);
  const [category, setCategory] = useState("");
  const [products_image, setProducts_image] = useState([]);
  const [categoriesAll, setCategoriesAll] = useState([]);

  const [editbriefcase, setEditbriefcase] = useState("");
  const [editcategory, seteditcategory] = useState("");
  const [editcategoryName, setEditcategoryName] = useState("");
  const [photoedit, setPhotoedit] = useState([]);
  const [open, setOpen] = useState(false);

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

    handleCategorySubmit({ briefcase, category, products_image }).then(
      (res) => {
        if (res.data.status === "success") {
          alert({
            open: true,
            message: "Categoria registrada correctamente",
            severity: "success",
          });
          getCategories();
          setBriefcase("");
          setCategory("");
          setProducts_image("");
        } else {
          alert({
            open: true,
            message: "Ocurrio un error al registrar categoria",
            severity: "error",
          });
        }
      }
    );
  };

  

  const setFields = (
    row = {
      idcategories: "",
      idbriefcase: "",
      categories_name: "",
      categories_photo: "",
    }
  ) => {
    console.log(row);
    seteditcategory(row.idcategories);
    setEditbriefcase(row.idbriefcase);
    setEditcategoryName(row.categories_name);
    setPhotoedit(row.categories_photo);
    // setRequirements_name(row.requirements_name);
  };

  const handlesubmitEdit = (e) => {
    e.preventDefault();
    if (!(photoedit instanceof File)) {
      alert({
        open: true,
        message: "La imagen es requerida",
        severity: "error",
      });
      return;
    }
    handleCategorySubmitEdit({
      editbriefcase,
      editcategory,
      editcategoryName,
      photoedit,
    }).then((res) => {
      if (res.data.status === "success") {
        alert({
          open: true,
          message: "Categoria actualizada correctamente",
          severity: "success",
        });
        getCategories();
        setOpen(false);
        setEditbriefcase("");
        seteditcategory("");
        setEditcategoryName("");
        setPhotoedit("");
      } else {
        alert({
          open: true,
          message: "Ocurrio un error al registrar categoria",
          severity: "error",
        });
      }
    });
  };

  const handleGetAllbriefcase = () => {
    getAllBriefcase().then((res) => {
      setBriefcaseAll(res.data.data);
    });
  };

  const getCategories = () => {
    getCategory().then((res) => {
      setCategoriesAll(res.data.data);
      console.log("Se ejecuto");
    });
  };

  useEffect(() => {
    handleGetAllbriefcase();
    getCategories();
  }, []);

  return (
    <Grid container spacing={2}>
      {/* Parte superior */}
      <Grid item xs={12} sx={{ mr: 1, ml: 1, mt: 1 }}>
        <Typography
          textAlign={"center"}
          variant="h5"
          gutterBottom
          sx={{ color: " #252b59" }}
        >
          Registrar categorias
        </Typography>
        <form onSubmit={handleSubmite}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <SelectedBriefcase
                value={briefcase}
                setValue={setBriefcase}
                label={"Portafolio"}
                opciones={briefcaseAll}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6}>
              <TextField
                label="Nombre categoria"
                variant="outlined"
                fullWidth
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: " #252b59", color: "#FFFFFF" }}
              >
                Registrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Grid item xs={12} sx={{ mr: 1, ml: 1 }}>
        <Grid item xs={6} md={12} sm={12} lg={12}>
          <DataTableM
            reload={getCategories}
            rows={categoriesAll}
            columns={ColumnsTable.category}
            getRowId={"idcategories"}
            onRowClick={{
              open: setOpen,
              set: setFields,
            }}
            sx={{
              height: "400px",
            }}
          />
        </Grid>
        <DialogM open={open} setOpen={setOpen} title={"Editar categoria"}>
          <form onSubmit={handlesubmitEdit}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6} sm={6} lg={6}>
                <SelectedBriefcase
                  value={editbriefcase}
                  setValue={setEditbriefcase}
                  label={"Portafolio"}
                  opciones={briefcaseAll}
                />
              </Grid>
              <Grid item xs={6} md={6} sm={6} lg={6}>
                <TextField
                  label="Nombre categoria"
                  variant="outlined"
                  fullWidth
                  value={editcategoryName}
                  onChange={(e) => setEditcategoryName(e.target.value)}
                  required={true}
                />
              </Grid>
              <Grid item xs={6} md={6} sm={6} lg={6}>
                <TextFieldFile
                  type={"text"}
                  label={"Subir Archivo"}
                  value={photoedit}
                  setValue={setPhotoedit}
                  accept={[".jpg", ".png", ".jpeg"]}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: " #252b59", color: "#FFFFFF" }}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogM>
      </Grid>
    </Grid>
  );
};

export default Categories;
