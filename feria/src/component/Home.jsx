import { Grid } from "@mui/material";
import styled from "../css/Home.module.css";
import Cards from "../component/common/Cards";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllbriefcase } from "../component/data/Home.js";
import { set } from "../tools/SessionSettings.jsx";
const Home = () => {
  const navigate = useNavigate();
  const [products, setProductos] = useState([]);

  useEffect(() => {
    set("jwt","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRvcyI6eyJpZHJvbCI6MiwidXNlcnNfYWRkcmVzcyI6InNhbnRpYWdvb3NwaW5hQGhvdG1haWwuY29tIiwidXNlcnNfbmFtZSI6InNhbnRpYWdvIG9zcGluYSJ9LCJpYXQiOjE3MDA4NTkwOTQsImV4cCI6MTcwMDg4Nzg5NH0.ud1deoNl0XLCbPTOu2rnds6i21fBVBIb_Q2Kr6IdrLw")
    getAllbriefcase().then((res) => {
      setProductos(res.data.data);
    });
  }, []);

  return (
    <div>
      <div className={styled.container_imagen_nav}></div>
      <h1 className={styled.title_home}>Nuestros Portafolio</h1>
      <Grid container spacing={2} sx={{ margin: "0 auto", maxWidth: "1200px" }}>
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            key={product.idbriefcase}
            onClick={() => navigate(`/${product.briefcase_name}`)}
          >
            <Cards product={product} />
          </Grid>
        ))}
      </Grid>
      <div className={styled.container_footer_home}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            style={{
              display: "flex",
              flexDirection: " column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h2> Nosotros</h2>
            <ul>
              <li>Venta por catalogo</li>
              <li>Trabaja con nosotros</li>
              <li>blog</li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            style={{
              display: "flex",
              flexDirection: " column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h2>Información</h2>
            <ul>
              <li>Preguntas frecuentes</li>
              <li>Politicas</li>
              <li>Promosiones</li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            style={{
              display: "flex",
              flexDirection: " column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h2>Contacto</h2>
            <ul>
              <li>servicioalcliente@feriadelbrasier.com.co</li>
              <li>WhatsApp: +57 321 8272311</li>
              <li>Pqrs</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
