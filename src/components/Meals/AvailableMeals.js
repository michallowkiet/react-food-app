import DUMMY_MEALS from "./dummy-meals";

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>;
  });

  return (
    <>
      <ul>{mealList}</ul>
    </>
  );
};

export default AvailableMeals;
