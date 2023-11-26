const url_img = import.meta.env.VITE_SERVER_IMG;
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "../../css/Card.module.css";
const CardsCategory = ({ category }) => {
  const { categories_photo, categories_name } = category;
  return (
    <Card sx={{ maxWidth: 270 }} className={styled.cards}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`${url_img}${categories_photo}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography textAlign="center" gutterBottom variant="h5" component="div">
            {categories_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardsCategory;
