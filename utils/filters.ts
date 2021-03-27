const height = (rocketA, rocketB) =>
  rocketB.height.meters - rocketA.height.meters;

const firstFlight = (rocketA, rocketB) =>
  rocketB.first_flight - rocketA.first_flight;

const numberOfLandingLegs = (rocketA, rocketB) =>
  rocketB.landing_legs.number - rocketA.landing_legs.number;

export const filterDataBy = (filter, unsortedData) => {
  const sortedData = unsortedData.sort((rocketA, rocketB) =>
    filter(rocketA, rocketB),
  );

  return sortedData;
};

export const rocketFilters = {
  height: { label: "Height", filterFunc: height },
  costPerLaunch: {
    label: "First Fligth",
    filterFunc: firstFlight,
  },
  numberOfLandingLegs: {
    label: "Number Of Landing Legs",
    filterFunc: numberOfLandingLegs,
  },
};
