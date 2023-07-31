import { Grid } from "@mui/material";
import { Meals } from "../../apis/dumpData/Meal";
import MealCard from "../MealCard/MealCard";

export default function MealList({ className }) {
  return Meals.map((meal) => {
    return (
      <Grid item sm={2} className={className}>
        <MealCard
          cardName={meal.name}
          image={meal.image}
          onClick={() => console.log("Meal Card")}
        />
      </Grid>
    );
  });
}
