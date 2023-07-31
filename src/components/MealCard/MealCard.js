import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import breakfast from "../../assets/img/d1.jpg";
import "./styles.scss";

export default function MealCard({
  cardName = "Meal",
  image = breakfast,
  onClick,
}) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card" onClick={onClick}>
      <CardActionArea className="cardbox">
        <CardMedia component="img" height="140" image={image} alt={cardName} />
        <div className="card-overlay">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text"
          >
            {cardName}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}
