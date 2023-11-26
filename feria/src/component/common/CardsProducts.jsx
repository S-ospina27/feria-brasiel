const url_img = import.meta.env.VITE_SERVER_IMG;

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "../../css/Card.module.css";
const CardsProducts = ({ product }) => {
  const {
    Products_reference,
    Products_size,
    Products_color,
    products_photo,
    Products_price,
  } = product;
  return (
    <Card sx={{ maxWidth: 205, mb:2 }} className={styled.cards} style={{height:"400px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={url_img + products_photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {Products_reference}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Talla: ${Products_size}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Precio: ${Products_price}`}
          </Typography>
          <div style={{display:"flex", alignItems: "center" }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              Color
            </Typography>
              <input type="color" value={Products_color} disabled={true}  style={{ border:"none"}}/>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardsProducts;
