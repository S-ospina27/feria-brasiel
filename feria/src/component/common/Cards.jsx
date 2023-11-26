const url_img = import.meta.env.VITE_SERVER_IMG;
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "../../css/Card.module.css";
const Cards = ({ product }) => {
  const { briefcase_photo, briefcase_name, briefcasecol_description } = product;
  return (
    <Card sx={{ maxWidth: 250 }} className={styled.cards} style={{height:"400px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={`${url_img}${briefcase_photo}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {briefcase_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {briefcasecol_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
