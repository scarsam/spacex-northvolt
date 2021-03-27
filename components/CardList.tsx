import { useState } from "react";
import Card from "./Card";
import Select from "./Select";
import { displayDate } from "../utils/date";
import { rocketFilters, filterDataBy } from "../utils/filters";

const CardList = ({ rockets }) => {
  const [filter, setFilter] = useState(null);
  const [filteredRockets, setFilteredRockets] = useState(rockets);

  const handleFilter = (event) => {
    const { filterFunc } = rocketFilters[event.target.value];

    setFilter(event.target.value);
    const result = filterDataBy(filterFunc, rockets);
    setFilteredRockets([...result]);
  };

  return (
    <>
      <div className="max-w-4xl m-auto">
        <Select
          className="mb-4 block"
          label="Sort by"
          value={filter}
          onChange={handleFilter}
        >
          {Object.entries(rocketFilters).map(([filterName, values]) => (
            <option key={filterName} value={filterName}>
              {values.label}
            </option>
          ))}
        </Select>
        {filteredRockets.map((rocket) => (
          <div key={rocket.id} className="mb-10">
            <Card
              name={rocket.name}
              description={rocket.description}
              metaData={[
                `${rocket.height.meters} meters`,
                `${rocket.landing_legs.number} landing legs`,
                `First flight ${displayDate(rocket.first_flight)}`,
              ]}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardList;
