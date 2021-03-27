import { FilterByTypes, FilterTypes } from "../types/Filter";

const height = ({ rocketA, rocketB }: FilterTypes) =>
  rocketB.height.meters - rocketA.height.meters;

const firstFlight = ({ rocketA, rocketB }: FilterTypes) =>
  rocketB.first_flight - rocketA.first_flight;

const numberOfLandingLegs = ({ rocketA, rocketB }: FilterTypes) =>
  rocketB.landing_legs.number - rocketA.landing_legs.number;

export const filterDataBy = ({ filter, unsortedData }: FilterByTypes) => {
  const sortedData = unsortedData.sort((rocketA, rocketB) =>
    filter({ rocketA, rocketB }),
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
    label: "Landing Legs",
    filterFunc: numberOfLandingLegs,
  },
};
