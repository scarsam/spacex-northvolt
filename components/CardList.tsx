import { useState } from "react";
import {
  filterDataBy,
  height,
  id,
  costPerLaunch,
  numberOfLandingLegs,
} from "../utils/filters";

const CardList = ({ rockets }) => {
  const [filteredRockets, setFilteredRockets] = useState(rockets);

  const handleFilter = (filter) => {
    const result = filterDataBy(filter, rockets);
    setFilteredRockets([...result]);
  };

  return (
    <>
      <div className="flex">
        <div className="m-5">
          <button onClick={() => handleFilter(height)}>height</button>
        </div>
        <div className="m-5">
          <button onClick={() => handleFilter(id)}>id</button>
        </div>
        <div className="m-5">
          <button onClick={() => handleFilter(costPerLaunch)}>cost</button>
        </div>
        <div className="m-5">
          <button onClick={() => handleFilter(numberOfLandingLegs)}>
            legs
          </button>
        </div>
      </div>
      {filteredRockets.map((rocket) => (
        <div key={rocket.id} className="mb-10">
          <p>ID: {rocket.id}</p>
          <p>Height: {rocket.height.meters}</p>
          <p>Cost: {rocket.cost_per_launch}</p>
          <p>Legs: {rocket.landing_legs.number}</p>
        </div>
      ))}
    </>
  );
};

export default CardList;
