import { Divider, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "../css/Pijamas.module.css";
import SearchIcon from "@mui/icons-material/Search";
import React, { useRef } from "react";
import { getAllCategories } from "./data/briefcase.js";
import CardsCategory from "./common/CardsCategory.jsx";
import { getProductsByCategory } from "./data/Products.js";
import CardsProducts from "./common/CardsProducts.jsx";

const Deportivos = () => {
  const scrollView = useRef(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputsearch, setInputsearch] = useState("");

  const handlegetCategories = (idcategories) => {
    getProductsByCategory(idcategories).then((res) => {
      setProducts(res.data.data);
      setFilteredProducts(res.data.data);
    });
  };

  const FilterProducts = (dato_input) => {
    const searchTerm = dato_input.target.value.toLowerCase();
    setInputsearch(searchTerm);

    const datos = products.filter((item) => {
      const Products_reference =
        item.Products_reference.toLowerCase().includes(searchTerm);
      const Products_size =
        item.Products_size.toLowerCase().includes(searchTerm);
      const Products_price = String(item.Products_price)
        .toLowerCase()
        .includes(searchTerm);

      return Products_reference || Products_size || Products_price;
    });

    setFilteredProducts(searchTerm !== "" ? datos : products);
  };

  useEffect(() => {
    getAllCategories(3).then((res) => setCategories(res.data.data));
  }, []);

  useEffect(() => {
    if (scrollView.current) {
      scrollView.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [products]);

  return (
    <div>
      <h1 className={styled.title_pijamas}>Categorias</h1>
      <Grid container spacing={2} sx={{ margin: "0 auto", maxWidth: "1200px" }}>
        {categories.map((category) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            key={category.idcategories}
            onClick={() => handlegetCategories(category.idcategories)}
          >
            <CardsCategory category={category} />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mt: 1, mb: 1 }}>
        <h1 className={styled.title_pijamas}>Productos</h1>
      </Divider>
      <div className={styled.container_inputSearch}>
        <input
          className={styled.input_search_pijama}
          type="text"
          placeholder="Buscar"
          value={inputsearch}
          onChange={(e) => FilterProducts(e)}
        />
        <SearchIcon />
      </div>
      <Grid
        container
        spacing={2}
        sx={{ margin: "0 auto", maxWidth: "1200px" }}
        ref={scrollView}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={product.idProducts}>
              <CardsProducts product={product} />
            </Grid>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "5px",
              color: "#252b59",
            }}
          >
            <h2>Aun no seleccionas ninguna categoria</h2>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default Deportivos;
