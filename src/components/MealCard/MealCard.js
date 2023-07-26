import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import breakfast from "../../assets/img/d1.jpg";
import "./styles.scss";

export default function MealCard({ cardName = "Meal" }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className="cardbox">
        <CardMedia
          component="img"
          height="140"
          image={breakfast}
          alt={cardName}
          className="card"
        />
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
