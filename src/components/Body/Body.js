import { Grid } from "@mui/material";
import MealList from "../MealList/MealList";
import "./styles.scss";

export default function Body() {
  return (
    <Grid container justifyContent="center">
      <MealList className="meal-list" />
    </Grid>
  );
}
