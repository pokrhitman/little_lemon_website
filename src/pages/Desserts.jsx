import DessertsList from "../components/DessertsList";
import { desserts } from "../data/dessertsData";


function Desserts() {
  return (
    <section>
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </section>
  );
}

export default Desserts;